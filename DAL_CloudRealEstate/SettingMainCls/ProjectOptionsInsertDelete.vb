Imports System.Runtime.Serialization

<DataContract>
Public Class ProjectOptionsInsertDelete
    <DataMember>
    Public Property Project_IdSub As Integer
    <DataMember>
    Public Property Project_Id As Integer
    <DataMember>
    Public Property Company_Id As Integer
    <DataMember>
    Public Property TotalUnitUsed As Integer
    <DataMember>
    Public Property ApplyManage As Boolean
    <DataMember>
    Public Property Notes As String
    <DataMember>
    Public Property User_Id As Integer
    <DataMember>
    Public Property Entry_Date As Nullable(Of Date)
    <DataMember>
    Public Property Computer_name As String
    <DataMember>
    Public Property vic As New List(Of Integer)

End Class
