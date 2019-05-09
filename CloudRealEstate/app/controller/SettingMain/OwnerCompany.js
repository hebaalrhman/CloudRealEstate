Ext.define('CloudRealEstate.controller.SettingMain.OwnerCompany', {
    extend: 'Ext.app.Controller',

    stores: [
        'SettingMain.OwnerCompany'
    ],
    views: [
        'SettingMain.OwnerCompany'
    ],

    refs: [
        {
            ref: 'ownerCompanyGrd',
            selector: 'ownercompany ownercompanylist gridpanel'
        }
    ],

    init: function(application) {
        this.control({
            "ownercompany ownercompanylist gridpanel":{
                render:this.onRenderOwnercompanylist
            },
            "ownercompany ownercompanyHdr button#bt_save":{
                click: this.onSaveOwnerCompany
            },
            "ownercompany ownercompanyHdr button#bt_cancel":{
                click: this.onCancelOwnerCompany
            },
            "ownercompany ownercompanylist gridpanel [itemId=bt_up]":{
                click: this.onUpRecord
            },
            "ownercompany ownercompanylist gridpanel [itemId=bt_Del]":{
                click: this.onDeleteRecord
            }
        });
    },

    onRenderOwnercompanylist: function(component, options) {
        component.getStore().load();
    },

    onSaveOwnerCompany: function(button) {
        var grid=this.getOwnerCompanyGrd();
        var pan=button.up('ownercompany');
        var frm=pan.down('ownercompanyHdr');
        Ext.Msg.wait('loading');
        if(frm.down('hiddenfield[itemId=OCompany_IdPj]').getValue()>0){

        }else{
            frm.down('hiddenfield[itemId=OCompany_IdPj]').setValue(0);
            frm.down('hiddenfield[itemId=Active]').setValue(false);
        }

        if(frm.getForm().isValid()){
            frm.getForm().submit({
                clientValidation: true,
                url: 'SettingMain/OwnerCompanyProjectInsert',
                success: function(form, action) {

                    var result = action.result;
                    if (result.success) {
                        Ext.Msg.hide();
                        button.setText('save');
                        frm.getForm().reset();
                        grid.getStore().load();

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

    onCancelOwnerCompany: function(button) {
        var pan=button.up('ownercompany');
        var frm=pan.down('ownercompanyHdr');
        var btn=frm.down('button#bt_save');
        frm.getForm().reset();
        btn.setText('Save');
    },

    onUpRecord: function(view, rowIndex, colIndex, item, e, record) {
        var grd= this.getOwnerCompanyGrd();
        var main=view.up('ownercompany');
        var frm=main.down('ownercompanyHdr');
        var btn=frm.down('button#bt_save');
        frm.loadRecord(record);
        btn.setText('Edit');
    },

    onDeleteRecord: function(view, rowIndex, colIndex, item, e, record) {
        var grid = this.getOwnerCompanyGrd();
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
