Ext.define('CloudRealEstate.view.SettingMain.ProjectSubGrd', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.projectsubGrd',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.column.CheckColumn',
        'Ext.form.field.Checkbox'
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
                    store: 'SettingMain.ProjectSub',
                    columns: [
                        {
                            xtype: 'actioncolumn',
                            header: 'DEL',
                            itemId: 'bt_Del',
                            width: 42,

                            items: [
                                {
                                    iconCls: 'checkactive'
                                }
                            ]

                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ProjectOption_Code',
                            text: 'Project Option Code'
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'TotalUnitUsed',
                            text: 'Total Unit Used',
                            editor: {
                                xtype: 'numberfield',
                                minValue: 0
                            }
                        },
                        {
                            xtype: 'checkcolumn',
                            dataIndex: 'ApplyManage',
                            text: 'Apply Manage',
                            editor: {
                                xtype: 'checkboxfield',
                                inputValue: 'true'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Notes',
                            text: 'Notes',
                            editor: {
                                xtype: 'textfield'
                            }
                        }
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.RowEditing', {

                        })
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }



});