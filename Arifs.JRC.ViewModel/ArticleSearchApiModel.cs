using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Arifs.JRC.ViewModel
{
  public  class ArticleSearchApiModel
    {
      
        public IEnumerable<ArticleViewModel> Articles { get; set; }
        public int Count { get; set; }
    }
}
