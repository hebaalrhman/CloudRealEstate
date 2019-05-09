Ext.define('CloudRealEstate.view.SettingMain.ProjectMainDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.projectmaindetails',

    requires: [
        'CloudRealEstate.view.publicControl.cmbOwnerCompany_btn',
        'CloudRealEstate.view.publicControl.cmbProjectType_btn',
        'CloudRealEstate.view.publicControl.cmbCountryMain_btn',
        'CloudRealEstate.view.publicControl.AutoCompleteHotels',
        'CloudRealEstate.view.publicControl.cmbRegion_btn',
        'CloudRealEstate.view.publicControl.cmbCityMain_btn',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.Hidden'
    ],

    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'ProjectMain',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: 4,
                                    maxWidth: 150,
                                    fieldLabel: 'Code',
                                    labelWidth: 40,
                                    name: 'Project_Code',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: 4,
                                    maxWidth: 400,
                                    fieldLabel: 'Name',
                                    labelWidth: 40,
                                    name: 'Project_Name',
                                    allowBlank: false
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            title: 'More Details',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'cmbownercompany_btn',
                                            margin: 4,
                                            name: 'OCompany_IdPj',
                                            allowBlank: false,
                                            flex: 1
                                        },
                                        {
                                            xtype: 'cmbprojecttype_btn',
                                            margin: 4,
                                            name: 'Project_TypeId',
                                            allowBlank: false,
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'cmbcountrymain_btn',
                                            margin: 4,
                                            maxWidth: 200,
                                            name: 'CountryCode',
                                            allowBlank: false,
                                            flex: 1
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: 4,
                                            maxWidth: 500,
                                            fieldLabel: 'Address',
                                            labelWidth: 60,
                                            name: 'Address'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'autocompletehotels',
                                            itemId: 'txtplace',
                                            margin: 4,
                                            maxWidth: 500,
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            itemId: 'txtOnlineaddress',
                                            margin: 4,
                                            maxWidth: 500,
                                            fieldLabel: 'Online Address',
                                            readOnly: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            itemId: 'txtStartLat',
                                            margin: 4,
                                            maxWidth: 250,
                                            fieldLabel: 'Latitude',
                                            labelWidth: 50,
                                            name: 'lat',
                                            readOnly: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            itemId: 'txtStartLong',
                                            margin: 4,
                                            maxWidth: 250,
                                            fieldLabel: 'longitude',
                                            labelWidth: 50,
                                            name: 'long',
                                            readOnly: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'cmbregion_btn',
                                            margin: 4,
                                            name: 'Region_Id',
                                            allowBlank: false,
                                            flex: 1
                                        },
                                        {
                                            xtype: 'cmbcitymain_btn',
                                            margin: 4,
                                            name: 'City_id',
                                            flex: 1
                                        },
                                        {
                                            xtype: 'combobox',
                                            flex: 1,
                                            margin: 4,
                                            maxWidth: 200,
                                            fieldLabel: 'Zone',
                                            labelWidth: 50,
                                            name: 'Zone_Id'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    flex: 1,
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: 4,
                                            fieldLabel: 'Description',
                                            labelWidth: 80,
                                            name: 'Description'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'button',
                                    formBind: true,
                                    itemId: 'bt_save',
                                    iconCls: 'save',
                                    text: 'Save'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'bt_cancel',
                                    iconCls: 'cancel',
                                    text: 'cancel'
                                }
                            ]
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            itemId: 'Project_Id',
                            name: 'Project_Id'
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            itemId: 'Active',
                            name: 'Active'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});