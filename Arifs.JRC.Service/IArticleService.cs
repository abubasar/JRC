using Arifs.JRC.DataModel;
using Arifs.JRC.RequestModel;
using Arifs.JRC.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.Service
{
    public interface IArticleService
    {
        Article GetArticleById(string id);
        ArticleSearchApiModel SearchArticle(ArticleRequestModel request);
    }
}
