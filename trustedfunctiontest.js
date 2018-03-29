app.addToolButton({cName:"TestButton", cExec:"CreateMyButton('NextButton', this.pageNum)", cLabel:"Test Button", cTooltext:"Test_Button"});

 

var CreateMyButton = app.trustedFunction(function(cName, nPage)

{

  app.beginPriv();

 

  // Acquire the crop box (visible area) for the current page

  var pgRect = this.getPageBox("Crop", nPage);

  // Build Button Rectangle in lower left corner of page

  var fldRect = []; fldRect [0] = pgRect[0] + 36;

  // 1/2 inch from left side

  fldRect [1] = pgRect[0] + 56;

  // 20 points high

  fldRect [2] = pgRect[0] + 172;

  // 1/2 inch wide

  fldRect [3] = pgRect[0] + 136;

  // 1/2 inch from bottom

  // Create Button on page

  var oFld = this.addField( cName , "button", nPage, fldRect);

  // Setup Button's Properties

  if(oFld != null) {

  //oFld.buttonSetCaption("Next");

  oFld.buttonPosition = position.iconOnly;

  //oFld.buttonImportIcon("/fileserver/folder/folder2/iconimage.pdf");

  oFld.borderStyle = border.b;

  // Beveled edges

  oFld.strokeColor = color.blue;

  // Border Color

  oFld.textColor = color.black; oFld.lineWidth = 1;

  // Thin Border

  oFld.setAction("MouseUp", "this.pageNum++");

  // Navigation

  }

  return oFld;

 

 

  app.endPriv();

});


