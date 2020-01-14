sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function(Controller, MessageToast) {
  "use strict";

  return Controller.extend("com.myorg.myUI5App.controller.Overview", {
    // onInit : function(oEvent){
    //   var oData = {
    //     receipent : {
    //       name : "world"
    //     }
    //   };
    //   this.getView().setModel(new JSONModel(oData));
    //   let temp = this.getView().getModel();
    //   console.log(temp.oData);
    //   let oBindingInputTag = this.byId("bindingInputTag")  
    //   console.log(oBindingInputTag);
    //   oBindingInputTag.bindProperty("name",{
    //     path :  "/receipent/name"
    //   });
    //   let oInput = this.byId("target2");//id로 dom 접근 후
    //   oInput.bindValue("/receipent/name"); //odata를 넣어줌

    //   var i18nModel  = new ResouceModel({
    //     bundleName : "com.myorg.myUI5App.i18n.18n"
    //   });
    //   this.getView().setModel(i18nModel, " i18n");
      
    // },
    onInit : function(){
      console.log("Overview init");
    },
    onOpenDialog : function () {
      this.getOwnerComponent().openHelloDialog();
    }
  });
});
