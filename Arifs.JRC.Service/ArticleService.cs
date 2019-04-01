using System;
using System.Collections.Generic;
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
    }
}
