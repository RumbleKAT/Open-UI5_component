sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, Device, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("com.myorg.myUI5App.Component", {

		metadata: {
			rootView : {
				"viewName": "com.myorg.myUI5App.view.MainView",
				"type" : "XML",
				"async" : true,
				"id" : "app"
			}//component 단위로 개발 root view가 있고 다른 view를 불러오는 구조로 되어 있음 
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
			this.setModel(oModel);

			var i18nModel = new ResourceModel({
				bundleName : "com.myorg.myUI5App.i18n.i18n"
			});

			this.setModel(i18nModel,"i18n");
		}
	});
});
