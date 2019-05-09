Ext.define('CloudRealEstate.view.SettingMain.ProjectMainImages', {
    extend: 'Ext.form.Panel',
    alias: 'widget.projectmainImages',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.File',
        'Ext.Img',
        'Ext.form.field.Hidden'
    ],

    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Project Main Images',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 2,
                            title: 'Image Details',
                            items: [
                                {
                                    xtype: 'filefield',
                                    anchor: '100%',
                                    margin: 4,
                                    fieldLabel: 'Image',
                                    labelWidth: 50,
                                    name: 'picture',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textareafield',
                                    anchor: '100%',
                                    margin: 4,
                                    fieldLabel: 'Description',
                                    labelWidth: 80,
                                    name: 'Description_Image'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            title: 'Picture',
                            items: [
                                {
                                    xtype: 'image',
                                    height: 201,
                                    width: 233,
                                    alt: 'Image',
                                    src: './resources/profileImages/gallery.png'
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
                            itemId: 'Pj_Gallery_Id',
                            name: 'Pj_Gallery_Id'
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            itemId: 'Relation_Id',
                            name: 'Relation_Id',
                            value:1
                        },
                        {
                            xtype: 'hiddenfield',
                            flex: 1,
                            itemId: 'Active',
                            name: 'Active'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
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
                }
            ]
        });

        me.callParent(arguments);
    }

});