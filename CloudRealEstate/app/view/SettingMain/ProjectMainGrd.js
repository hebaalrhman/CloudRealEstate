Ext.define('CloudRealEstate.view.SettingMain.ProjectMainGrd', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.projectmainGrd',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.View'
    ],

    autoScroll: true,
    layout: 'fit',
    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    store: 'SettingMain.ProjectMain',
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
                            dataIndex: 'Active'

                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Project_Code',
                            text: 'Project Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Project_Name',
                            text: 'Project Name'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'OCompanyCode',
                            text: 'Owner Company Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Project_TypeCode',
                            text: 'Project Type Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CountryCode',
                            text: 'Country Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Region_Code',
                            text: 'Region Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CityCode',
                            text: 'City Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Address',
                            text: 'Address'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});