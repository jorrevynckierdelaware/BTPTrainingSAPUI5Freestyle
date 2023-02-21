sap.ui.define([
    "be/delaware/ztrainingbtp/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("be.delaware.ztrainingbtp.controller.Detail", {
            onInit: function () {

            },

            onAfterRendering: function () {
                // debugger
                // this.getModel().read("/Customers", {
                //     success: function (oData) {
                //         let oTableModel = that.getView().byId("idCustomersTable").getModel("Northwind");
                //         oTableModel.setProperty("/Customers", oData.results);
                //     }, 
                //      error: function (oError) {
                //         that.getModel("viewModel").setProperty("/busy", false);
                //     }
                // });
            }
        });
    });
