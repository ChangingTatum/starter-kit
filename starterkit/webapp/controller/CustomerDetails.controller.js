sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomerDetails", {
            formatter: formatter,

            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
            },
            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                    parameters: {
                        expand: "Orders,Orders/Order_Details,Orders/Employee"
                    }
                });
            },

            onCloseDialog: function () {
                // note: We don't need to chain to the pDialog promise, since this event-handler
                // is only called from within the loaded dialog itself.
                this.byId("contactDialog").close();
            },
            onDetailsPress2: function (oEvent) {
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "stk.starterkit.view.ContactInfoDialog"
                    });
                }

                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                });
            },
            onNavBack: function () {
                var oRouter = this.getOwnerComponent().getRouter();
               oRouter.navTo("CustomersList");
            }


        }
        );
    });