$(function(){
	
	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			$(" [data-close-modal] ").trigger("click");
		}   
	});
	
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

	var tq = window.matchMedia( "(min-width: 769px) and (max-width: 1200px)" );
	var mq = window.matchMedia( "(min-width: 768px)" );
	
	$(" [data-listings-grid] ").on("click", function() {
		if(mq.matches) {
			$(' .listings ').css("opacity", 0).removeClass(' list ').addClass(' grid ').animate({ opacity: 1 }, 150);
			$(' .listings .listing ').addClass(' col-lg-3 col-md-4 col-sm-4');
			$(" [data-listings-list] ").removeClass(' active ');
			$(this).addClass(' active ');	
		} else {
			$(' .listings ').css("opacity", 0).removeClass(' grid-list ').animate({ opacity: 1 }, 150);
			$(" [data-listings-list] ").removeClass(' active ');
			$(this).addClass(' active ');
		}
		
	});
	$(" [data-listings-list] ").on("click", function() {
		if(mq.matches) {
			$(' .listings ').css("opacity", 0).removeClass(' grid ').addClass(' list ').animate({ opacity: 1 }, 150);
			$(' .listings .listing ').removeClass(' col-lg-3 col-md-4 col-sm-4');
			$(" [data-listings-grid] ").removeClass(' active ');
			$(this).addClass(' active ');
		} else {
			$(' .listings ').css("opacity", 0).addClass(' grid-list ').animate({ opacity: 1 }, 150);
			$(" [data-listings-grid] ").removeClass(' active ');
			$(this).addClass(' active ');
		}
	});
	$(" [data-open-modal] ").on("click", function() {
		var modal = $( this ).attr("data-open-modal");
		$(' .modals-holder ').fadeIn(200);
		if(mq.matches) {
			$(' .modal.' + modal ).show().animate({
				top: '40'
			}, 200);					
		} else {
			$(' .modal.' + modal ).show().animate({
				top: '10'
			}, 200);
		}
		
	});
	$(" [data-close-modal] ").on("click", function() {
		$(' .modals-holder ').fadeOut(200);
		$(' .modal' ).animate({
			top: '80'
		}, 200).fadeOut(200);
	});
	$(" [data-disable-img] ").on("click", function() {
		$( this ).parent().parent().toggleClass('photo-inactive');
	});

	$(" [data-toggle-subscription-plan] ").on("click", function() {
		var plan = $( this ).attr("data-toggle-subscription-plan");
		$(' .subscription .plan ').removeClass('active').children(' .active-ribbon ').fadeOut(200);
		$(' .subscription .plan.' + plan).addClass('active').children(' .active-ribbon ').fadeIn(200);
	});

	$(' .copy ').on("click", function() {
		var property = $( this ).parent().siblings(' h2 ').text();
		$(' .message-box.copy p span ').html( property );
		$(' .message-box.copy ').fadeIn(100).delay(1000).fadeOut(2000);
	});
	$(' [data-open-upload-field] ').on("click", function() {
		$(' .upload-photo-field ').fadeIn(200);
	});
	$(' [data-close-upload-field] ').on("click", function() {
		$(' .upload-photo-field ').fadeOut(100);
	});
	$(' [data-edit-card-info] ').on("click", function() {
		$(' .card-preview ').toggleClass(' hidden ');
		$(' .edit-card-info ').toggleClass(' hidden ');
	});

	$(" .rounded .input-holder input ").on("focusout", function() {
	    if(this.value == "") {
	    	$(this).parent().parent().parent().siblings('.hint-info').removeClass('success').addClass('danger').text('You can‘t leave an empty field!');
	    } else {
	    	var input = $(this).siblings('label').text();
	    	input = input.substring(0, input.length - 1);
	    	$(this).parent().parent().parent().siblings('.hint-info').removeClass('danger').addClass('success').text(input + ' changed successfully!');
	    }
	});



	$(' .listing-photos ').sortable({
      items: "li:not(.photo-cover)"
    });
    $(' .listing-photos ').disableSelection();


    $(' .right-side .listing-image ').on("click", function() {
    	var image = $(this).children('img').attr('src');
    	$(' .listing-preview-image ').attr('src', image);
    	$(' .right-side .listing-image ').removeClass('active');
    	$( this ).addClass('active');
    });
	



});