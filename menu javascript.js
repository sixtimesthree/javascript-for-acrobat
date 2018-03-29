app.addSubMenu({ cName: "Footer",cUser: "Set/Remove Date Stamp", cParent: "File", nPos: 20 });

app.addMenuItem({ cName: "Set Date Time ", cParent: "Footer", cExec: "SetFooter(1)"});

app.addMenuItem({ cName: "Set Date Time (Molding)", cParent: "Footer", cExec: "SetFooter(2)"});

app.addMenuItem({ cName: "Remove Date Time ", cParent: "Footer", cExec: "RemoveFooter(1)"}); 


function SetFooter(ARG) 
{

var inch = 72;
for (var p = 0; p < this.numPages; p++)

{

if (ARG==1) {
var aRect = this.getPageBox( {nPage: p} );
aRect[0] += 1.54*inch; // position rectangle from left edge of paper
aRect[2] = aRect[0]+3.8*inch; // length of box
aRect[1] -= .15*inch; // distance from top edge of paper
aRect[3] = aRect[1] - 18; // height of text box


var fd = this.addField("date", "text", p, aRect ); 
fd.textFont=font.HelvB;

}


if (ARG==2) {
var aRect = this.getPageBox( {nPage: p} );
aRect[0] += .35*inch; // position rectangle from left edge of paper
aRect[2] = aRect[0]+3.8*inch; // length of box
aRect[1] -= .30*inch; // distance from top edge of paper
aRect[3] = aRect[1] - 18; // height of text box


var fd = this.addField("date", "text", p, aRect ); 
fd.textFont=font.HelvB;

}

var myWillPrintScript = 'var fd = this.getField("date"); \r'
