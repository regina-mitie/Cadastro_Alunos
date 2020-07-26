sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.fiori_26.cadastro_de_alunos.controller.Lista", {

		onSearch: function (oControlEvent) {
			var oSearchField = oControlEvent.getSource();
			var sValue = oSearchField.getValue();
			sap.m.MessageToast.show(sValue);
			// console.log(sValue);

		}, // <----- VIRGULA

		// onInit: function () {
		onAdd: function () {
			sap.m.MessageToast.show("Apertou");
		}, // <----- VIRGULA

		onItemPress: function (oEvent) {
			var oItem = oEvent.getParameters().listItem;
			var oContext = oItem.getBindingContext();
			var oAluno = oContext.getObject();
			var sId = oAluno.Id;
			this.getOwnerComponent().getRouter().navTo("exibir", {
				codigo: sId
			});
		}

	});
});