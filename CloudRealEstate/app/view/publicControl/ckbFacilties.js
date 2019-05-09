/**
 * Created by shimaa on 9/16/2018.
 */
Ext.define('CloudRealEstate.view.publicControl.ckbFacilties', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.ckbfacilties',
    requires: [
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Checkbox'
    ],
    checkboxArray:[],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items:[
                {
                    xtype: 'checkboxgroup',
                    fieldLabel: 'Facilties',
                 //   labelClsExtra:'num item-label-icon',
                    columns: 3,
                    width: '70%',
                    overflowY: 'auto',
                    listeners:{
                        render:function (ctr) {

                         //   me.itemsTest(ctr,1);
                        }
                    }
                }
            ]
        });
        me.callParent();
    },
    itemsTest:function (ctr,id) {
        console.log(ctr);
        var me =this;
        console.log(ctr.items);
        console.log(ctr);
        var store=Ext.create("CloudRealEstate.store.SettingMain.ProjectTypeOption",{
          //  autoLoad:true,
            listeners:{
                load:function (value, records, options) {

                    Ext.each(records, function(root){
                        /*var Checked=me.testcheck(root,me.checkboxArray);
                         console.log(x);*/

                        console.log(root);
                        ctr.add(
                            {
                                boxLabel: root.data.ProjectOption_Code + ' : ' + root.data.ProjectOption_Name,
                                name: root.data.ProjectOption_Code,
                                xtype: 'checkbox',
                                inputValue:  root.data.Project_Type_OptionId,
                                checked: me.testcheck(root,me.checkboxArray),
                                handler:function (cht) {
                                    //  console.log(cht.checked);
                                    if(cht.checked==true){
                                        //   console.log(cht.inputValue);
                                        //  console.log(cht.name);
                                        me.checkboxArray.push(
                                            cht.inputValue
                                        );
                                    }
                                    else {
                                        var index=me.functiontofindIndexByKeyValue(me.checkboxArray,cht.inputValue);
                                        console.log(index);
                                        me.checkboxArray.splice(index, 1);
                                    }
                                    console.log(me.checkboxArray);
                                }
                            }
                        );
                    });
                }
            }
        });
        store.load({
            params:{
                Project_TypeId:id
            }
        });
        console.log(ctr);
    },
    functiontofindIndexByKeyValue:function(arraytosearch, valuetosearch){
        for (var i = 0; i < arraytosearch.length; i++) {

            if (arraytosearch[i] == valuetosearch) {
                return i;
            }
        }
        return null;
    },
    testcheck:function(record,checkboxarray){
        var Checked=0;
        Ext.each(checkboxarray,function(root){
            console.log(root);
            if(root=== record.data.Project_Type_OptionId){
                //  console.log(root.Fac_Id);
                //  console.log(record.data.Fac_Id);
                Checked=1;
            }
        });
        if(Checked === 1){
            return true;
        }
        else{
            return false;
        }

    },
    refresh:function(){
        console.log('dddddddddddddddddddddddd');
        var me= this;
        var checkboxgroup=me.down('checkboxgroup');
        console.log(checkboxgroup);
        checkboxgroup.removeAll();
        console.log(checkboxgroup);

    }
});