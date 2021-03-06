/*
 * File: app/view/publicControl/AutoCompleteHotels.js
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

Ext.define('CloudRealEstate.view.publicControl.AutoCompleteHotels', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.autocompletehotels',

    fieldLabel: 'Place Name',
    labelWidth: 80,

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    },

    afterRender: function() {

                this.autocomplete=new google.maps.places.SearchBox(this.inputEl.dom);

                 this.callParent();
    }

});