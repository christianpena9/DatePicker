$(document).ready(function() {
	$('#departing').datepicker();
	$('#returning').datepicker();
	$('#main').click(function() {
		var departing = $('#departing').val();
	    var returning = $('#returning').val();
	    if (departing === "" || returning === "") {
            alert("You left the form empty");
	    } else {
            confirm("You will be departing on " + departing + " and returning on " + returning);
	    };
	});
});