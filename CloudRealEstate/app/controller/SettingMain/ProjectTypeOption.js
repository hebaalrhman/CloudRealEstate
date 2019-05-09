/*
 * File: app/controller/SettingMain/ProjectTypeOption.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CloudRealEstate.controller.SettingMain.ProjectTypeOption', {
    extend: 'Ext.app.Controller',

    stores: [
        'SettingMain.ProjectTypeOption'
    ],
    views: [
        'SettingMain.ProjectTypeOption'
    ],

    refs: [
        {
            ref: 'projectTypeOptionsGrd',
            selector: 'projecttypeoption projecttypeoptionsGrd gridpanel'
        }
    ],

    init: function(application) {
        this.control({
            "projecttypeoption projecttypeoptionsGrd gridpanel":{
                render:this.onRenderProjectTypeOptionsGrd
            },
            "projecttypeoption projecttypeoptionsHdr cmbprojecttype_btn":{
                change:this.onChangeProjectType
            },
            "projecttypeoption projecttypeoptionsHdr button#bt_save":{
                click:this.onSaveProjectTypeOptions
            },
            "projecttypeoption projecttypeoptionsHdr button#bt_cancel":{
                click:this.onCancelProjectTypeOptions
            },
            "projecttypeoption projecttypeoptionsGrd gridpanel [itemId=bt_up]":{
                click:this.onUpRecord
            },
             "projecttypeoption projecttypeoptionsGrd gridpanel [itemId=bt_Del]":{
                 click:this.onDeleteRecord
            }
        });
    },

    onRenderProjectTypeOptionsGrd: function(component, options) {
        component.getStore().load({
            params:{
                Project_TypeId:1
            }
        });
    },
    onChangeProjectType:function (component,newValue,oldValue) {
        console.log(component);

        var grid=this.getProjectTypeOptionsGrd();
        if(newValue>0){
            grid.getStore().load({
                params:{
                    Project_TypeId:newValue
                }
            });
        }else {
            grid.getStore().load({
                params:{
                    Project_TypeId:0
                }
            });
        }
    },
    onSaveProjectTypeOptions: function(button) {
        var grid=this.getProjectTypeOptionsGrd();
        var pan=button.up('projecttypeoption');
        var frm=pan.down('projecttypeoptionsHdr');
        var cmbprojecttype_btn=frm.down('cmbprojecttype_btn');
        var Project_TypeId=cmbprojecttype_btn.getValue();
          Ext.Msg.wait('loading');
        if(frm.down('hiddenfield[itemId=Project_Type_OptionId]').getValue()>0){

        }else{
            frm.down('hiddenfield[itemId=Project_Type_OptionId]').setValue(0);
            frm.down('hiddenfield[itemId=Active]').setValue(false);
        }

        if(frm.getForm().isValid()){
            frm.getForm().submit({
                 clientValidation: true,
                        url: 'SettingMain/ProjectTypeOptionInsert',
                        success: function(form, action) {

                            var result = action.result;
                            if (result.success) {
                                Ext.Msg.hide();
                                button.setText('save');
                                frm.getForm().reset();
                                cmbprojecttype_btn.setValue(Project_TypeId);
                                grid.getStore().load({
                                    params:{
                                        Project_TypeId:Project_TypeId
                                    }
                                });

                            }

                        },failure: function(form, action) {

                            Ext.Msg.hide();

                            switch (action.failureType) {
                                case Ext.form.action.Action.CLIENT_INVALID:
                                    Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                                    break;
                                case Ext.form.action.Action.CONNECT_FAILURE:
                                    Ext.Msg.alert('Failure', 'Communication failed');
                                    break;
                                case Ext.form.action.Action.SERVER_INVALID:
                                    Ext.Msg.alert('Failure', action.result.msg);
                            }

                        }
            });
        }
    },

    onCancelProjectTypeOptions: function(button) {
        var pan=button.up('projecttypeoption');
        var form=pan.down('projecttypeoptionsHdr');
        var btn=form.down('button#bt_save');
        form.getForm().reset();
        btn.setText('Save');
    },

    onUpRecord: function(view, rowIndex, colIndex, item, e, record) {
        var grd= this.getProjectTypeOptionsGrd();
        var main=view.up('projecttypeoption');
        var frm=main.down('projecttypeoptionsHdr');
        var btn=frm.down('button#bt_save');
        frm.loadRecord(record);
        btn.setText('Edit');
    },

    onDeleteRecord: function() {
            var grid = this.getProjectTypeOptionsGrd();
                Ext.Msg.show({
                    title: 'Save',
                    msg: 'Do you want to Save the changes?',
                    width: 300,
                    closable: false,
                    buttons: Ext.Msg.YESNOCANCEL,
                    buttonText: {
                        yes: 'Yes & Continue',
                        no: 'No & Continue',
                        cancel:'Discard'
                    },
                    multiline: false,
                    fn: function(buttonValue, inputText, showConfig) {
                        //  Ext.Msg.alert('Status', buttonValue);
                        if(buttonValue=="yes"){
                            Ext.Msg.wait('executing..');
                            if (record.data.Active)
                            {
                                record.set("Active",false);
                            }else
                            {
                                record.set("Active",true);
                            }

                            grid.getStore().sync({
                                success:function(batch){
                                    Ext.Msg.hide();
                                    grid.getStore().load();
                                },
                                failure:function(batch){
                                    Ext.Msg.alert("Failed", batch.operations[0]);
                                    Ext.Msg.hide();
                                }
                            });

                        }

                    },
                    icon: Ext.Msg.QUESTION
                });
    }

});
