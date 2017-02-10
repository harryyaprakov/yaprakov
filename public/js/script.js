$(function(){

	var pathname = window.location.pathname;

	var md = window.matchMedia( "(max-width: 1490px) and (min-width: 1201px)" );
	var sm = window.matchMedia( "(max-width: 1200px) and (min-width: 769px)" );
	var xs = window.matchMedia( "(max-width: 768px)" );

	if(pathname != '/') {
		$(" #particles-js ").hide();
		$(" h1 ").hide();
		$(" header a.harry ").css({ 'margin-left': "0", opacity: 1 });
		$(".left-panel .left-menu li ").css({ 'margin-left': "0", opacity: 1 });
		$(" .wrapper ").css({'position': 'static'});
	} else {
		$(" h1 ").show();
		$(" #particles-js ").show();
		$(" .wrapper ").css({'min-height': 0});
		$(" .content ").css({'min-height': 0});
	    
	    $( $(" h1 span ").get() ).each(function( i ) {
			$(this).delay(i*300).animate({ 
				"margin-top": "0",
				opacity: "1"
			}, 400, "swing");
		});
		$(" h1 .responsiveness ").delay(1300).animate({ 'margin-top': "30px", opacity: 1 }, 500, "swing");
		$(" h1 .hireme ").delay(1800).animate({ 'margin-top': "0", opacity: 1 }, 500, "swing");
		
		if (md.matches) {
			$(" header a.harry ").delay(1200).animate({ 'margin-left': "60px", opacity: 1 }, 1000, "swing");
		    $( $(".left-panel .left-menu li ").delay(1200).get() ).each(function( i ) {
				$(this).delay(i*150).animate({ 
					'margin-left': "60px",
					opacity: "1"
				}, 400, "swing");
			});	
		} else if (sm.matches) {
			$(" header a.harry ").delay(1200).animate({ opacity: 1 }, 1000, "swing");
		    $( $(".left-panel .left-menu li ").delay(1200).get() ).each(function( i ) {
				$(this).delay(i*150).animate({ 
					opacity: "1"
				}, 400, "swing");
			});
		} else if (xs.matches) {
			$(" header a.harry ").css({ margin: 0 });
		} else {
			$(" header a.harry ").delay(1200).animate({ 'margin-left': "120px", opacity: 1 }, 1000, "swing");
		    $( $(".left-panel .left-menu li ").delay(1200).get() ).each(function( i ) {
				$(this).delay(i*150).animate({ 
					'margin-left': "120px",
					opacity: "1"
				}, 400, "swing");
			});
		}
	}

	if ( $(' .left-panel ').hasClass('preview-active') ) {
		( $ ).fadeOut(300);
	}

	$(" [data-link-click] ").on("click", function() {
		
        $(' .left-panel').removeClass('preview-active');
		$(" #particles-js ").animate({ 'top': "-100%"}, 600, "swing");
		$(" h1 ").animate({ 'top': "-100%"}, 1400, "swing");
		$(" .wrapper ").animate({ 'top': "-100%"}, 1000, "swing");
		
		$(" header a.harry ").delay(700).animate({ 'margin-left': "0" }, 200, "swing");
	    $( $(".left-panel .left-menu li ").get().reverse() ).each(function( i ) {
			$(this).delay(i*70).animate({ 
				'margin-left': "0"
			}, 200, "swing");
		});

	});
	$(" [data-home-click] ").on("click", function() {
		
        $(' .left-panel').removeClass('preview-active');
		$(" #particles-js ").show().animate({ 'top': "0"}, 600, "swing");
		$(" h1 ").show().animate({ 'top': "50%"}, 600, "swing");
		$( $(" h1 span ").get() ).each(function( i ) {
			$(this).delay(i*300).animate({ 
				"margin-top": "0",
				opacity: "1"
			}, 400, "swing");
		});
		$(" h1 .responsiveness ").delay(1300).animate({ 'margin-top': "30px", opacity: 1 }, 500, "swing");
		$(" h1 .hireme ").delay(1800).animate({ 'margin-top': "0", opacity: 1 }, 500, "swing");
		$(" .wrapper ").css({ 'position': "relative", 'height': 0 }).animate({ 'top': "0"}, 1000, "swing");

		if (md.matches) {
			$(" header a.harry ").animate({ 'margin-left': "60px" }, 200, "swing");
		    $( $(".left-panel .left-menu li ").delay(200).get() ).each(function( i ) {
				$(this).delay(i*70).animate({ 
					'margin-left': "60px"
				}, 200, "swing");
			});
		} else if (sm.matches) {

		} else if (!xs.matches) {
			$(" header a.harry ").animate({ 'margin-left': "120px" }, 200, "swing");
		    $( $(".left-panel .left-menu li ").delay(200).get() ).each(function( i ) {
				$(this).delay(i*70).animate({ 
					'margin-left': "120px"
				}, 200, "swing");
			});
		}

	});


	$(" [data-menu-trigger] ").on("click", function() {
		$(" .left-menu ").toggleClass("active");
		$( $(".left-panel .left-menu li ").get() ).each(function( i ) {
			$(this).delay(i*150).toggleClass("active");
		});
		$(" .menu-trigger i ").hasClass("fa-bars") ?
			$(" .menu-trigger i ").stop(true, true)
			.animateRotate(180, 500, "easeOutBack")
			.removeClass("fa-bars")
			.addClass("fa-close")
			:
			$(" .menu-trigger i ").stop(true, true)
			.animateRotate(180, 500, "easeOutBack")
			.removeClass("fa-close")
			.addClass("fa-bars");
	});

	$.fn.animateRotate = function(angle, duration, easing, complete) {
	  var args = $.speed(duration, easing, complete);
	  var step = args.step;
	  return this.each(function(i, e) {
	    args.complete = $.proxy(args.complete, e);
	    args.step = function(now) {
	      $.style(e, 'transform', 'rotate(' + now + 'deg)');
	      if (step) return step.apply(e, arguments);
	    };

	    $({deg: 0}).animate({deg: angle}, args);
	  });
	};


});