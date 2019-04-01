using System;
using System.Collections.Generic;
using System.Text;
using Arifs.JRC.DataModel;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Arifs.JRC.Repository
{
    public class ArticleRepository :IArticleRepository
    {
        private readonly DataContext context;

        public ArticleRepository(DataContext context)
        {
            this.context = context;
        }

        public Article GetArticleById(string id)
        {
            Article article = context.Articles.Include(x => x.Author).Include(x => x.Category).Include(x => x.Tag).SingleOrDefault(x=>x.Id==id);
            Article model = new Article()
            {
                Title = article.Title,
                Body = article.Body,
                Author = new Author()
                {

                    Name = article.Author.Name
                },
                AuthorId = article.AuthorId,
                Category = new Category()
                {

                    Name = article.Category.Name
                },
                CategoryId = article.CategoryId,
                Tag = new Tag()
                {

                    Name = article.Tag.Name
                },
                TagId = article.TagId,
            };

            return model;
        }
    }
}
