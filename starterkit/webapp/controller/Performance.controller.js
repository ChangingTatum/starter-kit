sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.Performance", {


            onNavBack: function () {
                var oRouter = this.getOwnerComponent().getRouter();
               oRouter.navTo("CustomersList");
            },
            onMotivatePress: function (oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<your_domain_name_goes_here>.com";
                var sSubject = "Good job!";
                var sBody = "You are doing well, thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            },
            onFirePress: function (oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                $.ajax({
                    url:"generate_insult.php",
                    data: {
                        lang: "en",
                        type: "json"
                    },
                    success: function (oResponse) {
                        var sBody = oResponse.insult;
                        var sSubject = "You are the worst!";
                       
                        var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<your_domain_name_goes_here>.com";
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                })
            }


        }
        );
    });