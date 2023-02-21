sap.ui.define([
    "be/delaware/ztrainingbtp/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("be.delaware.ztrainingbtp.controller.Master", {
            onInit: function () {

            },

            onItemPress: function (oEvent) {
                const sPathItem = oEvent.getSource().getBindingContext().getPath();
                const oItemData = this.getModel().getProperty(sPathItem);
                this.getModel("CustomModel").setProperty("/oSelectedItem", oItemData);
                this.getRouter().navTo("Detail", {
				    CustomerID: oItemData.CustomerID
			    });
            }
        });
    });
