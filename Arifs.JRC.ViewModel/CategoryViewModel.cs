using System;
using System.Collections.Generic;
using System.Text;
using Arifs.JRC.DataModel;

namespace Arifs.JRC.ViewModel
{
    public class CategoryViewModel : BaseViewModel<Category>
    {
        public CategoryViewModel(Category category) : base(category)
        {
            Name = category.Name;
        }

        public string Name { get; set; }
    }
}
