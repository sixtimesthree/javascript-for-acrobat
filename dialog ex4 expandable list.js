var dialog4 = {
		initialize: function(dialog) {
			dialog.load({
				subl:
					{
						"Chapter 1":
						{
							"Section 1":
							{
								"SubSection 1": -1,
								"SubSection 2": -2,
							},
							"Section 2":
							{
								"SubSection 1": -3,
								"SubSection 2": -4,
							}
						},
						"Chapter 3": -5,
						"Chapter 4": -6
					}
			})
		},
		subl: function(dialog) {
			console.println("Selection Box Hit");
		},
		getHierChoice: function (e)
		{
			if (typeof e == "object") {
				for ( var i in e ) {
					if ( typeof e[i] == "object" ) {
						var retn = this.getHierChoice(e[i]);
						if ( retn ) {
							retn.label = i + ", " + retn.label;
							return retn;
						}
					// if e[i] > 0, we’ve found the selected item
					} else  if ( e[i] > 0 ) return { label:i, value: e[i] };
				}
			} else {
				if ( e[i] > 0 ) return e[i];
			}
		},
		butn: function (dialog)
		{
			var element = dialog.store()["subl"]
			var retn = this.getHierChoice(element);
			if ( retn ) {
				// Write to the console the full name of the item selected
				console.println("The selection you've chosen is \"" 
						+ retn.label + "\", its value is " + retn.value );
				dialog.end("ok");
				// this.doc is the doc object of this document
				this.doc.gotoNamedDest("dest"+retn.value);
			}
			else app.alert("Please make a selection, or cancel");
		},
		cncl: function (dialog) { dialog.end("cancel") },
		// Dialog box description
		description:
		{
			name: "My Novel",
			elements:
			[
				{
					type: "view",
					align_children: "align_left",
					elements:
					[
						{
							type: "cluster",
							name: "Book Headings",
							elements:
							[
								{
									type: "static_text",
									name: "Make a selection",
								},
								{
									type: "hier_list_box",
									item_id: "subl",
									char_width: 20,
									height: 200
								}
							]
						},
						{
							type: "view",
							align_children: "align_row",
							elements:
							[
								{
									type: "button",
									item_id: "cncl",
									name: "Cancel"
								},
								{
									item_id: "butn",
									type: "button",
									name: "Select"
								}
							]
						}
					]
				}
			]
		}
	};

	//This function attaches the Doc object to the dialog box, then passes the dialog box to the app.execDialog method. The dialog4 object and this function can be at the document level.

	
function dotheDialog(dialog,doc)
	{
		dialog.doc = doc;
		var retn = app.execDialog( dialog )
	}

dotheDialog( dialog4, this );