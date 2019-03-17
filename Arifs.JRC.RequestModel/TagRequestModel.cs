using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using Arifs.JRC.DataModel;

namespace Arifs.JRC.RequestModel
{
    public class TagRequestModel : BaseRequestModel<Tag>
    {
        public override Expression<Func<Tag, bool>> GetExpression()
        {

            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = x => x.Name.Contains(Keyword);
            }

            return this.ExpressionObject;
        }
    }
}
