/*
 * File: app/store/SettingMain/ProjectType.js
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

Ext.define('CloudRealEstate.store.SettingMain.ProjectType', {
    extend: 'Ext.data.Store',

    requires: [
        'CloudRealEstate.model.SettingMain.ProjectType',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'CloudRealEstate.model.SettingMain.ProjectType',
           // storeId: 'SettingMain.ProjectType',
            actionMethods: {
                read: 'POST',
                create: 'POST',
                update: 'POST',
                destroy: 'POST'
            },
            proxy: {
                type: 'ajax',
                api: {
                    read: 'SettingMain/get_Project_Type'
                },
                url: 'SettingMain/get_Project_Type',
                reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});