using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.DataModel
{
  public class FatawaAnswer:BaseEntity
    {
        public string QuestionNo { get; set; }
        public string Questioner { get; set; }
        public string Address { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
}
