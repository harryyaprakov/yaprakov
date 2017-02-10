$(function(){

	$(" .menu-trigger  ").on("click", function() {
		$( this ).hasClass("fa-bars") ?
			$(this)
			.removeClass("fa-bars")
			.addClass("fa-close")
			.parent(' .menu-responsive ').addClass(' active ')
			:
			$(this)
			.removeClass("fa-close")
			.addClass("fa-bars")
			.parent(' .menu-responsive ').removeClass(' active ');
		
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