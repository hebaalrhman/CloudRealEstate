Imports System.Data.Entity.Core.Objects

Public Class SettingMain
    Implements IDisposable

    Public Function get_Owner_CompanyProject_Select(Company_Id As Integer, Active As Integer) As List(Of fn_tbl_Owner_CompanyProject_Select_Result)
        Try
            Using db As New Cloud_RealEstateEntities
                Return db.fn_tbl_Owner_CompanyProject_Select(Company_Id, Active).ToList()


            End Using


        Catch ex As Exception
            Return New List(Of fn_tbl_Owner_CompanyProject_Select_Result)
        End Try
    End Function

    Public Function Owner_CompanyProject_InsertUpdateDelete(RowInsert As fn_tbl_Owner_CompanyProject_Select_Result) As OwnerCompanyProjectInsert

        Dim OCompany_IdPj_out = New ObjectParameter("OCompany_IdPj_out", GetType(Decimal))
        Dim vald = New ObjectParameter("Vald", GetType(Integer))
        Dim Errors = New ObjectParameter("Error", GetType(String))
        Try
            Using db As New Cloud_RealEstateEntities
                db.sp_tbl_Owner_CompanyProject_InsertUpdateDelete(RowInsert.OCompany_IdPj, RowInsert.Company_Id, RowInsert.OCompanyCode, RowInsert.OCompanyName,
                                                                  RowInsert.OCompanyWeb, RowInsert.OCompanyEmail, RowInsert.OCompanyTel, RowInsert.OCompanyMobile,
                                                                  RowInsert.OCompanyAddress, RowInsert.GLAccountNo, RowInsert.Active, RowInsert.User_Id, RowInsert.Computer_name,
                                                                  OCompany_IdPj_out, vald, Errors)
                If IsNumeric(vald.Value) Then
                    If vald.Value = 0 Then

                        If OCompany_IdPj_out.Value > 0 Then
                            Return New OwnerCompanyProjectInsert With {.success = True, .msg = "successed", .OCompany_IdPj = OCompany_IdPj_out.Value}
                        End If

                    Else
                        Return New OwnerCompanyProjectInsert With {.success = False, .msg = Errors.Value}
                    End If

                Else

                    Return New OwnerCompanyProjectInsert With {.success = False, .msg = "failure"}
            
                End If
                



            End Using

        Catch ex As Exception
            Return New OwnerCompanyProjectInsert With {.msg = "Please contact to system administrator", .success = False}
        End Try
    End Function



    Public Function get_Project_Type() As List(Of fn_tbl_Project_Type_Result)
        Try
            Using db As New Cloud_RealEstateEntities
                Return db.fn_tbl_Project_Type().ToList()
            End Using
        Catch ex As Exception
            Return New List(Of fn_tbl_Project_Type_Result)
        End Try
    End Function



    Public Function get_Project_Type_Option_Select(Company_Id As Integer, Project_TypeId As Integer) As List(Of fn_tbl_Project_Type_Option_Select_Result)
        Try
            Using db As New Cloud_RealEstateEntities
                Return db.fn_tbl_Project_Type_Option_Select(Company_Id, Project_TypeId).ToList()
            End Using

        Catch ex As Exception
            Return New List(Of fn_tbl_Project_Type_Option_Select_Result)
        End Try
    End Function

    Public Function Project_Type_Option_InsertUpdateDelete(RowInsert As fn_tbl_Project_Type_Option_Select_Result) As ProjectTypeOptionInsert
        Dim Project_Type_OptionId_out = New ObjectParameter("Project_Type_OptionId_out", GetType(Decimal))
        Dim vald = New ObjectParameter("Vald", GetType(Integer))
        Dim Errors = New ObjectParameter("Error", GetType(String))
        Try
            Using db As New Cloud_RealEstateEntities
                db.spo_tbl_Project_Type_Option_InsertUpdateDelete(RowInsert.Project_Type_OptionId, RowInsert.Project_TypeId, RowInsert.Company_Id,
                                                                  RowInsert.ProjectOption_Code, RowInsert.ProjectOption_Name, RowInsert.ProjectOption_Description,
                                                                  RowInsert.Active, RowInsert.User_Id, RowInsert.Computer_name, Project_Type_OptionId_out, vald, Errors)
                If IsNumeric(vald.Value) Then
                    If vald.Value = 0 Then

                        If Project_Type_OptionId_out.Value > 0 Then
                            Return New ProjectTypeOptionInsert With {.success = True, .msg = "successed", .Project_Type_OptionId = Project_Type_OptionId_out.Value}
                        End If

                    Else
                        Return New ProjectTypeOptionInsert With {.success = False, .msg = Errors.Value}
                    End If

                Else

                    Return New ProjectTypeOptionInsert With {.success = False, .msg = "failure"}

                End If




            End Using

        Catch ex As Exception
            Return New ProjectTypeOptionInsert With {.msg = "Please contact to system administrator", .success = False}
        End Try
    End Function


    Public Function get_Project_Main_Select(Company_Id As Integer) As List(Of fn_tbl_Project_Main_Select_Result)
        Try


            Using db As New Cloud_RealEstateEntities

                Return db.fn_tbl_Project_Main_Select(Company_Id).ToList().Select(Function(ss) New fn_tbl_Project_Main_Select_Result With {
                                                                                     .OpTypeLst = db.fn_tbl_Project_Sub_Select(Company_Id, ss.Project_Id).ToList.Select(Function(xs) New OpType With {.Project_Type_OptionId = xs.Project_Type_OptionId}).ToList, .Project_Id = ss.Project_Id,
                                                                                     .Company_Id = ss.Company_Id, .Project_Code = ss.Project_Code, .Project_Name = ss.Project_Name, .Address = ss.Address, .CountryCode = ss.CountryCode,
                                                                                     .City_id = ss.City_id, .Region_Id = ss.Region_Id, .Zone_Id = ss.Zone_Id, .OCompany_IdPj = ss.OCompany_IdPj, .Project_TypeId = ss.Project_TypeId, .Description = ss.Description,
                                                                                     .location_lat_long = ss.location_lat_long, .lat = ss.lat, .long = ss.long, .Active = ss.Active, .User_Id = ss.User_Id, .Entry_Date = ss.Entry_Date, .Computer_name = ss.Computer_name,
                                                                                     .CityCode = ss.CityCode, .CityName = ss.CityName, .Region_Code = ss.Region_Code, .Region_Name = ss.Region_Name, .Zone_Code = ss.Zone_Code, .Zone_Name = ss.Zone_Name, .OCompanyCode = ss.OCompanyCode,
                                                                                     .OCompanyName = ss.OCompanyName, .Project_TypeCode = ss.Project_TypeCode, .Project_TypeName = ss.Project_TypeName}).ToList
            End Using


        Catch ex As Exception
            Return New List(Of fn_tbl_Project_Main_Select_Result)
        End Try
    End Function




    Public Function Project_Main_InsertUpdateDelete(RowInsert As fn_tbl_Project_Main_Select_Result) As ProjectMainInsert
        Dim Project_IdOut = New ObjectParameter("Project_IdOut", GetType(Decimal))
        Dim vald = New ObjectParameter("Vald", GetType(Integer))
        Dim Errors = New ObjectParameter("Error", GetType(String))
        Try
            Using db As New Cloud_RealEstateEntities
                db.sp_tbl_Project_Main_InsertUpdateDelete(RowInsert.Project_Id, RowInsert.Company_Id, RowInsert.Project_Code, RowInsert.Project_Name,
                                                          RowInsert.Address, RowInsert.CountryCode, RowInsert.City_id, RowInsert.Region_Id, RowInsert.Zone_Id,
                                                          RowInsert.OCompany_IdPj, RowInsert.Project_TypeId, RowInsert.Description, RowInsert.location_lat_long, RowInsert.lat,
                                                          RowInsert.long, RowInsert.Active, RowInsert.User_Id, RowInsert.Computer_name, Project_IdOut, vald, Errors)
                If IsNumeric(vald.Value) Then
                    If vald.Value = 0 Then

                        If Project_IdOut.Value > 0 Then
                            Return New ProjectMainInsert With {.success = True, .msg = "successed", .Project_Id = Project_IdOut.Value}
                        End If

                    Else
                        Return New ProjectMainInsert With {.success = False, .msg = Errors.Value}
                    End If

                Else

                    Return New ProjectMainInsert With {.success = False, .msg = "failure"}

                End If




            End Using

        Catch ex As Exception
            Return New ProjectMainInsert With {.msg = "Please contact to system administrator", .success = False}
        End Try
    End Function


    Public Function get_Project_Gallery_Select(Company_Id As Integer, Project_Id As Integer, Relation_Id As Integer) As List(Of fn_tbl_Project_Gallery_Select_Result)
        Try
            Using db As New Cloud_RealEstateEntities
                Return db.fn_tbl_Project_Gallery_Select(Project_Id, Company_Id, Relation_Id).ToList()
            End Using


        Catch ex As Exception
            Return New List(Of fn_tbl_Project_Gallery_Select_Result)
        End Try
    End Function

    Public Function Project_Gallery_InsertUpdate(RowInsert As ProjectGalleryInsertDelete) As ProjectGalleryInsert
        Dim Pj_Gallery_Id_out = New ObjectParameter("Pj_Gallery_Id_out", GetType(Decimal))
        Dim vald = New ObjectParameter("Vald", GetType(Integer))
        Dim Errors = New ObjectParameter("Error", GetType(String))
        Try
            Using db As New Cloud_RealEstateEntities
                db.sp_tbl_Project_Gallery_InsertUpdate(RowInsert.Pj_Gallery_Id, RowInsert.Project_Id, RowInsert.Company_Id,
                                                       RowInsert.Pj_img_Code, RowInsert.Pj_img_path, RowInsert.Relation_Id,
                                                       RowInsert.alt_Image, RowInsert.Description_Image, RowInsert.User_Id,
                                                       RowInsert.Computer_name, Pj_Gallery_Id_out, RowInsert.Active, vald, Errors)
                If IsNumeric(vald.Value) Then
                    If vald.Value = 0 Then

                        If Pj_Gallery_Id_out.Value > 0 Then
                            Return New ProjectGalleryInsert With {.success = True, .msg = "successed", .Pj_Gallery_Id = Pj_Gallery_Id_out.Value}
                        End If

                    Else
                        Return New ProjectGalleryInsert With {.success = False, .msg = Errors.Value}
                    End If

                Else

                    Return New ProjectGalleryInsert With {.success = False, .msg = "failure"}

                End If




            End Using

        Catch ex As Exception
            Return New ProjectGalleryInsert With {.msg = "Please contact to system administrator", .success = False}
        End Try
    End Function


    Public Function Project_Options_InsertUpdate(RowInsert As ProjectOptionsInsertDelete) As ProjectOptionsInsert
        Dim LstErroe As New ProjectOptionsInsert
        Try
            Using db As New Cloud_RealEstateEntities
                For Each itm In RowInsert.vic
                    Dim Project_IdSub_Out = New ObjectParameter("Project_IdSub_Out", GetType(Decimal))
                    Dim vald = New ObjectParameter("Vald", GetType(Integer))
                    Dim Errors = New ObjectParameter("Error", GetType(String))
                    db.sp_tbl_Project_Sub_InsertUpdateDelete(RowInsert.Project_IdSub, RowInsert.Project_Id, RowInsert.Company_Id, itm, RowInsert.TotalUnitUsed, RowInsert.ApplyManage,
                                                             RowInsert.Computer_name, RowInsert.Notes, RowInsert.User_Id, False, Project_IdSub_Out, vald, Errors)

                    If IsNumeric(vald.Value) Then

                        If vald.Value > 0 Then
                            LstErroe.ErrorList.Add(New ErrorList With {.ErrorDescription = Errors.Value})
                        End If


                    End If
                Next
            End Using
            If LstErroe.ErrorList.Count = 0 Then
                LstErroe.msg = "successed"
                LstErroe.success = True
            Else
                LstErroe.msg = "failure"
                LstErroe.success = False
            End If

        Catch ex As Exception
            LstErroe.msg = "failure"
            LstErroe.success = False
        End Try
        Return LstErroe
    End Function


    Public Function Project_Sub_InsertUpdateDelete(RowInsert As ProjectSubInsertDelete) As Project_SubInsert
        Dim Project_IdSub_Out = New ObjectParameter("Project_IdSub_Out", GetType(Decimal))
        Dim vald = New ObjectParameter("Vald", GetType(Integer))
        Dim Errors = New ObjectParameter("Error", GetType(String))
        Try
            Using db As New Cloud_RealEstateEntities
                db.sp_tbl_Project_Sub_InsertUpdateDelete(RowInsert.Project_IdSub, RowInsert.Project_Id, RowInsert.Company_Id, RowInsert.Project_Type_OptionId,
                                                         RowInsert.TotalUnitUsed, RowInsert.ApplyManage, RowInsert.Computer_name, RowInsert.Notes, RowInsert.User_Id, RowInsert.Active,
                                                         Project_IdSub_Out, vald, Errors)
                If IsNumeric(vald.Value) Then
                    If vald.Value = 0 Then

                        If Project_IdSub_Out.Value > 0 Then
                            Return New Project_SubInsert With {.success = True, .msg = "successed", .Project_IdSub = Project_IdSub_Out.Value}
                        End If

                    Else
                        Return New Project_SubInsert With {.success = False, .msg = Errors.Value}
                    End If

                Else

                    Return New Project_SubInsert With {.success = False, .msg = "failure"}

                End If




            End Using

        Catch ex As Exception
            Return New Project_SubInsert With {.msg = "Please contact to system administrator", .success = False}
        End Try
    End Function


    Public Function get_Project_Sub_Select(Company_Id As Integer, Project_Id As Integer) As List(Of fn_tbl_Project_Sub_Select_Result)
        Try
            Using db As New Cloud_RealEstateEntities
                Return db.fn_tbl_Project_Sub_Select(Company_Id, Project_Id).ToList()
            End Using

        Catch ex As Exception
            Return New List(Of fn_tbl_Project_Sub_Select_Result)
        End Try
    End Function



    Public Function get_CountryMain_Select() As List(Of fn_CountryMain_Select_Result)
        Try
            Using db As New Cloud_RealEstateEntities
                Return db.fn_CountryMain_Select().ToList()
            End Using
        Catch ex As Exception
            Return New List(Of fn_CountryMain_Select_Result)
        End Try

    End Function

    Public Function get_Region_select(Country_Code As String, Company_Id As Integer) As List(Of fn_Region_select_Result)
        Try
            Using db As New Cloud_RealEstateEntities
                Return db.fn_Region_select(Country_Code, Company_Id).ToList()

            End Using

        Catch ex As Exception
            Return New List(Of fn_Region_select_Result)
        End Try
    End Function

    Public Function get_CityMain_select(Region_Id As Integer, Company_Id As Integer) As List(Of fn_CityMain_select_Result)
        Try
            Using db As New Cloud_RealEstateEntities
                Return db.fn_CityMain_select(Region_Id, Company_Id).ToList()
            End Using
        Catch ex As Exception
            Return New List(Of fn_CityMain_select_Result)
        End Try
    End Function



    Public Function get_typeBuildingCatego() As List(Of fn_tbl_TypeBuildingCategorySelect_Result)
        Try
            Using db As New Cloud_RealEstateEntities

                Return db.fn_tbl_TypeBuildingCategorySelect.ToList()
            End Using
        Catch ex As Exception
            Return New List(Of fn_tbl_TypeBuildingCategorySelect_Result)
        End Try
    End Function
#Region "IDisposable Support"
    Private disposedValue As Boolean ' To detect redundant calls

    ' IDisposable
    Protected Overridable Sub Dispose(disposing As Boolean)
        If Not Me.disposedValue Then
            If disposing Then
                ' TODO: dispose managed state (managed objects).
            End If

            ' TODO: free unmanaged resources (unmanaged objects) and override Finalize() below.
            ' TODO: set large fields to null.
        End If
        Me.disposedValue = True
    End Sub

    ' TODO: override Finalize() only if Dispose(ByVal disposing As Boolean) above has code to free unmanaged resources.
    'Protected Overrides Sub Finalize()
    '    ' Do not change this code.  Put cleanup code in Dispose(ByVal disposing As Boolean) above.
    '    Dispose(False)
    '    MyBase.Finalize()
    'End Sub

    ' This code added by Visual Basic to correctly implement the disposable pattern.
    Public Sub Dispose() Implements IDisposable.Dispose
        ' Do not change this code.  Put cleanup code in Dispose(disposing As Boolean) above.
        Dispose(True)
        GC.SuppressFinalize(Me)
    End Sub
#End Region

End Class
