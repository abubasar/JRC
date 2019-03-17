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
    [Route("api/author")]
    public class AuthorController : BaseController<Author, AuthorRequestModel, AuthorViewModel>
    {
        public AuthorController(IBaseService<Author, AuthorRequestModel, AuthorViewModel> service) : base(service)
        {
        }
    }
}
