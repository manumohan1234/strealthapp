
var callGetAPI = function(data, callBackSuccess, callBackFailure) {
	$.ajax({
	    type: "GET",
	    dataType:'json',
		async:true,
	    url: data.url,
    	crossDomain: true,
	    success: callBackSuccess,
	    error: function (xhr, ajaxOptions, thrownError) {
	      console.info(xhr.status);
	      console.info(thrownError);
	      callBackFailure(thrownError);
	    }
	});
}