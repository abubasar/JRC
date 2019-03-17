using Arifs.JRC.DataModel;
using Arifs.JRC.Repository;
using Arifs.JRC.RequestModel;
using Arifs.JRC.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Arifs.JRC.Service
{
    public class BaseService<T, Tr, Tv> : IBaseService<T, Tr, Tv> where T : BaseEntity where Tr : BaseRequestModel<T> where Tv : BaseViewModel<T>
    {

        private readonly IBaseRepository<T> repository;
        public BaseService(IBaseRepository<T> repository)
        {
            this.repository = repository;
        }


        public IQueryable<T> SearchQueryable(BaseRequestModel<T> request)
        {
            IQueryable<T> queryable = repository.Get();
            queryable = request.IncludeParents(queryable);
            var expression = request.GetExpression();
            queryable = queryable.Where(expression);
            queryable = request.OrderByFunc()(queryable);
            queryable = request.SkipAndTake(queryable);
            queryable = request.IncludeParents(queryable);

            return queryable;
        }



        public bool Add(T model)
        {

            return repository.Add(model);
        }

        public bool Edit(T model)
        {

            return repository.Edit(model);
        }

        public T GetById(string id)
        {

            return repository.GetDetail(id);
        }

        



        public bool Delete(string id)
        {

            return repository.Delete(id);
        }

        public Tv Detail(string id)
        {
            T x = repository.GetDetail(id);

            if (x == null)
            //id vul disos can
            {
                throw new Exception();
            }

            var vm = CreateVmInstance(x);

            return vm;
        }

        public List<Tv> Search(Tr request)
        {

            var queryable = SearchQueryable(request);

            var list = queryable.ToList().ConvertAll(CreateVmInstance);    //hit to database  and execute the query

            return list;
        }

        private static Tv CreateVmInstance(T x)
        {
            return (Tv)Activator.CreateInstance(typeof(Tv), x);
        }

        


    }
}
