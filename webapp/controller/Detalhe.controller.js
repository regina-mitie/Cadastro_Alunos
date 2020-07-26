sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ovly.fiori_26.cadastro_de_alunos.controller.Detalhe", {

		// onInit: function () {

		// 	var oRouter = this.getOwnerComponent().getRouter();
		// 	var oRotaExibir = oRouter.getRoute("exibir");
		// 	oRotaExibir.attachPatternMatched(this.onPBO, this);
		// },

		// onPBO: function (oEvent) {
		// 	// debugger;
		// 	var oArguments = oEvent.getParameters().arguments;
		// 	var oDataModel = this.getView().getModel();
		// 	var sPath = oDataModel.createKey("Students", {
		// 		Id: oArguments.codigo
		// 	});
		// 	this.getView().bindElement("/" + sPath);
		// },

		onInit: function () {

			var oRouter = this.getOwnerComponent().getRouter();
			var oRotaExibir = oRouter.getRoute("exibir");
			oRotaExibir.attachPatternMatched(this.onPatternMatched, this);
		}, //Virgula

		onPatternMatched: function (oEvent) { // DECLARAR PARAMETRO
			// debugger;
			var oArguments = oEvent.getParameters().arguments;
			var oDataModel = this.getView().getModel();
			var sPath = oDataModel.createKey("Students", {
				Id: oArguments.codigo
			});
			this.getView().bindElement("/" + sPath);
		}, //Virgula

		/**
		 *@memberOf ovly.fiori_26.cadastro_de_alunos.controller.Detalhe
		 */

		onBack: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("listagem");
		}, //Virgula

		toUpper: function (s) {
			if (s) {
				return s.toUpperCase();
			}
		}
	});
});