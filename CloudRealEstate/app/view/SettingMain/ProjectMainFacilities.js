/*
 * File: app/view/SettingMain/ProjectMainFacilities.js
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

Ext.define('CloudRealEstate.view.SettingMain.ProjectMainFacilities', {
    extend: 'Ext.form.Panel',
    alias: 'widget.projectmainfacilities',

    requires: [
        'CloudRealEstate.view.publicControl.ckbFacilties',
        'Ext.form.FieldSet',
        'Ext.toolbar.Toolbar'
    ],

    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Project Main Facilities',
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
                                    xtype: 'ckbfacilties',
                                    flex:1,
                                    margin:4,
                                    labelWidth: 70

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
                            itemId: 'Project_IdSub',
                            name: 'Project_IdSub',
                            value:0
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
                            iconCls: 'add',
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            itemId: 'bt_newFacilities',
                            text: 'Add New Facility',
                            iconCls: 'add'
                        },
                        {
                            xtype: 'tbfill'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});