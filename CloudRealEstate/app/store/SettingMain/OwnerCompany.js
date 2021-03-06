/*
 * File: app/store/SettingMain/OwnerCompany.js
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

Ext.define('CloudRealEstate.store.SettingMain.OwnerCompany', {
    extend: 'Ext.data.Store',

    requires: [
        'CloudRealEstate.model.SettingMain.OwnerCompany',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'CloudRealEstate.model.SettingMain.OwnerCompany',
          //  storeId: 'SettingMain.OwnerCompany',
            proxy: {
                type: 'ajax',
                actionMethods: {
                    read: 'POST',
                    create: 'POST',
                    update: 'POST',
                    destroy: 'POST'
                },
                api: {
                    read: 'SettingMain/get_Owner_CompanyProject',
                    update: 'SettingMain/OwnerCompanyProjectInsert',
                    create: 'SettingMain/OwnerCompanyProjectInsert',
                    destroy: 'SettingMain/OwnerCompanyProjectInsert'
                },
                url: 'SettingMain/get_OwnerCompany',
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