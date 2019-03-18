using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Security.Principal;
using System.Text;

namespace Arifs.JRC.ViewModel
{
   public class BaseViewModel<T> where T:BaseEntity
    {
        public BaseViewModel(BaseEntity entity)
        {
            Id = entity.Id;
            CreatedBy = entity.CreatedBy;
            Created = entity.Created;
        }

        public string Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTime Created { get; set; }
    }
}
