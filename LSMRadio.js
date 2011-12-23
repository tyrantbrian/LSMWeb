$(document).ready(function() {
	$("#box").hide();
	$("#sec2").hide();
	$("#sec3").hide();

	$('#opt_1').click(function() {
		// $("#box").dialog({
		// resizable : false,
		// show : {
		// effect : 'drop',
		// speed : 1000,
		// direction : 'up'
		// },
		// width : 600,
		//
		// buttons : {
		//
		// "Ok" : function() {
		//
		// $(this).dialog("close");
		//
		// },
		//
		// "Cancel" : function() {
		//
		// $(this).dialog("close");
		//
		// }
		//
		// }
		// });

		$("#sec1").show("slow");
		$("#sec2").hide();
		$("#sec3").hide();

	});

	$('#opt_2').click(function() {
		$("#sec1").hide();
		$("#sec2").show("slow");
		$("#sec3").hide();

	});

	$('#opt_3').click(function() {
		$("#sec1").hide();
		$("#sec2").hide();
		$("#sec3").show("slow");

	});

});