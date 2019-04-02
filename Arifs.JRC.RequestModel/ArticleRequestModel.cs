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
      
        public string Category { get; set; }
        public string Author { get; set; }
        public string Tag { get; set; }

        public override Expression<Func<Article, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(this.Keyword))
            {
                this.ExpressionObject = x =>
                    x.Title.Contains(Keyword) || x.Body.Contains(Keyword) ||x.Author.Name.Contains(Keyword)||x.HeadLine.Contains(Keyword)||x.Category.Name.Contains(Keyword)||x.Tag.Name.Contains(Keyword);
            }

            if (!string.IsNullOrWhiteSpace(Category))
            {
                this.ExpressionObject = x => x.Category.Name.Contains(Category);
            }
            if (!string.IsNullOrWhiteSpace(Author))
            {
                this.ExpressionObject = x => x.Author.Name.Contains(Author);
            }

            if (!string.IsNullOrWhiteSpace(Tag))
            {
                this.ExpressionObject = x => x.Tag.Name.Contains(Tag);
            }

            this.ExpressionObject = x => (x.Tag.Name.Contains(Tag) || String.IsNullOrEmpty(Tag))
                                         && (x.Author.Name.Contains(Author) || String.IsNullOrEmpty(Author))
                                         && (x.Category.Name.Contains(Category) || String.IsNullOrEmpty(Category));

            return this.ExpressionObject;
        }

        public override IQueryable<Article> IncludeParents(IQueryable<Article> queryable)
        {
            return queryable.Include(x=>x.Tag).Include(x=>x.Category).Include(x=>x.Author);
        }
    }
}
