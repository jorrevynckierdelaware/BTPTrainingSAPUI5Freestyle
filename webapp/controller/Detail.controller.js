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
                this.getRouter().getRoute("Detail").attachPatternMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function (oEvent) {
                const sCustomerID = oEvent.getParameter("arguments").CustomerID;
                this.getModel("CustomModel").setProperty("/CustomerID", sCustomerID);
                this.byId("OrdersList").rebindList();
            },

            _beforeRebindList: function (oEvent) {
                const sCustomerID = this.getModel("CustomModel").getProperty("/CustomerID");
                const oBinding = oEvent.getParameter("bindingParams");
                const oFilter = [new sap.ui.model.Filter("CustomerID", sap.ui.model.FilterOperator.EQ, sCustomerID)];
                oBinding.filters = oFilter;
            }
        });
    });
