var mytext = "NO DL"
var mytext2 = "NO PNTRV"
var mytext3 = "2013-08-25"
var mytext4 = "AGED WARRANT REVIEW"
var mytext5;

var spans = new Array();
spans[0] = new Object();
spans[0].textStyle = "bold";
spans[0].textColor = color.blue;
spans[0].textSize = 10;
spans[0].fontFamily = ["Arial Black", "monospace" ];
spans[0].text = mytext+"\r"+mytext2+"\r\r"+mytext5+"\r"+mytext;
//spans[0].text = "THIS ONE WORKS";

spans[1] = new Object();
//spans[1].text = "but I dont know why";
spans[1].text = "DD1: "+mytext3+"\r"+mytext4;
spans[1].textColor = color.blue;
spans[1].textSize = 20;
spans[1].alignment = "left";


if(mytext5 == ""){
spans[2] = new Object();
spans[2].text = "will soon be here!";
spans[2].textColor = color.green;
spans[2].fontStyle = "italic";
spans[2].underline = true;
spans[2].alignment = "right";
}
// Now create the annot with spans as it's richContents
var annot = this.addAnnot({
page: 0,
type: "FreeText",
rect: [50, 50, 300, 300], 
richContents: spans
});