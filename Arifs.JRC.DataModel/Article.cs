using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Arifs.JRC.DataModel
{
   public class Article:BaseEntity
    {
        public string ReferenceNo { get; set; }
        public string Title  { get; set; }
        public string HeadLine { get; set; }
        public string Body { get; set; }

        public string AuthorId { get; set; }
        [ForeignKey("AuthorId")]
        public virtual Author Author { get; set; }
        public string CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }
       
        public string TagId { get; set; }
        [ForeignKey("TagId")]
        public virtual Tag Tag  { get; set; }

       
    }
}
