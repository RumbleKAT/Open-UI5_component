sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter , FilterOperator) {
    "use strict";

    return Controller.extend("com.myorg.myUI5App.controller.InvoiceList", {
        formatter : formatter, // 기존 정의한 formatter 모듈을 그대로 사용함

        onInit : function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });

            this.getView().setModel(oViewModel, "view");
        },
        onFilterInvoices : function(oEvent){
            var aFilter = [];
            var query = oEvent.getParameter("query"); //매개변수 query로 전달함 
            if(query){
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, query)); //대소문자를 구분하지 않는다.
            }

            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }


    });
});