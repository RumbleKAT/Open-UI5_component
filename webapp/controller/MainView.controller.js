sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
  "use strict";

  return Controller.extend("com.myorg.myUI5App.controller.MainView", {
    onInit : function(oEvent){
      var oData = {
        receipent : {
          name : "world"
        }
      };
      this.getView().setModel(new JSONModel(oData));
      let temp = this.getView().getModel();
      console.log(temp.oData);
      let oBindingInputTag = this.byId("bindingInputTag")  
      console.log(oBindingInputTag);
      oBindingInputTag.bindProperty("name",{
        path :  "/receipent/name"
      });
      let oInput = this.byId("target2");//id로 dom 접근 후
      oInput.bindValue("/receipent/name"); //odata를 넣어줌
 
    },
    onSayHello : function(e){
      
      MessageToast.show("Hello world!");
    }
  });
});
