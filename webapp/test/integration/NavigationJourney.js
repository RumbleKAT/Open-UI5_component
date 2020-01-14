sap.ui.define([
    "com/myorg/myUI5App/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/App"
],function(mockServer){
    "use strict"

    Qunit.module("Navigation");

    opaTest("Should open the Hello dialog", function(Given,When,Then){
        mockServer.init();
        
        Given.iStartMyUIComponent({
            componentConfig: {
                name : 'com.myorg.myUI5App'
            }
        });

        When.onTheAppPage.iPressTheSayHelloWithDialogButton();

        Then.onTheAppPage.iShouldSeeTheHelloDialog();

        Then.iTeardownMyApp();
    });
})