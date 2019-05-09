using DAL_CloudRealEstate;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CloudRealEstate.Controllers
{
    public class SettingMainController : Controller
    {
        //
        // GET: /SettingMain/
        public ActionResult Index()
        {
            return View();
        }

       
        [ActionName("get_Owner_CompanyProject")]
        public JsonResult get_Owner_CompanyProject()
        {
            int Company_Id = 1;
           int Active = -1;
            var OwnerCompanyList = new List<fn_tbl_Owner_CompanyProject_Select_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                OwnerCompanyList = db.get_Owner_CompanyProject_Select(Company_Id, Active);

            }

            return Json(OwnerCompanyList, JsonRequestBehavior.AllowGet);
        }
       
        [ActionName("OwnerCompanyProjectInsert")]
        public JsonResult Owner_CompanyProject_InsertUpdateDelete(fn_tbl_Owner_CompanyProject_Select_Result RowInsert)
        {
            RowInsert.Company_Id = 1;
            RowInsert.User_Id = 1;
            var ResultInsert = new OwnerCompanyProjectInsert();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ResultInsert = db.Owner_CompanyProject_InsertUpdateDelete(RowInsert);

            }

            return Json(ResultInsert, JsonRequestBehavior.AllowGet);
        }
       

        [ActionName("get_Project_Type")]
        public JsonResult get_Project_Type()
        {
            var ProjectTypeList = new List<fn_tbl_Project_Type_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ProjectTypeList = db.get_Project_Type();

            }

            return Json(ProjectTypeList, JsonRequestBehavior.AllowGet);
        }


        [ActionName("get_ProjectMain")]
        public JsonResult get_Project_Main_Select()
        {
            int Company_Id = 1;
            var ProjectMainList = new List<fn_tbl_Project_Main_Select_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ProjectMainList = db.get_Project_Main_Select(Company_Id);

            }

            return Json(ProjectMainList, JsonRequestBehavior.AllowGet);
        }

        [ActionName("Project_Main_Insert")]
        public JsonResult Project_Main_InsertUpdateDelete(fn_tbl_Project_Main_Select_Result RowInsert)
        {
            RowInsert.Company_Id = 1;
            RowInsert.User_Id = 1;
            var ResultInsert = new ProjectMainInsert();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ResultInsert = db.Project_Main_InsertUpdateDelete(RowInsert);

            }

            return Json(ResultInsert, JsonRequestBehavior.AllowGet);
        }
       


        
        [ActionName("get_Project_Type_Option")]
        public JsonResult get_Project_Type_Option_Select(int Project_TypeId)
        {
            int Company_Id = 1;
            var ProjectTypeOptionList = new List<fn_tbl_Project_Type_Option_Select_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ProjectTypeOptionList = db.get_Project_Type_Option_Select(Company_Id, Project_TypeId);

            }

            return Json(ProjectTypeOptionList, JsonRequestBehavior.AllowGet);
        }

        [ActionName("ProjectTypeOptionInsert")]
        public JsonResult Project_Type_Option_InsertUpdateDelete(fn_tbl_Project_Type_Option_Select_Result RowInsert)
        {
            RowInsert.Company_Id = 1;
            RowInsert.User_Id = 1;
            var ResultInsert = new ProjectTypeOptionInsert();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ResultInsert = db.Project_Type_Option_InsertUpdateDelete(RowInsert);

            }

            return Json(ResultInsert, JsonRequestBehavior.AllowGet);
        }





        [ActionName("get_Project_Gallery")]
        public JsonResult get_Project_Gallery_Select(int Project_Id, int Relation_Id)
        {
            int Company_Id = 1;
            var ProjectGalleryList = new List<fn_tbl_Project_Gallery_Select_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ProjectGalleryList = db.get_Project_Gallery_Select(Company_Id, Project_Id, Relation_Id);

            }

            return Json(ProjectGalleryList, JsonRequestBehavior.AllowGet);
        }

        [ActionName("ProjectGallery_Insert")]
        public JsonResult Project_Gallery_InsertUpdate(ProjectGalleryInsertDelete RowInsert)
        {
            RowInsert.Company_Id = 1;
            RowInsert.User_Id = 1;
            var ResultInsert = new ProjectGalleryInsert();

            string path = "";
            string filename = null;
            if (RowInsert.picture != null)
            {
                path = Path.Combine(Server.MapPath("~/resources/profileImages"),
                                            Path.GetFileName(RowInsert.picture.FileName));
                RowInsert.picture.SaveAs(path);

                filename = RowInsert.picture.FileName;
            }
            RowInsert.Pj_img_path = path;
            RowInsert.Pj_img_Code = filename;
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ResultInsert = db.Project_Gallery_InsertUpdate(RowInsert);

            }

            return Json(ResultInsert, JsonRequestBehavior.AllowGet);
        }

        [ActionName("ProjectOptions_Insert")]
        public JsonResult Project_Options_InsertUpdate(ProjectOptionsInsertDelete RowInsert)
        {
            RowInsert.Company_Id = 1;
            RowInsert.User_Id = 1;
            var ResultInsert = new ProjectOptionsInsert();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ResultInsert = db.Project_Options_InsertUpdate(RowInsert);

            }

            return Json(ResultInsert, JsonRequestBehavior.AllowGet);

        }


        [ActionName("Project_Sub_Insert")]
        public JsonResult Project_Sub_InsertUpdateDelete(ProjectSubInsertDelete RowInsert)
        {
            RowInsert.Company_Id = 1;
            RowInsert.User_Id = 1;
            var ResultInsert = new Project_SubInsert();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ResultInsert = db.Project_Sub_InsertUpdateDelete(RowInsert);

            }

            return Json(ResultInsert, JsonRequestBehavior.AllowGet);

        }


        [ActionName("get_Project_Sub")]
        public JsonResult get_Project_Sub_Select(int Project_Id)
        {
            int Company_Id = 1;
            var ProjectSubList = new List<fn_tbl_Project_Sub_Select_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                ProjectSubList = db.get_Project_Sub_Select(Company_Id, Project_Id);

            }

            return Json(ProjectSubList, JsonRequestBehavior.AllowGet);
        }


        [ActionName("get_CountryMain")]
        public JsonResult get_CountryMain_Select()
        {
            var CountryMainList = new List<fn_CountryMain_Select_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                CountryMainList = db.get_CountryMain_Select();

            }

            return Json(CountryMainList, JsonRequestBehavior.AllowGet);
        }
        [ActionName("get_Region")]
        public JsonResult get_Region_select(String Country_Code)
       {
            int Company_Id = 1;
            var RegionList = new List<fn_Region_select_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                RegionList = db.get_Region_select(Country_Code, Company_Id);

            }

            return Json(RegionList, JsonRequestBehavior.AllowGet);
        }
        [ActionName("get_CityMain")]
        public JsonResult get_CityMain_select(int Region_Id)
        {
            int Company_Id = 1;
            var CityMainList = new List<fn_CityMain_select_Result>();
            using (DAL_CloudRealEstate.SettingMain db = new DAL_CloudRealEstate.SettingMain())
            {
                CityMainList = db.get_CityMain_select(Region_Id, Company_Id);

            }

            return Json(CityMainList, JsonRequestBehavior.AllowGet);
        }



	}
}