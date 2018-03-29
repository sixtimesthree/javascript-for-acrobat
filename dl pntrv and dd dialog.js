var dialog3 = {
		// This dialog box is called when the dialog box is created
		initialize: function(dialog) {
			this.loadDefaults(dialog);
		},
		// This dialog box is called when the OK button is clicked.
		commit: function(dialog) {
				// See the Dialog object for a description of how dialog.load
				// and dialog.store work.
				var elements = dialog.store()["subl"];
				var elem2 = dialog.store()["lst2"];
				// do something with the data.
		},
		// Callback for when the button "butn" is clicked.
		butn: function(dialog) {
			var elements = dialog.store()["subl"]
			for(var i in elements) {
				if ( elements[i] > 0 ) {
					app.alert("You chose \"" + i 
						+ "\", which has a value of " + elements[i] );
				}
			}
			var elem2 = dialog.store()["lst2"]
			for(var i in elem2) {
				if ( elem2[i] > 0 ) {
					app.alert("You chose \"" + i 
						+ "\", which has a value of " + elem2[i] );
				}
			}

		},
		loadDefaults: function (dialog) {
			dialog.load({
				subl:
				{
					"NO DL": +1,
					"ADD DL": -2,
					"VALID DL": -3
				},
				
				lst2:
				{
					"NO PNTRV": +1,
					"ADD PNTRV": -2,
					"VALID PNTRV": -3
				},
				lst3:
				{
					"AGED WARRANT REVIEW": +1,
					"CONTACT CSO": -2,
					"CHECK IF CASE CONCLUDED": -3,
					"NONE": -4
				}
				
			})
		},
		// The dialog box description
		description:
		{
			name: "Adobe Acrobat Products", // Title of the dialog 
			width: 1000,
			height: 1000,
			elements: // Child element array
			[
				{
					type: "view",
					align_children: "align_left",
					elements: // Child element array
					[
						{
							type: "cluster",
							name: "DL AND PNTRV INFORMATION",
							elements: // Child Element Array
							[
								{
									type: "popup",
									item_id: "subl",
									width: 200,
									height: 60
								},
								{
									type: "popup",
									item_id: "lst2",
									width: 200,
									height: 60
								}
							]
						},
						{
							type: "cluster",
							alignment: "align_right",
							name: "DIARY DATES",
							elements: // Child Element Array
							[
								{
									type: "popup",
									item_id: "lst3",
									width: 200,
									height: 60
								},
								{
									type: "button",
									item_id: "butn",
									name: "Press Me"
								}
							]
						},
						{
							type: "ok_cancel"
						}
					]
				}
			]
		}
	}
	




// add a toolbutton
	app.addToolButton({
		cName: "WARRANT",
		//oIcon: oIcon,
		cExec: "app.execDialog(dialog3)",
		cTooltext: "DL,DD",
		cEnable: true,
		nPos: 0,
                cLabel: "DL"
	});


app.removeToolButton("WARRANT")
