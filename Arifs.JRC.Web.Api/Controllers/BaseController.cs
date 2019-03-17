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
    [ApiController]
    public class BaseController<T, Tr, Tv> : ControllerBase where T : BaseEntity where Tr : BaseRequestModel<T> where Tv : BaseViewModel<T>
    {
        private readonly IBaseService<T, Tr, Tv> service;
        public BaseController(IBaseService<T, Tr, Tv> service)
        {
            this.service = service;
        }
        [HttpPost]
        [Route("search")]
        public IActionResult Search(Tr request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("please vi sob field fill up koren");
            }
            var searchResult = service.Search(request);
            return Ok(searchResult);
        }
       
        [HttpPost]
        [Route("add")]
        public IActionResult POST(T model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bhai please sob field fill up koren");
            }

            var add = service.Add(model);
            return Ok(add);
        }

        [HttpPut]
        [Route("edit")]
        public IActionResult PUT(T model)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest("Bhai please sob field fill up koren");
            }

            var edit = service.Edit(model);
            return Ok(edit);
        }
       
        [Route("get/{id}")]
        [HttpGet]
        public IActionResult GET(string id)
        {
            var model = service.GetById(id);
            return Ok(model);
        }
        [Route("delete/{id}")]
        [HttpDelete]
        public IActionResult DELETE(string id)
        {
            var deleted = service.Delete(id);
            return Ok(deleted);
        }
    }
}
