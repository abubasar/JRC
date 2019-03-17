using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Arifs.JRC.DataModel;
using Arifs.JRC.RequestModel;
using Arifs.JRC.Service;
using Arifs.JRC.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace Arifs.JRC.Web.Api.Controllers
{
    [Route("api/tag")]
    public class TagController : BaseController<Tag, TagRequestModel, TagViewModel>
    {
        public TagController(IBaseService<Tag, TagRequestModel, TagViewModel> service) : base(service)
        {
        }
    }
}
