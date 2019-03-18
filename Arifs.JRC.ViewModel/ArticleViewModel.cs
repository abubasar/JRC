using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.ViewModel
{
    public class ArticleViewModel : BaseViewModel<Article>
    {
        public ArticleViewModel(Article article) : base(article)
        {
            ReferenceNo = article.ReferenceNo;
            Title = article.Title;
            HeadLine = article.HeadLine;
            Body = article.Body;
            if (article.Author != null)
            {
                this.Author = new AuthorViewModel(article.Author);
            }
           
           

            if (article.Tag != null)
            {
                this.Tag=new TagViewModel(article.Tag);
            }

            if (article.Category!= null)
            {
                this.Category=new CategoryViewModel(article.Category);
            }

        }

        public string ReferenceNo { get; set; }
        public string Title { get; set; }
        public string HeadLine { get; set; }
        public string Body { get; set; }
        public AuthorViewModel Author { get; set; }
        public CategoryViewModel Category { get; set; }

        public TagViewModel Tag { get; set; }
       

    }
}
