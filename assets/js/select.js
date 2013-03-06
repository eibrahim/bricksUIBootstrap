$(function() {
	$("#country_id").selectbox({
		onOpen: function (inst) {
			//console.log("open", inst);
		},
		onClose: function (inst) {
			//console.log("close", inst);
		},
		onChange: function (val, inst) {
			$.ajax({
				type: "GET",
				data: {country_id: val},
				url: "ajax.php",
				success: function (data) {
					$("#boxCity").html(data);
					$("#city_id").selectbox();
					$("#city_id").selectbox();
					$("#city_id").selectbox();
				}
			});
		},
		effect: "slide"
	});
	$(".nova").selectbox({
		effect: "fade"
	});
	$("#vehicle_id").selectbox({
		speed: 400
	});
	$("#btnOpen").click(function (e) {
		$("#language").selectbox('open');
	});
	$("#btnClose").click(function (e) {
		$("#language").selectbox('close');
	});
	$("#btnAttach").click(function (e) {
		$("#language").selectbox('attach');
	});
	$("#btnDetach").click(function (e) {
		$("#language").selectbox('detach');
	});
	$("#btnEnable").click(function (e) {
		$("#language").selectbox('enable');
	});
	$("#btnDisable").click(function (e) {
		$("#language").selectbox('disable');
	});
});
$(document).ajaxStart(function () {
	$("#loading").show();
});
$(document).ajaxStop(function () {
	$("#loading").hide();
});