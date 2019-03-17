using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.ViewModel
{
    public class AuthorViewModel : BaseViewModel<Author>
    {
        public AuthorViewModel(Author author) : base(author)
        {
            this.Name = author.Name;
        }
        public string Name { get; set; }
    }
}
