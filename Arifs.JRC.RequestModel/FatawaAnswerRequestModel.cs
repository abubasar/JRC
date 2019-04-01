using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using Arifs.JRC.DataModel;

namespace Arifs.JRC.RequestModel
{
    public class FatawaAnswerRequestModel : BaseRequestModel<FatawaAnswer>
    {
        public override Expression<Func<FatawaAnswer, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = x =>
                    x.Questioner.Contains(Keyword) || x.Address.Contains(Keyword) || x.Question.Contains(Keyword) ||
                    x.Answer.Contains(Keyword) || x.QuestionNo.Contains(Keyword);

            }

            return this.ExpressionObject;
        }
    }
}
