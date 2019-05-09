
/*
 * File: app.js
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

// @require @packageOverrides

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '.',
        'Ext.ux': 'ux'

    }
});
Ext.application({
    models: [
        'menu.Item',
        'menu.Root'

    ],
    models:[

    ],
    stores: [
        'Menu'

    ],
    views: [
        'MyViewport',
        'MainPanel',
        'menu.Accordion',

        'menu.Item',


        'SettingMain.ProjectMain',
        'SettingMain.OwnerCompany',
        'SettingMain.ProjectTypeOption'




    ],
    controllers: [

        'Menu',
        'SettingMain.ProjectMain',
        'SettingMain.OwnerCompany',
        'SettingMain.ProjectTypeOption'


    ],
    requires: [
        'CloudRealEstate.view.MyViewport',
        'Ext.view.View'


    ],
    name: 'CloudRealEstate',
    launch: function() {
        Ext.create('CloudRealEstate.view.MyViewport');
    }

});
