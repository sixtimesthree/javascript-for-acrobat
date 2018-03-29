var mySaveAs = app.trustedFunction(
   function(oDoc,cPath,cFlName)
   {
      app.beginPriv();
      // Ensure path has trailing "/"
      cPath = cPath.replace(/([^/])$/, "$1/");
      try{
         oDoc.saveAs(cPath + cFlName);
      }catch(e){
         app.alert("Error During Save");
      }
       app.endPriv();
   }
);
