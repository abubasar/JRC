using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.Service
{
    public interface IArticleService
    {
        Article GetArticleById(string id);
    }
}
