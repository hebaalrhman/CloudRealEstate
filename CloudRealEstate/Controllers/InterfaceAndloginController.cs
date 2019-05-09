
using CloudRealEstate.Models;
using DAL_CloudRealEstate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CloudRealEstate.Controllers
{
    public class InterfaceAndloginController : Controller
    {
        //
        // GET: /InterfaceAndlogin/
        public ActionResult Index()
        {
            return View();
        }

        [ActionName("menu")]
        public JsonResult menu()
        {
            var items = new List<item>();
            var userLog = "shimaa";

            using (Cloud_RealEstateEntities db = new Cloud_RealEstateEntities())
            {

           



                var in_v = (from q in db.Online_User
                            from q2 in q.Online_Groups.Online_Menu
                            where q.userName == userLog
                            select new
                            {
                                menuid = q2.id

                            }).ToList();

                    var inq = new List<int>();

                    foreach (var item in in_v)
                    {

                        inq.Add(item.menuid);
                        //item.menuid
                    }

                    var mu_p = db.Online_Menu.Where(s => s.parent_id == null && inq.Contains(s.id)).ToList();

                    var mu_c = db.Online_Menu.Where(s => inq.Contains(s.id)).ToList();
                    foreach (var item in mu_p)
                    {

                        var rowP = new item();
                        rowP.id = item.id;
                        rowP.className = item.className;
                        rowP.text = item.text;
                        rowP.iconCls = item.iconCls;
                        rowP.parent_id = item.parent_id;
                        rowP.leaf = false;
                        var n_chd = mu_c.Where(s => inq.Contains(s.id) && s.parent_id == item.id).ToList();

                        var alR = new List<itemc>();
                        foreach (var itemcl in n_chd)
                        {
                            var rowc = new itemc();
                            // itemcl.
                            rowc.id = itemcl.id;
                            rowc.className = itemcl.className;
                            rowc.text = itemcl.text;
                            rowc.iconCls = itemcl.iconCls;
                            rowc.parent_id = item.id;

                            rowc.leaf = true;


                            alR.Add(rowc);

                            rowP.items = alR;

                        }

                        items.Add(rowP);
                    }




                }


                return Json(items, JsonRequestBehavior.AllowGet);
            }



        
    }
}