using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.DataModel
{
    public class Author:BaseEntity
    {
        public string Name { get; set; }

        public virtual ICollection<Article> Articles { get; set; }
    }
}
