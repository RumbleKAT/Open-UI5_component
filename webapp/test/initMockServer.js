sap.ui.define([
    "../localService/mockserver"
],function(mockserver){
    "use strict";

    mockserver.init(); // initalize mock server
    console.log("running mock server");

    //initialize the embedded component on the HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]); 
});