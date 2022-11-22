sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomersList", {
            formatter: Formatter,
            
            onInit: function () {

            },
            onCustomerPress:function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomerDetails",{
                    CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
                });
            },
            onAddPress:function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CreateCustomer");
            },
            onAddPress2:function(oEvent){
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "stk.starterkit.view.CreateCustomer"
                    });
                }
    
                this.pDialog.then(function(oDialog) {
                    oDialog.open();
                });
                },
            onCloseDialog : function () {
                    // note: We don't need to chain to the pDialog promise, since this event-handler
                    // is only called from within the loaded dialog itself.
            this.byId("CreateCustomer").close();
            },
            onAddCustomer : function () {
                // note: We don't need to chain to the pDialog promise, since this event-handler
                // is only called from within the loaded dialog itself.
                var sId = this.byId("inputText1").getValue();
                var sName = this.byId("inputText2").getValue();
                this.getView().getModel().create("/Customers", {
                    CustomerID: sId,
                    CompanyName: sName
                });
        },
        onPerformancePress:function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Performance");
        },
        });
    });