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
    [Route("api/category")]
    public class CategoryController : BaseController<Category, CategoryRequestmodel, CategoryViewModel>
    {
        public CategoryController(IBaseService<Category, CategoryRequestmodel, CategoryViewModel> service) : base(service)
        {
        }
    }
}
