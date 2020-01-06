sap.ui.define([], function(){
    "use strice"
    return {
        statusText : function(sStatus){
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch(sStatus){
                case "A" : return resourceBundle.getText("caseA");
                case "B" : return resourceBundle.getText("caseB");
                case "C" : return resourceBundle.getText("caseC");
                default : return sStatus;
            }
        }
    }
});