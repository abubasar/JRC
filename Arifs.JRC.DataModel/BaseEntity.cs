using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Arifs.JRC.DataModel
{
  public abstract class BaseEntity
    {
        [Key]
        public string Id { get; set; }

        public string CreatedBy { get; set; }
    }
}