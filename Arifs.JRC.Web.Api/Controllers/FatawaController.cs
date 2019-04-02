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

       
        [HttpPut]
        [Route("checked")]
        public IActionResult Patch(Fatawa model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bhai please sob field fill up koren");
            }

           

            var add = service.Edit(model);

            return Ok(add);
        }
    }
}
