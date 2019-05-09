/*
 * File: app/view/SettingMain/ProjectTypeOptionsHdr.js
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

Ext.define('CloudRealEstate.view.SettingMain.ProjectTypeOptionsHdr', {
    extend: 'Ext.form.Panel',
    alias: 'widget.projecttypeoptionsHdr',

    requires: [
        'CloudRealEstate.view.publicControl.cmbProjectType_btn',
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
                    title: 'Project Type Options',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            title: 'Project Type',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'cmbprojecttype_btn',
                                    flex: 1,
                                    margin: 4,
                                    maxWidth: 300,
                                    name: 'Project_TypeId',
                                    allowBlank: false,
                                    value:1
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            title: 'Facilities Details',
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
                                            name: 'ProjectOption_Code',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            margin: 4,
                                            maxWidth: 400,
                                            fieldLabel: 'Name',
                                            labelWidth: 50,
                                            name: 'ProjectOption_Name',
                                            allowBlank: false
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
                                            fieldLabel: 'Description',
                                            labelWidth: 70,
                                            name: 'ProjectOption_Description'
                                        }
                                    ]
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
                            itemId: 'Project_Type_OptionId',
                            name: 'Project_Type_OptionId'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});