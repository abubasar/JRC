using System;
using System.Collections.Generic;
using System.Text;

namespace Arifs.JRC.DataModel
{
  public class PushSubscriptionModel
    {
        public string Id { get; set; }
        public string EndPoint { get; set; }
        public string Auth { get; set; }
        public string P256Dh { get; set; }

        
    }
}
