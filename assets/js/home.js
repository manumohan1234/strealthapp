$(function(){
	if(sessionStorage.userDetails != undefined) {
		var userObj = JSON.parse(sessionStorage.userDetails);
		var date = new Date();
        var dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear().toString();
    	console.info(dateString);
        dateString="17-7-2016";
    	console.info(dateString);
		var HOME_PATH = config.HOST+config.PORT+config.HOME_SERVICE+"?vehId=22&tDate="+dateString;
		var urlData = {"url":HOME_PATH}
		callGetAPI(urlData,triggerHomeAPI,apifailure);
	}

	var triggerHomeAPI = function(data) {
		debugger;
		console.log(data);
		if(data.length() > 0) {
			refreshData(data[0]);
		}
	};

	var apifailure = function(data) {
		alert(data);
	};

	var setBatteryPercentage = function(data) {
		var bPerValue = (data.bat_per != NULL)?data.bat_per:0;
		$("#bPerValue").html(bPerValue+"%");
	};

	var refreshData = function(data) {
		setSystemStatus(data);

		var HOME_PATH = config.HOST+config.PORT+config.HOME_SERVICE+"?vehId=22&tDate="+dateString;
		var urlData = {"url":HOME_PATH}
		callAPI(urlData,setBatteryPercentage,apifailure);
	};

	var setSystemStatus = function(data) {
		if(data.PICState >= 6) {
			$("#radioCh").prop('checked', false);
			$("#radioSPow").prop('checked', true);
			$("#radioDis").prop('checked', true);
		} else if(data.BatteryState == "Charging") {
			$("#radioCh").prop('checked', true);
			$("#radioSPow").prop('checked', false);
			$("#radioDis").prop('checked', false);
		} else {
			$("#radioCh").prop('checked', false);
			$("#radioSPow").prop('checked', true);
			$("#radioDis").prop('checked', false);
		}
	};

});