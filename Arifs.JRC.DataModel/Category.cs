using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.DataModel
{
   public class Category:BaseEntity
    {
        
        public string Name { get; set; }

        public virtual ICollection<Article> Articles { get; set; }
    }
}
