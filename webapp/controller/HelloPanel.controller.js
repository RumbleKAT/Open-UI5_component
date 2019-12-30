sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
 ], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("com.myorg.myUI5App.controller.HelloPanel", {
       onShowHello : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
       },
       onOpenDialog : function () {
        var oView = this.getView();

        // create dialog lazily
        if (!this.byId("helloDialog")) {
            // load asynchronous XML fragment
            Fragment.load({
                id: oView.getId(), //고유 아이디를 사용해야함
                name: "com.myorg.myUI5App.view.HelloDialog",
                controller : this //현재 사용하는 controller를 상속 
            }).then(function (oDialog) {
                // connect dialog to the root view of this component (models, lifecycle)
                oView.addDependent(oDialog); //addDependent를 이용해서 다이어로그를 뷰의 사이클 관리에 사용가능 
                oDialog.open();
            });
        } else {
            this.byId("helloDialog").open();}
        },
        onCloseDialog : function(){
            console.log("!!");
            this.byId("helloDialog").close();
        }
    });
 });