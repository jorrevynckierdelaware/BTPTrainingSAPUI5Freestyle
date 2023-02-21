sap.ui.define([
    "be/delaware/ztrainingbtp/controller/BaseController",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("be.delaware.ztrainingbtp.controller.Master", {
            onInit: function () {

            },

            onOkEvent: function (oEvent) {
                const sPath = this.byId("idCustomersTable").getSelectedContextPaths()[0];
                const oItem = this.getModel().getProperty(sPath);
                MessageBox.alert("You selected: " + oItem.CustomerID);
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
