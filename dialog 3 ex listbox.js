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
				var elem2 = dialog.store()["list2"];
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
		},
		loadDefaults: function (dialog) {
			dialog.load({
				subl:
				{
					"Acrobat Professional": +1,
					"Acrobat Standard": -2,
					"Adobe Reader": -3
				}
				
				list2:
				{
					"NO PNTRV": +1,
					"ADD PNTRV": -2,
					"VALID PNTRV": -3
				}
			})
		},
		// The dialog box description
		description:
		{
			name: "Adobe Acrobat Products", // Title of the dialog box
			elements: // Child element array
			[
				{
					type: "view",
					align_children: "align_left",
					elements: // Child element array
					[
						{
							type: "cluster",
							name: "Select",
							elements: // Child Element Array
							[
								{
									type: "static_text",
									name: "Select Acrobat you use",
									font: "default"
								},
								{
									type: "list_box",
									item_id: "subl",
									width: 200,
									height: 60
								},
								{
									type: "list_box",
									item_id: "lst2",
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
	app.execDialog(dialog3);