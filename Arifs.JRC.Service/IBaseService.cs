using Arifs.JRC.DataModel;
using Arifs.JRC.RequestModel;
using Arifs.JRC.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Arifs.JRC.Service
{
    public interface IBaseService<T, Tr, Tv> where T:BaseEntity where Tr:BaseRequestModel<T> where Tv:BaseViewModel<T>

    {
        IQueryable<T> SearchQueryable(BaseRequestModel<T> request);
        bool Add(T model);
        bool Edit(T model);
        Tv Detail(string id);
        T GetById(string id);
        List<Tv> Search(Tr request);
       
        bool Delete(string id);
       

    }
}
