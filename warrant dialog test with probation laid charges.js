////////////////////////////////////////////////////////////////
//  Acrobat JavaScript Dialog
//


/* First we have to build the dialog object.
in this case oWarrantDialog is the dialog object
and contains the following methods.
Initialize
Validate
Commit
Description
I have broken up each section to make it easier to read. */

var oWarrantDialog = {
	/* Declare the varialbes used in this dialog and the values they are
	set to initially. If there is no intial value the 
	Variable is set to null */
	
	strDl:"null",
	strPntrv:"null",
	strDiaryDate1:null,
	strDiaryDateRem1:null,
	strDiaryDate2:null,
	strDiaryDateRem2:null,
	strDiaryDate3:null,
	strDiaryDateRem3:null,
	strFta:"null",
	strFtaDate:null,
	strFtaCase:null,
	strProbation:"null",
	strOri:null,
	
	//I don't need this function below but I left it in their for reference.
	
	GetRadioSel:function(oRslts,aCtrls){var cSel = null;aCtrls.some(function(a){return oRslts[a]?cSel=a:false;});return cSel;}, 
	
	

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
	
/* This is the begining of the initialize method. 
The intialize method is where all the values 
for the dialog are loaded and set.	 */
	
	initialize:function(dialog){
		
		/* var oInit = {
			// Name of field:value it gets set to
			ddt1:this.strDiaryDate1, // initial value is null
			ddr1:this.strDiaryDateRem1,
			ddt2:this.strDiaryDate2,
			ddr2:this.strDiaryDateRem2,
			ddt3:this.strDiaryDate3,
			ddr3:this.strDiaryDateRem3,
			Ftad:this.strFtaDate,
			Ftac:this.strFtaCase,
			ORI1:this.strOri,
			
		};
		this.strDl&&(oInit[this.strDl] = true);
		this.strPntrv&&(oInit[this.strPntrv] = true);
		this.strFta&&(oInit[this.strFta] = true);
		this.strProbation&&(oInit[this.strProbation] = true);
		this.strOri&&(oInit[this.strOri] = true); 
		*/
		
		dialog.load(
		{
			"Dl01" : true,
			"pnt1" : true,
			"fta1" : true,
			"Pro1" : true,
			// The line below is just a test on how to set a value in an edit_text field
			//"Ftad" : "2018-123456"
		});
		
		
		this.hasfta = false; // This sets the value of this.hasfta to false
		// disable the fta date,fta case# and probation ORI fields
		dialog.enable(
			{
				"Ftad" : this.hasfta,
				"Ftac" : this.hasfta,
				
			}
		);
		
		this.hasori = false; // This sets the value of this.hasori to false
		// disable the probation ORI fields
		dialog.enable(
			{
				"Ori1" : this.hasori,
				"Ori2" : this.hasori
			}
		);
		
		
		
	},

// This is the end of the initialize method
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////	

/* below are the functions used to toggle the FTA DATE, FTA CASE#, and ORI fields
on and off.
The function is called when the indicated radio button is activated.
For example in the function directly below when the radio button with the
item_id fta2 is selected the fields associated to Ftad and Ftac are enabled depending on the value of this.hasfta at the time.  

  */

fta2: function (dialog) {
		this.hasfta = !this.hasfta; // toggle-if false set to true, if true set to false
		/* 
		if the user selects the "Yes" radio button enable the fta date and case# fields
		 A glitch I can't figure out yet is if the user selects the "YES" radio 
		 button again it will disable the fields again. I will just have to hope the 
		 user will not do that*
		 */
			
		dialog.enable({
			"Ftad" : this.hasfta,
			"Ftac" : this.hasfta
		});
	},	

fta1: function (dialog) {
		
		this.hasfta = !this.hasfta; // toggle-if false set to true, if true set to false
		/* 
		if the user selects the "NO" radio button enable the fta date and case# fields
		 A glitch I can't figure out yet is if the user selects the "NO" radio 
		 button again it will disable the fields again. I will just have to hope the 
		 user will not do that*
		 */
		dialog.enable({
			"Ftad" : this.hasfta,
			"Ftac" : this.hasfta,
		});
	},	
	
Pro2: function (dialog) {
		this.hasori = !this.hasori; // toggle-if false set to true, if true set to false
		
		dialog.enable({
			"Ori1" : this.hasori,
			"Ori2" : this.hasori
		});
	},	

Pro1: function (dialog) {
		
		this.hasori = !this.hasori; // toggle-if false set to true, if true set to false
		dialog.enable({
			"Ori1" : this.hasori,
			"Ori2" : this.hasori,
		});
	},	
	
// This is the end of the toggle functions
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/* below is the validate method

 */	
	validate:function(dialog){
		var bRtn = true;
		var oRslt = dialog.store();
		return bRtn;
	},
	
	// This is the end of the validate method
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/* below is the commit method

 */	
	
	
	
	commit:function(dialog){
		var oRslt = dialog.store();
		this.strDl = this.getdl(oRslt);
		this.strPntrv = this.getpntrv(oRslt);
		this.strDiaryDate1 = oRslt.ddt1;
		this.strDiaryDateRem1 = oRslt.ddr1;
		this.strDiaryDate2 = oRslt.ddt2;
		this.strDiaryDateRem2 = oRslt.ddr2;
		this.strDiaryDate3 = oRslt.ddt3;
		this.strDiaryDateRem3 = oRslt.ddr3;
		this.strFta = this.GetRadioSel(oRslt,["fta1","fta2"]);
		this.strFtaDate = oRslt.Ftad;
		this.strFtaCase = oRslt.Ftac;
		this.strProbation = this.GetRadioSel(oRslt,["Pro1","Pro2"]);
		this.strOri = this.GetRadioSel(oRslt,["Ori1","Ori2"]);	
	},
// This is the end of the commit method
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/* below are the functions I use to set the values of the various radio buttons. 

 */		
getdl: function (oRslt) {
		for ( var i=1; i<=3; i++) {
			if ( oRslt["Dl0"+i] ) {
				switch (i) {
					case 1:
						var strDl = "NO DL";
						break;
					case 2:
						var strDl = "ADD DL";
						break;
					case 3:
						var strDl = "DL VALID";
				}
			}
		};
		return strDl;
	},
	
	
	getpntrv: function (oRslt) {
			for ( var i=1; i<=3; i++) {
				if ( oRslt["pnt"+i] ) {
					switch (i) {
						case 1:
							var strPntrv = "NO PNTRV";
							break;
						case 2:
							var strPntrv = "ADD PNTRV";
							break;
						case 3:
							var strPntrv = "PNTRV VALID";
					}
				}
			};
			return strPntrv;
		},
	
	// This is the end of the functions
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/* below is where we actually build how the dialog will look. 

 */	
	description:{
		name:"Warrant Processing template created by Demian  Seiden",
		font:"heading",
		bold:true,
		elements:[{type:"view",width:594,height:471,elements:[
		{
			type:"view",
			item_id:"Vew1",
			width:548,
			height:69,
			align_children:"align_row",
			elements:[
				{
					type:"cluster",
					item_id:"Cls1",
					name:"DL ",
					width:227,
					height:44,
					alignment:"align_left",
					align_children:"align_row",
					elements:[
						{
							type:"radio",
							item_id:"Dl01",
							group_id:"DL00",
							name:"NO DL",
						},
						{
							type:"radio",
							item_id:"Dl02",
							group_id:"DL00",
							name:"ADD DL",
						},
						{
							type:"radio",
							item_id:"Dl03",
							group_id:"DL00",
							name:"VALID DL",
						},
					],
				},
				{
					type:"cluster",
					item_id:"Cls3",
					name:"PNTRV",
					width:299,
					height:40,
					align_children:"align_row",
					elements:[
						{
							type:"radio",
							item_id:"pnt1",
							group_id:"PNTR",
							name:"NO PNTRV",
						},
						{
							type:"radio",
							item_id:"pnt2",
							group_id:"PNTR",
							name:"ADD PNTRV",
						},
						{
							type:"radio",
							item_id:"pnt3",
							group_id:"PNTR",
							name:"VALID PNTRV",
						},
					],
				},
			],
		},
		{
			type:"view",
			item_id:"Vew2",
			width:576,
			height:248,
			elements:[
				{
					type:"cluster",
					item_id:"Cls4",
					name:"DIARY DATES date format YYYY-MM-DD",
					width:562,
					height:148,
					elements:[
						{
							type:"view",
							item_id:"Vew3",
							width:539,
							height:35,
							align_children:"align_row",
							elements:[
								{
									type:"static_text",
									item_id:"Sta2",
									name:"DD1",
								},
								{
									type:"edit_text",
									item_id:"ddt1",
									width:112,
									height:20,
								},
								{
									type:"static_text",
									item_id:"Sta3",
									name:"DDR1",
								},
								{
									type:"edit_text",
									item_id:"ddr1",
									width:320,
									height:20,
								},
							],
						},
						{
							type:"view",
							item_id:"Vew4",
							width:539,
							height:35,
							align_children:"align_row",
							elements:[
								{
									type:"static_text",
									item_id:"Sta4",
									name:"DD2",
								},
								{
									type:"edit_text",
									item_id:"ddt2",
									width:112,
								},
								{
									type:"static_text",
									item_id:"Sta5",
									name:"DDR2",
								},
								{
									type:"edit_text",
									item_id:"ddr2",
									width:320,
								},
							],
						},
						{
							type:"view",
							item_id:"Vew5",
							width:539,
							height:35,
							align_children:"align_row",
							elements:[
								{
									type:"static_text",
									item_id:"Sta6",
									name:"DD3",
								},
								{
									type:"edit_text",
									item_id:"ddt3",
									width:112,
								},
								{
									type:"static_text",
									item_id:"Sta7",
									name:"DDR3",
								},
								{
									type:"edit_text",
									item_id:"ddr3",
									width:320,
								},
							],
						},
					],
				},
				{
					type:"view",
					item_id:"Vew6",
					width:562,
					height:71,
					align_children:"align_row",
					elements:[
						{
							type:"cluster",
							item_id:"Cls5",
							name:"ADD FTA?",
							width:542,
							height:80,
							align_children:"align_row",
							elements:[
								{
									type:"view",
									item_id:"Vew7",
									width:64,
									height:52,
									elements:[
										{
											type:"radio",
											item_id:"fta1",
											group_id:"FTAs",
											name:"NO",
										},
										{
											type:"radio",
											item_id:"fta2",
											group_id:"FTAs",
											name:"YES",
										},
									],
								},
								{
									type:"view",
									item_id:"Vew8",
									width:449,
									height:50,
									align_children:"align_row",
									elements:[
										{
											type:"static_text",
											item_id:"St10",
											name:"FTA DATE",
										},
										{
											type:"edit_text",
											item_id:"Ftad",
											width:112,
										},
										{
											type:"static_text",
											item_id:"Sta9",
											name:"FTA CASE#",
										},
										{
											type:"edit_text",
											item_id:"Ftac",
											width:170,
											height:20,
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			type:"view",
			item_id:"Vew9",
			width:572,
			height:94,
			align_children:"align_row",
			elements:[
				{
					type:"cluster",
					item_id:"Cls6",
					name:"PROBATION LAID CHARGES?",
					width:360,
					height:80,
					align_children:"align_row",
					elements:[
						{
							type:"view",
							item_id:"Ve10",
							width:64,
							height:52,
							elements:[
								{
									type:"radio",
									item_id:"Pro1",
									group_id:"PROB",
									name:"NO",
								},
								{
									type:"radio",
									item_id:"Pro2",
									group_id:"PROB",
									name:"YES",
								},
							],
						},
						{
							type:"view",
							item_id:"Ve11",
							width:120,
							height:50,
							elements:[
								{
									type:"static_text",
									item_id:"St11",
									name:"ADULT",
								},
								{
									type:"radio",
									item_id:"Ori1",
									group_id:"ORIS",
									name:"ON80322",
								},
							],
						},
						{
							type:"view",
							item_id:"Ve12",
							width:136,
							height:50,
							elements:[
								{
									type:"static_text",
									item_id:"St12",
									name:"YOUTH",
								},
								{
									type:"radio",
									item_id:"Ori2",
									group_id:"ORIS",
									name:"ON80360",
								},
							],
						},
					],
				},
				{
					type:"gap",
					item_id:"Gap3",
					width:31,
					height:20,
				},
				{
					type:"ok_cancel",
				},
			],
		},
	]}]
	}
}

if("ok"==app.execDialog(oWarrantDialog))
{
	console.println("strDl = "+oWarrantDialog.strDl);
	console.println("strPntrv = "+oWarrantDialog.strPntrv);
	console.println("strDiaryDate1 = "+oWarrantDialog.strDiaryDate1);
	console.println("strDiaryDateRem1 = "+oWarrantDialog.strDiaryDateRem1);
	console.println("strDiaryDate2 = "+oWarrantDialog.strDiaryDate2);
	console.println("strDiaryDateRem2 = "+oWarrantDialog.strDiaryDateRem2);
	console.println("strDiaryDate3 = "+oWarrantDialog.strDiaryDate3);
	console.println("strDiaryDateRem3 = "+oWarrantDialog.strDiaryDateRem3);
	console.println("strFta = "+oWarrantDialog.strFta);
	console.println("strFtaDate = "+oWarrantDialog.strFtaDate);
	console.println("strFtaCase = "+oWarrantDialog.strFtaCase);
	console.println("strProbation = "+oWarrantDialog.strProbation);
	console.println("strOri = "+oWarrantDialog.strOri);
	
var spans = new Array();
spans[0] = new Object();
spans[0].textStyle = "bold";
spans[0].textColor = color.blue;
spans[0].textSize = 9;
spans[0].fontFamily = ["Arial Black", "monospace" ];
spans[0].text = oWarrantDialog.strDl + "\r" + oWarrantDialog.strPntrv;

if(oWarrantDialog.strDiaryDate1 != ""){
spans[1] = new Object();
spans[1].textStyle = "bold";
spans[1].textColor = color.blue;
spans[1].textSize = 9;
spans[1].fontFamily = ["Arial Black", "monospace" ];
spans[1].text = "\r\rDD1:   " + oWarrantDialog.strDiaryDate1 + "\r" + oWarrantDialog.strDiaryDateRem1; 
}

if(oWarrantDialog.strDiaryDate2 != ""){
spans[2] = new Object();
spans[2].textStyle = "bold";
spans[2].textColor = color.blue;
spans[2].textSize = 9;
spans[2].fontFamily = ["Arial Black", "monospace" ];
spans[2].text = "\r\rDD2:   " + oWarrantDialog.strDiaryDate2 + "\r" + oWarrantDialog.strDiaryDateRem2;
}

if(oWarrantDialog.strDiaryDate3 != ""){
spans[3] = new Object();
spans[3].textStyle = "bold";
spans[3].textColor = color.blue;
spans[3].textSize = 9;
spans[3].fontFamily = ["Arial Black", "monospace" ];
spans[3].text = "\r\rDD3:   " + oWarrantDialog.strDiaryDate3 + "\r" + oWarrantDialog.strDiaryDateRem3;
}

if(oWarrantDialog.strFtaDate != ""){		//testing to see if the if statement works
spans[4] = new Object();
spans[4].textStyle = "bold";
spans[4].textColor = color.blue;
spans[4].textSize = 9;
spans[4].fontFamily = ["Arial Black", "monospace" ];
spans[4].text = "\r\rADD FTA\r"+oWarrantDialog.strFtaDate+"\r"+oWarrantDialog.strFtaCase+"\rLEAVE ENDORSED BLANK";
}

if(oWarrantDialog.strOri == "Ori1"){		//testing to see if the if statement works
spans[4] = new Object();
spans[4].textStyle = "bold";
spans[4].textColor = color.blue;
spans[4].textSize = 9;
spans[4].fontFamily = ["Arial Black", "monospace" ];
spans[4].text = "\r\rADD ORI:\rON80322";
}


if(oWarrantDialog.strOri == "Ori2"){		//testing to see if the if statement works
spans[4] = new Object();
spans[4].textStyle = "bold";
spans[4].textColor = color.blue;
spans[4].textSize = 9;
spans[4].fontFamily = ["Arial Black", "monospace" ];
spans[4].text = "\r\rADD ORI:\rON80360";
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
}