using Arifs.JRC.DataModel;
using Arifs.JRC.RequestModel;
using Arifs.JRC.Service;
using Arifs.JRC.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arifs.JRC.Web.Api.Controllers
{
    [Route("api/fatawa")]
    [ApiController]
    public class FatawaController : BaseController<Fatawa, FatawaRequestModel, FatawaViewModel>
    {
        private readonly IBaseService<Fatawa, FatawaRequestModel, FatawaViewModel> service;

        public FatawaController(IBaseService<Fatawa, FatawaRequestModel, FatawaViewModel> service) : base(service)
        {
            this.service = service;
        }

       
        [HttpPost]
        [Route("add-fatawa")]
        public IActionResult Save(Fatawa model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bhai please sob field fill up koren");
            }

            model.Id = Guid.NewGuid().ToString();
            model.Created = DateTime.Now;

            var add = service.Add(model);

            return Ok(add);
        }
    }
}
