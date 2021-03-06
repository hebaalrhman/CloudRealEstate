/*
 * File: app/view/Header.js
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

Ext.define('CloudRealEstate.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.appheader',

    requires: [
        'CloudRealEstate.view.MainPanel'
    ],

    height: 30,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                beforerender: {
                    fn: me.onToolbarBeforeRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onToolbarBeforeRender: function(component, eOpts) {
                 //var store =
        var me=component;
         Ext.create("CloudRealEstate.store.Menu",
                              {
                                  listeners:{
                                      load: function(store,records,success,operation,opts) {
                                          store.each(function(record) {
                                              var menu = new Ext.menu.Menu();
                                                Ext.each(record.raw.items, function(item){
                                                    menu.add({
                                                        text: translations[item.text],
                                                        iconCls: item.iconCls,
                                                        className: item.className,
                                                        itemId:item.id,
                                                           handler: function(item){
                                                               //console.log(item.className);
                                                              // console.log("item.className");
                                                              /* if ( item.className === "addservicorder"){

                                                                   console.log('ggggggggg')
                                                                 new Ext.create('Transport.view.ServiceOrder');

                                                               }else{}*/
                                                               var pan1=me.up();
                                                               var pan=pan1.down('mainpanel');
                                                               // console.log(pan);
                                                                var newTab = pan.items.findBy(
                                                                    function (tab){
                                                                                    return tab.title === item.text;
                                                                    });
                                                                   if (!newTab){
                                                                       newTab = pan.add({
                                                                                xtype: item.className,
                                                                                closable: true,
                                                                                iconCls: item.iconCls,
                                                                                title: item.text
                                                                    });
                                                                   }
                                                                   pan.setActiveTab(newTab);
                                                           }

                                                    });
                                              });

                                            //  console.log("class NN");
                                              //console.log(record.raw.data);
                                              //console.log(record.get('className'));
                                                me.add({
                                                xtype: 'button',

                                                text: translations[record.data.text] ,
                                                iconCls: record.data.iconCls,
                                                menu: menu


                                                 });

                                          });

                                      }
                                  }
                              });

        return me;

    }

});