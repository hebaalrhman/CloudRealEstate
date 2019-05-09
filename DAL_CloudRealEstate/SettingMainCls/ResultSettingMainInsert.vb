Public Class ResultSettingMainInsert

End Class


Public Class OwnerCompanyProjectInsert

    Public Property success As Boolean

    Public Property msg As String

    Public Property OCompany_IdPj As Integer

End Class

Public Class ProjectTypeOptionInsert

    Public Property success As Boolean

    Public Property msg As String

    Public Property Project_Type_OptionId As Integer

End Class
Public Class ProjectMainInsert

    Public Property success As Boolean

    Public Property msg As String

    Public Property Project_Id As Integer

End Class
Public Class ProjectGalleryInsert

    Public Property success As Boolean

    Public Property msg As String

    Public Property Pj_Gallery_Id As Integer

End Class


Public Class ProjectOptionsInsert
    Public Property success As Boolean
    Public Property msg As String
    Public Property ErrorList As New List(Of ErrorList)
End Class

Public Class ErrorList
    Public Property ErrorDescription As String

End Class

Public Class Project_SubInsert
    Public Property success As Boolean
    Public Property msg As String
    Public Property Project_IdSub As Integer
End Class
