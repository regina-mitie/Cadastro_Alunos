function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZT48_26_OVLY_V1_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}