/*
This function contains a dialog which is used to gather the information 
used when processing warrants for entry. Specifically used for recording 
information on the CORE record printout. 

It works in conjunction with the addtoolbar button function below.

it must be placed in as a folder level script in the users folder found at the below path


*/






function CreateWarrantDialog()
{

var WrntDlg =
{
	cDl:"",
	cPntrv:"",
	cDd1:"",
	cDd2:"",
	cDd3:"",
	cDdr1:"",
	cDdr2:"",
	cDdr3:"",
	cDdcase1:"",
	cDdcase2:"",
	cDdcase3:"",
	cFtad:"",
	cFta1:"",
	
	initialize: function(dialog)
	{
		
    
		
		
		// set a default value for radio groups
		dialog.load(
		{
			"dl01": true,
			"pnt1": true,
			"rad7": true
		});
		
		this.hasfta = false;
		// disable the fta case# field
		dialog.enable(
		{
			"ftad" : this.hasfta,
			"fta1" : this.hasfta	
		});
	},


rad7: function (dialog) {
			// Process the fta, if the user selects yes enable the fta case# field
			this.hasfta = !this.hasfta;
			dialog.enable({
				"ftad" : this.hasfta,
				"fta1" : this.hasfta,
			});
		},	
 
 
 	
	commit:function(dialog)
		{ // called when OK pressed
			var results = dialog.store();
			// try to assign the variables to access outside the dialog
			//this.cdl = results.
			//this.pntrv = results. 
			
			this.cDl = this.getdl(results);
			this.cPntrv = this.getpntrv(results);
			this.cDd1 = results.ddt1;
			this.cDd2 = results.ddt2;
			this.cDd3 = results.ddt3;
			this.cDdr1 = results.ddr1;
			this.cDdr2 = results.ddr2;
			this.cDdr3 = results.ddr3;
			this.cDdcase1 = results.cse1;
			this.cDdcase2 = results.cse2;
			this.cDdcase3 = results.cse3;
			this.cFtad = results.ftad;
			this.cFta1 = results.fta1;
			
			// check to see if variables are stored 
			console.println("DD1 is " + results.ddt1 + " and the diary date remarks are " + results["ddr1"] );
			console.println("DD2 is " + results.ddt2 + " and the diary date remarks are " + results["ddr2"] );
			console.println("DD3 is " + results.ddt3 + " and the diary date remarks are " + results["ddr3"] );
		
		},
		
		
		getdl: function (results) {
			for ( var i=1; i<=3; i++) {
				if ( results["dl0"+i] ) {
					switch (i) {
						case 1:
							var cDl = "NO DL";
							break;
						case 2:
							var cDl = "ADD DL";
							break;
						case 3:
							var cDl = "DL VALID";
					}
				}
			};
			return cDl;
		},
		
		
				getpntrv: function (results) {
			for ( var i=1; i<=3; i++) {
				if ( results["pnt"+i] ) {
					switch (i) {
						case 1:
							var cPntrv = "NO PNTRV";
							break;
						case 2:
							var cPntrv = "ADD PNTRV";
							break;
						case 3:
							var cPntrv = "PNTRV VALID";
					}
				}
			};
			return cPntrv;
		},
		
// build my dialog
 
 description:
 {
	name: "Test Dialog",
	elements:
	[
		{
			type: "view",
			align_children: "align_left",
			elements:
			[
	
				{
					type: "cluster",
					name: "DIARY DATES",
					elements:
					[
						{
							type: "view",
							align_children: "align_row",
							elements:
							[
								{
									type: "static_text",
									name: "DD1",
									bold: true,
									font: "dialog",
								},
								{
									item_id: "ddt1",
									type: "edit_text",
									char_width: 20,
									height: 20,
									width: 80
								},
								{							
									type: "static_text",
									name: "DDR1",
									bold: true,
									font: "dialog",								
								},
								{
									item_id: "ddr1",
									type: "edit_text",
									alignment: "align_fill",
									width: 200,
									height: 20
								},
								{							
									type: "static_text",
									name: "case#",
									bold: true,
									font: "dialog",
								},
								{
									item_id: "cse1",
									type: "edit_text",
									alignment: "align_fill",
									width: 200,
									height: 20
								},
							
							]
							
						},
						{
							type: "view",
							align_children: "align_row",
							elements:
							[
								{
									type: "static_text",
									name: "DD2",
									bold: true,
									font: "dialog",
								},
								{
									item_id: "ddt2",
									type: "edit_text",
									char_width: 20,
									height: 20,
									width: 80
								},
								{							
									type: "static_text",
									name: "DDR2",
									bold: true,
									font: "dialog",
								},
								{
									item_id: "ddr2",
									type: "edit_text",
									alignment: "align_fill",
									width: 200,
									height: 20
								},
								{							
									type: "static_text",
									name: "case#",
									bold: true,
									font: "dialog",
								},
								{
									item_id: "cse2",
									type: "edit_text",
									alignment: "align_fill",
									width: 200,
									height: 20
								},
							
							]
							
						},
						{
							type: "view",
							align_children: "align_row",
							elements:
							[
								{
									type: "static_text",
									name: "DD3",
									bold: true,
									font: "dialog",
								},
								{
									item_id: "ddt3",
									type: "edit_text",
									char_width: 20,
									height: 20,
									width: 80
								},
								{							
									type: "static_text",
									name: "DDR3",
									bold: true,
									font: "dialog",								
								},
								{
									item_id: "ddr3",
									type: "edit_text",
									alignment: "align_fill",
									width: 200,
									height: 20
								},
								{							
									type: "static_text",
									name: "case#",
									bold: true,
									font: "dialog",
								},
								{
									item_id: "cse3",
									type: "edit_text",
									alignment: "align_fill",
									width: 200,
									height: 20
								},
							
							]
							
						},
					]
				},
				{
					type:"view",
					alignment: "align_left",
					align_children: "align_row",
					elements:
					[
						{
							type: "cluster",
							alignment: "align_left",
							name: "ADD FTA?",
							align_children: "align_left",
							elements:
							[
								{
									type: "radio",
									name: "NO",
									bold: true,
									font: "dialog",
									item_id: "rad7",
									group_id: "ddrd"
								},
								{							
									type: "view",
									allignment: "align_left",
									align_children: "align_row",
									elements:
									[
										{							
											type: "radio",
											name: "YES",
											bold: true,
											font: "dialog",
											item_id: "rad7",
											group_id: "ddrd"
											
										},
										{
											type: "static_text",
											name: "FTA Date",
											bold: true,
											font: "dialog"
										},
										{
											type: "edit_text",
											item_id: "ftad",
											alignment: "align_fill",
											width: 100,
											height: 20
										},
										{
											type: "static_text",
											name: "FTA case#",
											bold: true,
											font: "dialog"
										},
										{
											type: "edit_text",
											item_id: "fta1",
											alignment: "align_fill",
											width: 100,
											height: 20
										},
									]
								},
							]
						},
						{
							type: "view",
							width: 220,
							alignment: "align_left",
							align_children: "align_left",
							elements:
							[
								{
									type: "ok_cancel",
									
								}
							]
						},
					]
				},
			]
		},		
		{
			type: "view",
			align_children: "align_left",
			elements:
			[
				{
					type: "cluster",
					name: "DL",
					elements:
					[
						{
							type: "radio",
							item_id: "dl01",
							group_id: "dlrd",
							name: "NO DL"
						},
						{
							type: "radio",
							item_id: "dl02",
							group_id: "dlrd",
							name: "ADD DL"
						},
						{
							type: "radio",
							item_id: "dl03",
							group_id: "dlrd",
							name: "VALID DL"
						},
					]
				},
				{
					type: "cluster",
					name: "PNTRV",
					elements:
					[
						{
							type: "radio",
							item_id: "pnt1",
							group_id: "pvrd",
							name: "NO PNTRV"
						},
						{
							type: "radio",
							item_id: "pnt2",
							group_id: "pvrd",
							name: "ADD PNTRV"
						},
						{
							type: "radio",
							item_id: "pnt3",
							group_id: "pvrd",
							name: "PNTRV VALID"
						},
					]
				}
			]
		},		
	]
 }
}; 

//app.execDialog(WrntDlg);
//line above used for testing.
//==================================================================
// the lines in this group are there just to make sure the variables were assigned. 
// WrntDlg.cDd1;
// WrntDlg.cDd2;
// WrntDlg.cDd3;
// WrntDlg.cDdr1;
// WrntDlg.cDdr2;
// WrntDlg.cDdr3;
// WrntDlg.cDdcase1;
// WrntDlg.cDdcase2;
// WrntDlg.cDdcase3;
//===================================================================

if ("ok" == app.execDialog(WrntDlg))
{

var mytext3 = "2013-08-25"
var mytext4 = "AGED WARRANT REVIEW"
var mytext5;

var spans = new Array();
spans[0] = new Object();
spans[0].textStyle = "bold";
spans[0].textColor = color.blue;
spans[0].textSize = 9;
spans[0].fontFamily = ["Arial Black", "monospace" ];
spans[0].text = WrntDlg.cDl + "\r" + WrntDlg.cPntrv;

	
if(WrntDlg.cDd1 != ""){
spans[1] = new Object();
spans[1].textStyle = "bold";
spans[1].textColor = color.blue;
spans[1].textSize = 9;
spans[1].fontFamily = ["Arial Black", "monospace" ];
spans[1].text = "\r\rDD1:   " + WrntDlg.cDd1 + "\r" + WrntDlg.cDdr1 + " " + WrntDlg.cDdcase1; 
}

if(WrntDlg.cDd2 != ""){
spans[2] = new Object();
spans[2].textStyle = "bold";
spans[2].textColor = color.blue;
spans[2].textSize = 9;
spans[2].fontFamily = ["Arial Black", "monospace" ];
spans[2].text = "\r\rDD2:   " + WrntDlg.cDd2 + "\r" + WrntDlg.cDdr2 + " " + WrntDlg.cDdcase2;
}

if(WrntDlg.cDd3 != ""){
spans[3] = new Object();
spans[3].textStyle = "bold";
spans[3].textColor = color.blue;
spans[3].textSize = 9;
spans[3].fontFamily = ["Arial Black", "monospace" ];
spans[3].text = "\r\rDD3:   " + WrntDlg.cDd3 + "\r" + WrntDlg.cDdr3 + " " + WrntDlg.cDdcase3;
}

if(WrntDlg.cFtad != ""){		//testing to see if the if statement works
spans[4] = new Object();
spans[4].textStyle = "bold";
spans[4].textColor = color.blue;
spans[4].textSize = 9;
spans[4].fontFamily = ["Arial Black", "monospace" ];
spans[4].text = "\r\rADD FTA\r"+WrntDlg.cFtad+"\r"+WrntDlg.cFta1+"\rLEAVE ENDORSED BLANK";

}
// Now create the annot with spans as it's richContents
var annot = this.addAnnot({
page: 0,
type: "FreeText",
//rect: [350, 300, 600, 700], 
//rect: [340, 400, 600, 700], // 340 & 600 are good
rect: [340, 500, 600, 700], //this one looks like the winner.
richContents: spans
});
};


};

app.addToolButton({ cName: "DL & DD",cExec: "CreateWarrantDialog()", cTooltext: "Push Me!", cEnable: true, nPos: 0,cLabel: "DL,PNTRV and Diary dates"});