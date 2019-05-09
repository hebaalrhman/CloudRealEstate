Ext.define('CloudRealEstate.view.SettingMain.OwnerCompanyHdr', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ownercompanyHdr',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
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
                    title: 'OwnerCompany',
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
                                    name: 'OCompanyCode',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: 4,
                                    maxWidth: 400,
                                    fieldLabel: 'Name',
                                    labelWidth: 60,
                                    name: 'OCompanyName',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    margin: 4,
                                    maxWidth: 300,
                                    fieldLabel: 'GLAccount',
                                    labelWidth: 70,
                                    name: 'GLAccountNo'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            title: 'MoreDetails',
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
                                            maxWidth: 500,
                                            fieldLabel: 'WebSite',
                                            labelWidth: 50,
                                            name: 'OCompanyWeb'
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
                                            maxWidth: 500,
                                            fieldLabel: 'Email',
                                            labelWidth: 50,
                                            name: 'OCompanyEmail'
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
                                            maxWidth: 300,
                                            fieldLabel: 'TEL.',
                                            labelWidth: 50,
                                            name: 'OCompanyTel'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: 4,
                                            maxWidth: 300,
                                            fieldLabel: 'Mobile',
                                            labelWidth: 50,
                                            name: 'OCompanyMobile'
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
                                            maxWidth: 500,
                                            fieldLabel: 'Address',
                                            labelWidth: 50,
                                            name: 'OCompanyAddress'
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
                            itemId: 'Active',
                            name: 'Active'
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            itemId: 'OCompany_IdPj',
                            name: 'OCompany_IdPj'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});