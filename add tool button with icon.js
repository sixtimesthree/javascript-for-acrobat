// Create a document
	var myDoc = app.newDoc();
	
	// import icon (20x20 pixels) from the file specified 
	//Note that according to the JavaScript for Acrobat API Reference, the icon size is restricted to 20 by 20 pixels. If an icon of larger dimensions is used, an exception is thrown.

	myDoc.importIcon("myIcon", "/C/myIcon.jpg", 0);
	
	// convert the icon to a stream.
	oIcon = util.iconStreamFromIcon(myDoc.getIcon("myIcon"));
	
	// close the doc now that we have grabbed the icon stream
	myDoc.closeDoc(true);
	
	// add a toolbutton
	app.addToolButton({
		cName: "myToolButton",
		oIcon: oIcon,
		cExec: "app.alert('Someone pressed me!')",
		cTooltext: "Push Me!",
		cEnable: true,
		nPos: 0
	});
	
	app.removeToolButton("myToolButton")
