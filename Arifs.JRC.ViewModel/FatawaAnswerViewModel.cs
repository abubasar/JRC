using System;
using System.Collections.Generic;
using System.Text;
using Arifs.JRC.DataModel;

namespace Arifs.JRC.ViewModel
{
    public class FatawaAnswerViewModel : BaseViewModel<FatawaAnswer>
    {
        public FatawaAnswerViewModel(FatawaAnswer answer) : base(answer)
        {
            QuestionNo = answer.QuestionNo;
            Questioner = answer.Questioner;
            Address = answer.Address;
            Question = answer.Question;
            Answer = answer.Answer;
        }
        public string QuestionNo { get; set; }
        public string Questioner { get; set; }
        public string Address { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
    }
}
