using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Arifs.JRC.DataModel;
using Arifs.JRC.Repository;
using Arifs.JRC.RequestModel;
using Arifs.JRC.ViewModel;

namespace Arifs.JRC.Service
{
    public class ArticleService:IArticleService
    {
        private readonly IArticleRepository repository;

        public ArticleService(IArticleRepository repository)
        {
            this.repository = repository;
        }

        public Article GetArticleById(string id)
        {
            return repository.GetArticleById(id);
        }


        public ArticleSearchApiModel SearchArticle(ArticleRequestModel request)
        {
            ArticleSearchApiModel model = new ArticleSearchApiModel();
            var queryable = repository.GetArticles();
            queryable = request.IncludeParents(queryable);
            var expression = request.GetExpression();
            queryable = queryable.Where(expression);
            var count = queryable.Count();
            queryable = request.OrderByFunc()(queryable);
            queryable = request.SkipAndTake(queryable);
            var data = new ArticleSearchApiModel
            {
                Count = count,
                Articles = queryable.ToList().Select(x => new ArticleViewModel(x))
            };

            return data;
        }


    }
}




