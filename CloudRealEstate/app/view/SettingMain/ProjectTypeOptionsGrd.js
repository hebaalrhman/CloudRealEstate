/*
 * File: app/view/SettingMain/ProjectTypeOptionsGrd.js
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

Ext.define('CloudRealEstate.view.SettingMain.ProjectTypeOptionsGrd', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.projecttypeoptionsGrd',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.View'
    ],
    layout: 'fit',
    bodyPadding: 10,
    autoScroll: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    store: 'SettingMain.ProjectTypeOption',
                    columns: [
                        {
                            xtype: 'actioncolumn',
                            header: 'UP',
                            itemId: 'bt_up',
                            width: 44,
                            items: [
                                {
                                    iconCls: 'up_icon'
                                }
                            ]
                        },
                        {
                            xtype: 'actioncolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if(value){

                                    metaData.tdCls='deleted';


                                }else{
                                    metaData.tdCls='checkactive';




                                }
                            },
                            header: 'DEL',
                            itemId: 'bt_Del',
                            width: 42,
                            dataIndex: 'Active',
                            items: [
                                {

                                }
                            ]
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Project_TypeCode',
                            text: 'Project Type'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ProjectOption_Code',
                            text: 'Project Option Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ProjectOption_Name',
                            text: 'Project Option Name'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ProjectOption_Description',
                            text: 'Project Option Description'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});