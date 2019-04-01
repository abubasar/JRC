using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Arifs.JRC.RequestModel
{
    public class FatawaRequestModel : BaseRequestModel<Fatawa>
    {
        public override Expression<Func<Fatawa, bool>> GetExpression()
        {
            if (!string.IsNullOrEmpty(Keyword))
            {
                this.ExpressionObject = x => x.Name.Contains(Keyword) || x.Phone.Contains(Keyword) || x.Email.Contains(Keyword) || x.Address.Contains(Keyword) || x.Question.Contains(Keyword);

            }
            

            return this.ExpressionObject;
        }
    }
}
