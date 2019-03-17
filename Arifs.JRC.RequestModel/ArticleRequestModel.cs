using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Arifs.JRC.RequestModel
{
    public class ArticleRequestModel : BaseRequestModel<Article>
    {
        public override Expression<Func<Article, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(this.Keyword))
            {
                this.ExpressionObject = x =>
                    x.Title.Contains(Keyword) || x.Body.Contains(Keyword) || x.PublishDate.ToString().Contains(Keyword)||x.Author.Name.Contains(Keyword)||x.HeadLine.Contains(Keyword)||x.Category.Name.Contains(Keyword)||x.Tag.Name.Contains(Keyword);
            }

            

            return this.ExpressionObject;
        }

        public override IQueryable<Article> IncludeParents(IQueryable<Article> queryable)
        {
            return queryable.Include(x=>x.Tag).Include(x=>x.Category).Include(x=>x.Author);
        }
    }
}
