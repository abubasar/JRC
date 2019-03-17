using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Arifs.JRC.RequestModel
{
    public class AuthorRequestModel : BaseRequestModel<Author>
    {
        public override Expression<Func<Author, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = x => x.Name.Contains(Keyword);

            }
            return ExpressionObject;
        }
    }
}
