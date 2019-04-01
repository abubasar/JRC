using System;
using System.Collections.Generic;
using System.Security.Authentication.ExtendedProtection;
using System.Security.Principal;
using System.Text;

namespace Arifs.JRC.DataModel
{
   public class Fatawa:BaseEntity
    {
       
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Question { get; set; }
    }
}
