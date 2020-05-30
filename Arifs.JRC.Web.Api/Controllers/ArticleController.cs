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
    [Route("api/article")]
    [ApiController]
    public class ArticleController : BaseController<Article, ArticleRequestModel, ArticleViewModel>
    {
         private readonly IArticleService articleService;
        
        public ArticleController(IBaseService<Article, ArticleRequestModel, ArticleViewModel> service, IArticleService articleService) : base(service)
        {
         this.articleService = articleService;
        }


        [Produces("application/json")]
        [Route("getDetail/{id}")]
        [HttpGet]
        public IActionResult GetArticleById(string id)
        {
            Article article = articleService.GetArticleById(id);
            return Ok(article);
        }


        [Produces("application/json")]
        [HttpPost]
        [Route("PagedList")]
        public IActionResult SearchArticle(ArticleRequestModel  requestModel)
        {

            var data=   articleService.SearchArticle(requestModel);

            return Ok(data);
        }
    }
}
