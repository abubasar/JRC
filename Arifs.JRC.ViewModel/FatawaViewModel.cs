using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.ViewModel
{
    public class FatawaViewModel : BaseViewModel<Fatawa>
    {
        public FatawaViewModel(Fatawa fatawa) : base(fatawa)
        {
            this.Name = fatawa.Name;
            this.Address = fatawa.Address;
            this.Phone = fatawa.Phone;
            this.Email = fatawa.Email;
            this.Question = fatawa.Question;
            this.IsAnswered = fatawa.IsAnswered;
                
        }

        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Question { get; set; }
        public bool IsAnswered { get; set; }
    }
}
