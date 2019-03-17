using Arifs.JRC.DataModel;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Arifs.JRC.RequestModel
{
    public class CategoryRequestmodel : BaseRequestModel<Category>
    {
        public override Expression<Func<Category, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                this.ExpressionObject = x => x.Name.Contains(Keyword);
            }

            return this.ExpressionObject;

        }
    }
}
