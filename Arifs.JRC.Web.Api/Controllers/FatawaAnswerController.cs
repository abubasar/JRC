using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Arifs.JRC.DataModel;
using Arifs.JRC.RequestModel;
using Arifs.JRC.Service;
using Arifs.JRC.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace Arifs.JRC.Web.Api.Controllers
{
    [Route("api/fatawa-answer")]
    public class FatawaAnswerController : BaseController<FatawaAnswer, FatawaAnswerRequestModel, FatawaAnswerViewModel>
    {
        public FatawaAnswerController(IBaseService<FatawaAnswer, FatawaAnswerRequestModel, FatawaAnswerViewModel> service) : base(service)
        {
        }
    }
}
