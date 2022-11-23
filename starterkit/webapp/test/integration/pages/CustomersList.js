sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";
    var sViewName = "CustomersList";
    Opa5.createPageObjects({
        onTheCustomersList: {

            actions: {
                iPressCreate: function() {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        matchers: new sap.ui.test.matchers.I18NText({
                            key: "AddNewCustomer",
                            modelName: "i18n",
                            propertyName: "text"
                        }),
                        viewName: sViewName,
                        actions: new Press(),
                        success: function (aButton) {
                            Opa5.assert.ok(true, "The corousel is displayed");
                            var oButton = aButton[0];
                            oButton.firePress();
                        },
                        errorMessage: "Did not find the button"
                    });
                }
            },

            assertions: {

                iShouldSeeTheCarousel: function () {
                    return this.waitFor({
                        id:"carousel1",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The corousel is displayed");
                        
                        },
                        errorMessage: "Did not find the carousel"
                    });
                },
                iShouldSeeTheTable: function () {
                    return this.waitFor({
                        controlType: "sap.m.Table",
                        viewName: sViewName,
                        success: function (oTable) {
                            Opa5.assert.ok(true, "The table is displayed");
                            var iItemsCount = oTable[0].getItems().length;
                            Opa5.assert.notStrictEqual(iItemsCount, 0, "Table has items: " + iItemsCount);
                        },
                        errorMessage: "Did not find the table"
                    });
                },

                iShouldSeeTheCreateButton: function () {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        matchers: new sap.ui.test.matchers.I18NText({
                            key: "AddNewCustomer",
                            modelName: "i18n",
                            propertyName: "text"
                        }),
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The create button is displayed");
                           
                        },
                        errorMessage: "Did not find the button"
                    })
                },

                iShouldSeeThePage: function () {
					return this.waitFor({
                        id:"inputTextLabel1",
                        viewName: sViewName,
                        searchOpenDialogs: true,
                    
						//id: "CreateCustomer",
						//fragmentName: "CreateCustomer",
						success: function () {
							Opa5.assert.ok(true, "The CreateCustomer fragment is displayed");
						},
						errorMessage: "Did not find the CreateCustomer fragment"
					});
				}
            }
        }
    })
})