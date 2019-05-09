using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CloudRealEstate.Models
{
    public class item
    {
        public int id { get; set; }
        public string text { get; set; }
        public string iconCls { get; set; }
        public int? parent_id { get; set; }
        public string className { get; set; }
        public bool leaf { get; set; }
        public List<itemc> items { get; set; }
    }
    public class itemc
    {
        public int id { get; set; }
        public string text { get; set; }
        public string iconCls { get; set; }
        public int? parent_id { get; set; }
        public string className { get; set; }
        public bool leaf { get; set; }
    }
}