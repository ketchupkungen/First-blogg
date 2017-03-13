// Wait for the DOM to load
$(function(){

	// Bind click event to #menu-toggle
	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    $("#wrapper").toggleClass("toggled");
	});
});