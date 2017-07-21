window.addEventListener('load', function() {
    	setInterval(function(){ location.reload(true); }, 5000);

	/*if (typeof jQuery != 'undefined') {
		alert("jQuery library is loaded!");
	}else{
    		alert("jQuery library is not found!");
	}*/

    function updateFields() {
	$.get("/nathan/thedata.html", function( my_data ) {
    		// my_var contains whatever that request returned
	
	var dataArray = my_data.split('~');
	var graphicArray = [	"images/car.gif",
				"images/compass.gif",
				"images/diamond.gif",
				"images/fire.gif",
				"images/grill.gif",
				"images/rocket.gif",
				"images/search.gif",
				"images/sun.gif",
				"images/tent.gif",
				"images/wood.gif",
				"https://secure.static.tumblr.com/90bf86aecf3ee3715081a9acdc93cfdf/pzvlegv/8hlnmmqis/tumblr_static_tumblr_static_84w0phzhh3k8kws4kwwokskwg_640.gif"];	
	
	

	var newFlav = dataArray[0];
	var newLoca = dataArray[1];
	var newGrap = graphicArray[(dataArray[2])];
	var newNote = dataArray[3];

        var theFlav = document.getElementById("repFlavour");
        var flavText = theFlav.innerHTML;
    	// Replace words
    	flavText = flavText.replace("...", newFlav);
    	theFlav.innerHTML = flavText;

	var theLoca = document.getElementById("repLocation");
        var locaText = theLoca.innerHTML;
    	// Replace words
    	locaText = locaText.replace("...", newLoca);
    	theLoca.innerHTML = locaText;

	//var theGrap = document.getElementById("repGraphic");
        //var grapText = theGrap.innerHTML;
    	// Replace words
    	document.getElementById("repGraphic").src=newGrap;
    	//theGrap.innerHTML = grapText;

	var theNote = document.getElementById("repNotes");
        var noteText = theNote.innerHTML;
    	// Replace words
    	noteText = noteText.replace("...", newNote);
    	theNote.innerHTML = noteText;

});

    }

    updateFields();

}, false);