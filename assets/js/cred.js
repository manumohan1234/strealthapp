$(function(){
	if(sessionStorage.userDetails != undefined) {
		var userObj = JSON.parse(sessionStorage.userDetails);
		$("#vehNo").val(userObj.vehNo);
		$("#fKey").val(userObj.fKey);
		$("#fPass").val(userObj.fPass);
	} 
	$("#setUpSubmit").click(function(){
		var userDetails = {'vehNo':$("#vehNo").val(),'fKey':$("#fKey").val(),'fPass':$("#fPass").val()}; 
		sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
		var obj = JSON.parse(sessionStorage.userDetails);
    });
});