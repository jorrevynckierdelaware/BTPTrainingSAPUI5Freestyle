sap.ui.define([], function () {
	"use strict";
	return {
		formatNull: function (sValue) {
			if (sValue === null) {
                return "N/A";
            } else {
                return sValue;
            }
		}
	};
});