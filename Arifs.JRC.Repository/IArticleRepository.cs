using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.Repository
{
   public interface IArticleRepository
   {
       Article GetArticleById(string id);
   }
}
