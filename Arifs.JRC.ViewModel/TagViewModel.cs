using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.ViewModel
{
    public class TagViewModel : BaseViewModel<Tag>
    {
        public TagViewModel(Tag tag) : base(tag)
        {
            Name = tag.Name;
        }

        public string Name { get; set; }
    }
}
