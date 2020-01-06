sap.ui.define([
    "sap/ui/core/ComponentContainer"
],function(ComponentContainer){
    "use strict"
    console.log("UI5 is ready");

    new ComponentContainer({
        name : "com.myorg.myUI5App",
        settings : {
            id : "app"
        },
        async : true
    }).placeAt("content");
});