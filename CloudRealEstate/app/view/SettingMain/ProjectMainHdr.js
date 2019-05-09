var imageTpl = new Ext.XTemplate(
    '<tpl for=".">',
    '<div class="user_img" style="display: inline-block; margin-right: 10px" >',
    '<img src="./resources/profileImages/{Pj_img_Code}" class="img-responsive"  width="70"height="70">',
    '<div style="font-weight: bold">{Pj_img_Code}</div>',
    '</div>',
    '</tpl>'
);


Ext.define('CloudRealEstate.view.SettingMain.ProjectMainHdr', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.projectmainHdr',

    requires: [
        'CloudRealEstate.view.SettingMain.ProjectMainDetails',
        'CloudRealEstate.view.SettingMain.ProjectMainGrd',
        'CloudRealEstate.view.SettingMain.ProjectMainImages',
        'CloudRealEstate.view.SettingMain.ProjectMainFacilities',
        'CloudRealEstate.view.SettingMain.ProjectSubGrd',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.grid.Panel'
    ],

    activeTab: 0,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    layout: 'border',
                    title: 'Project Main Details',
                    itemId:'ProjectMainDetails',
                    items: [
                        {
                            xtype: 'projectmaindetails',
                            region: 'north'
                        },
                        {
                            xtype: 'projectmainGrd',
                            region: 'center'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'border',
                    title: 'Project Main Images',
                    itemId:'ProjectMainImages',
                    tabConfig: {
                        xtype: 'tab',
                       disabled: true
                    },
                    items: [
                        {
                            xtype: 'projectmainImages',
                            region: 'north'
                        },
                        {
                            xtype:'panel',
                            region:'center',
                            layout:'fit',
                            items:[
                                {
                                    xtype: 'dataview',
                                    margin: 4,
                                    layout:'fit',
                                    store: 'SettingMain.ProjectGallery',
                                    tpl: imageTpl
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'border',
                    title: 'Project Main Facilities',
                    itemId:'ProjectMainFacilities',
                    tabConfig: {
                        xtype: 'tab',
                       disabled: true
                    },
                    items: [
                        {
                            xtype: 'projectmainfacilities',
                            region: 'north'
                        },
                        {
                            xtype: 'projectsubGrd',
                            region: 'center'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});