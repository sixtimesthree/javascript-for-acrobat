var dialog1 = {
	
		initialize: function (dialog) {
			// Create a static text containing the current date.
			var todayDate = dialog.store()["date"];
			todayDate = "Date: " + util.printd("mmmm dd, yyyy", new Date());
			dialog.load({ "date": todayDate });
		},
		commit:function (dialog) { // called when OK pressed
			var results = dialog.store();
			// Now do something with the data collected, for example, 
			console.println("Your name is " + results["fnam"]
				+ " " + results["lnam"] );
		},
		description:
		{
			name: "Personal Data",    // Dialog box title
			align_children: "align_left",
			width: 350,
			height: 200,
			elements:
			[
				{
					type: "cluster",
					name: "Your Name",
					align_children: "align_left",
					elements:
					[
						{
							type: "view",
							align_children: "align_row",
							elements:
							[
								{
									type: "static_text",
									name: "First Name: "
								},
								{
									item_id: "fnam",
									type: "edit_text",
									alignment: "align_fill",
									width: 300,
									height: 20
								}
							]
						},
						{
							type: "view",
							align_children: "align_row",
							elements:
							[
								{
									type: "static_text",
									name: "Last Name: "
								},
								{
									item_id: "lnam",
									type: "edit_text",
									alignment: "align_fill",
									width: 300,
									height: 20
								}
							]
						},
						{
							type: "static_text",
							name: "Date: ",
							char_width: 25,
							item_id: "date"
						},
					]
				},
				{
					alignment: "align_right",
					type: "ok_cancel",
					ok_name: "Ok",
					cancel_name: "Cancel"
				}
			]
		}
	};
	
	app.execDialog(dialog1);