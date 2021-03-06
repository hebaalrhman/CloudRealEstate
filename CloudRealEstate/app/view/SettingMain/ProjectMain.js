/*
 * File: app/view/SettingMain/ProjectMain.js
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

Ext.define('CloudRealEstate.view.SettingMain.ProjectMain', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.projectmain',

    requires: [
        'CloudRealEstate.view.SettingMain.ProjectMainMap',
        'CloudRealEstate.view.SettingMain.ProjectMainHdr',
        'Ext.panel.Panel'
    ],

    layout: 'border',
    title: 'ProjectMain',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'projectmainMap',
                    region: 'center',
                    center: {
                        geoCodeAddr: 'Hurghada, Qesm Hurghada, Egypt',
                        marker: {
                            title: 'Hurghada'
                        }
                    }
                },
                {
                    xtype: 'projectmainHdr',
                    region: 'west',
                    split: true,
                    width: 800,
                    collapsible: true
                }
            ]
        });

        me.callParent(arguments);
    }

});