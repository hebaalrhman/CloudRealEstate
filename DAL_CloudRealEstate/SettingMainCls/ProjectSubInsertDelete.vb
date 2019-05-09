Imports System.Runtime.Serialization

<DataContract>
Public Class ProjectSubInsertDelete
    <DataMember>
    Public Property Project_IdSub As Decimal
    <DataMember>
    Public Property Project_Id As Integer
    <DataMember>
    Public Property Company_Id As Integer
    <DataMember>
    Public Property Project_Type_OptionId As Integer
    <DataMember>
    Public Property TotalUnitUsed As Nullable(Of Integer)
    <DataMember>
    Public Property ApplyManage As Nullable(Of Boolean)
    <DataMember>
    Public Property Notes As String
    <DataMember>
    Public Property User_Id As Integer
    <DataMember>
    Public Property Entry_Date As Nullable(Of Date)
    <DataMember>
    Public Property Computer_name As String
    <DataMember>
    Public Property ProjectOption_Code As String
    <DataMember>
    Public Property ProjectOption_Name As String
    <DataMember>
    Public Property Active As Nullable(Of Boolean)
End Class