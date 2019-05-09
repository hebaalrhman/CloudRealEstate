Ext.define('CloudRealEstate.view.SettingMain.OwnerCompanyList', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ownercompanylist',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.View'
    ],

    autoScroll: true,
    layout: 'fit',
    bodyPadding: 10,
    title: 'OwnerCompanyList',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    store: 'SettingMain.OwnerCompany',
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
                            dataIndex: 'OCompanyCode',
                            text: 'Company Code'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'OCompanyName',
                            text: 'Company Name'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'OCompanyWeb',
                            text: 'Company Web'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'OCompanyEmail',
                            text: 'Company Email'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'OCompanyTel',
                            text: 'Company Tel'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'OCompanyMobile',
                            text: 'Company Mobile'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'OCompanyAddress',
                            text: 'Company Address'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'GLAccountNo',
                            text: 'GLAccountNo'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});