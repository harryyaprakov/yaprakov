$(function(){

	var height = $(window).height();
	var fillh = height - 100;
	$(" .showcase ").height(fillh);
	$(" .showcase img ").height(fillh);

	$(" [data-dropdown-trigger] ").on("click", function() {
		var dropdown = $( this ).siblings(' .dropdown ');

		if( dropdown.hasClass('active') ) {
			$(' .dropdown ').removeClass('active');
			$( this ).removeClass('active');
			$(this).children(' .icon ').removeClass(' fa-caret-up ').addClass(' fa-caret-down ');
		} else {
			$(' .dropdown ').removeClass('active');
			$(" [data-dropdown-trigger] ").removeClass('active');
			$(" .listing [data-dropdown-trigger] ").children(' .icon ').removeClass(' fa-caret-up ').addClass(' fa-caret-down ');
			dropdown.addClass('active');
			$( this ).addClass('active');
			$(this).children(' .icon ').removeClass(' fa-caret-down ').addClass(' fa-caret-up ');
		}

	});

	$(" header ").sticky({ topSpacing: 0, className: 'stuck' });

	var swiper = new Swiper('.swiper-container', {
        slidesPerView: '3',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 100
    });

	function initMap() {
	  var myLatLng = {lat: -25.363, lng: 131.044};

	  // Create a map object and specify the DOM element for display.
	  var map = new google.maps.Map(document.getElementById('map'), {
	    center: myLatLng,
	    scrollwheel: false,
	    zoom: 4
	  });

	  // Create a marker and set its position.
	  var marker = new google.maps.Marker({
	    map: map,
	    position: myLatLng,
	    title: 'Hello World!'
	  });
	}

});