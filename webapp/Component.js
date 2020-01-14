sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
], function(UIComponent, Device, JSONModel, ResourceModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("com.myorg.myUI5App.Component", {

		// metadata: {
		// 	rootView : {
		// 		"viewName": "com.myorg.myUI5App.view.MainView",
		// 		"type" : "XML",
		// 		"async" : true,
		// 		"id" : "app"
		// 	}//component 단위로 개발 root view가 있고 다른 view를 불러오는 구조로 되어 있음 
		// },
		metadata : {
			manifest: "json"//manifest에서 연결 정보를 가져옴 
		},


		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			var oData = {
				receipent  : {
					name : "world"
				}
			};

			var oModel = new JSONModel(oData);
			this.setModel(oModel,"oDatas");

			var i18nModel = new ResourceModel({
				bundleName : "com.myorg.myUI5App.i18n.i18n"
			});

			this.setModel(i18nModel,"i18n");

			this._helloDialog = new HelloDialog(this.getRootControl());

			this.getRouter().initialize(); //root view를 기준으로 target을 찾음

			// 새로운 페이지 생성 방법
			// 타겟에 view Name view Id view path 정보 입력
			
			// manifest에 루트 view id 가 제대로 설정되어 있는지 확인한다. 제대로 설정이 안되어 있으면 getRouter() 메서드가 제기능을 하지 못함
			// Cannot read property 'setHash' of undefined
		
		},
		exit : function(){ 
			//컴포넌트 단으로 메서드 생성부분
			this._helloDialog.destory();
			delete this._helloDialog;
		},
		openHelloDialog : function(){
			this._helloDialog.open(); //helper object
		}
	});
});
