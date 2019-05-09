Imports System.Runtime.Serialization
Imports System.Web
<DataContract>
Public Class ProjectGalleryInsertDelete
    <DataMember>
    Public Property Pj_Gallery_Id As Integer
    <DataMember>
    Public Property Project_Id As Integer
    <DataMember>
    Public Property Company_Id As Integer
    <DataMember>
    Public Property Pj_img_Code As String
    <DataMember>
    Public Property Pj_img_path As String
    <DataMember>
    Public Property Relation_Id As Integer
    <DataMember>
    Public Property alt_Image As String
    <DataMember>
    Public Property Description_Image As String
    <DataMember>
    Public Property User_Id As Integer
    <DataMember>
    Public Property Entry_Date As Nullable(Of Date)
    <DataMember>
    Public Property Computer_name As String
    <DataMember>
     Public Property Active As Nullable(Of Boolean)
    <DataMember>
    Public Property picture As HttpPostedFileBase

End Class
