$(document).ready(function() {
	$("#box").hide();
	$("#sec2").hide();
	$("#sec3").hide();

	$('#opt_1').click(function() {
		$("#sec1").show("fast");
		$("#sec2").hide();
		$("#sec3").hide();

	});

	$('#opt_2').click(function() {
		$("#sec1").hide();
		$("#sec2").show("fast");
		$("#sec3").hide();

	});

	$('#opt_3').click(function() {
		$("#sec1").hide();
		$("#sec2").hide();
		$("#sec3").show("fast");

	});

});