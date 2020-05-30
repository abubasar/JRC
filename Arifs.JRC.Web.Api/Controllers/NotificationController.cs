using Arifs.JRC.DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebPush;

namespace Arifs.JRC.Web.Api.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        private readonly DataContext context;
        public NotificationController( DataContext context)
        {
            this.context = context;
           
        }
       public static List<PushSubscription> Subscriptions { get; set; } = new List<PushSubscription>();

        [HttpPost("subscribe")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public void Subscribe([FromBody] PushSubscription sub)
        {
            var model = new PushSubscriptionModel();
            model.Auth = sub.Auth;
            model.EndPoint = sub.Endpoint;
            model.P256Dh = sub.P256DH;
            context.PushSubscriptionModels.Add(model);
            context.SaveChanges();
           
        }

        [HttpPost("unsubscribe")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public void Unsubscribe([FromBody] PushSubscription sub)
        {
            var item = context.PushSubscriptionModels.FirstOrDefault(s => s.EndPoint == sub.Endpoint);
            if (item != null)
            {
                context.PushSubscriptionModels.Remove(item);
                context.SaveChanges();
            }
        }
       


        [HttpPost("broadcast")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public void Broadcast([FromBody] NotificationModel message, [FromServices] VapidDetails vapidDetails)
        {
            var client = new WebPushClient();
            var serializedMessage = JsonConvert.SerializeObject(message);
            foreach (var pushSubscription in Subscriptions)
            {
                client.SendNotification(pushSubscription, serializedMessage, vapidDetails);
            }

        }


       
    }
}
