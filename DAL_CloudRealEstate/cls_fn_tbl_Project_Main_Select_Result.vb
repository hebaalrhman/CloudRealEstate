Partial Public Class fn_tbl_Project_Main_Select_Result


    Public Property OpTypeLst As List(Of OpType)
End Class


Public Class OpType
    Public Property Project_Type_OptionId As Integer
End Class


Public Class GetOptTypeOfProject

    Private _comp As Integer = 0
    Private _prj_id As Integer = 0
    Sub New(prj_id As Integer, companyId As Integer)
        _comp = companyId
        _prj_id = prj_id
    End Sub

 
    Public Function loadOpt() As List(Of OpType)

        Dim lst = New List(Of OpType)

        Using db As New Cloud_RealEstateEntities

            lst = db.fn_tbl_Project_Sub_Select(_comp, _prj_id).ToList.Select(Function(xs) New OpType With {.Project_Type_OptionId = xs.Project_Type_OptionId}).ToList



            Return lst
        End Using

        Return lst

    End Function

End Class

