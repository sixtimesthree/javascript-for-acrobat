var oList = {"NO DL":-1,"ADD DL":-1,"DL VALID":-1};
var olist2 = {"NO PNTRV":-1,"ADD PNTRV":-1};
var dlg = {
    initialize: function(dialog)
                { dialog.load({lst1:oList,lst2:olist2});},
    commit: function(dialog)
                { this.oSelect = dialog.store().lst1.lst2;},
    description: 
    {
        name:"List Select Dlg",
        elements:[{type:"view", elements:[{type:"static_text", item_id:"stat", name:"Select an Item"}, {type:"popup", item_id:"lst1", char_width:15}, {type:"ok"}]}]
	
	
	}
	
	
};
app.execDialog(dlg);

name:"List Select Dlg2",
        elements:[{type:"view", elements:[{type:"static_text", item_id:"stat2", name:"Select an Item"}, {type:"popup", item_id:"lst2", char_width:15}, {type:"ok"}]}]