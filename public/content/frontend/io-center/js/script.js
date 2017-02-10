$(function(){


	$('.cont.big').drags({ handle:".cont-head" });

	$( "#sim-trigger" ).on( "click", function() {
		$(".cont.sim").fadeIn(100);
	});
	$( ".close.big" ).on( "click", function() {
		$(".cont.big").fadeOut(100);
	});
	$( ".gen-cont-tr" ).on( "click", function() {
		$(".cont.gen").fadeIn(100);
	});
	$( ".close.gen" ).on( "click", function() {
		$(".cont.gen").fadeOut(100);
	});

	$(" #depl-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#depl-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #attack-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#attack-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #espionage-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#espionage-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #sim-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#sim-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #aggr-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#aggr-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #capit-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#capit-tab").fadeIn(500);
		$(this).addClass("active");
	});

	if( $(".player-info").hasClass("no-pic") ) {
		$(".player-info.no-pic").prepend('<img src="images/avatar.png" class="avatar" />');
	}

	$(".dr-tr").live("click", function() {
		$(this).siblings(".dropdown").toggleClass("visible");
		$(this).toggleClass("bor-rad");
	});
	$(".big-tr").live("click", function() {
		$(this).toggleClass("bor-rad");
		$(this).find(".dropdown.bigger").toggleClass("visible");
	});
	$(".shit-arrow-right").live("click", function() {
		$(this).siblings(".warriors").find("li:first-child").css("margin-left", parseInt($(".warriors").css("margin-left")) - 45);
	});
	$(".shit-arrow-left").live("click", function() {
		$(this).siblings(".warriors").find("li:first-child").css("margin-left", 0);
	});

	$(".btn.back").live("click", function() {
		$(this).addClass("inactive");
		$(".btn.forth").removeClass("inactive");
	});
	$(".btn.forth").live("click", function() {
		$(this).addClass("inactive");
		$(".btn.back").removeClass("inactive");
	});

	$(".castle-holder").live("mouseover", function() {
		$(".pop-up").fadeIn();
	});
	$(".castle-holder").live("mouseout", function() {
		$(".pop-up").fadeOut();
	});


});