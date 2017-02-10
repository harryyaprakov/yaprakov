$(function(){

	for (var i = 1; i <= $('.couple .person').length; i++) {
		var couple = $('.couple:nth-child(' + i + ')');
		var person = $('.couple:nth-child(' + i + ') .person');
		var front = $('.couple:nth-child(' + i + ') .person.front');
		var back = $('.couple:nth-child(' + i + ') .person.back');

		if(person.html() == "") person.addClass("empty");
		if(back.html() == "") back.addClass("empty");
		if(front.empty && !front.hasClass("male") && !front.hasClass("female")) front.addClass("male");

		if(front.hasClass("male")) back.removeClass("male").addClass("female");
		if(front.hasClass("female")) back.removeClass("female").addClass("male");

		if(person.hasClass("male") && person.hasClass("empty")) $('.couple:nth-child(' + i + ') .person.empty.male').append('<img src="images/people/man.jpg" />');
		if(person.hasClass("female") && person.hasClass("empty")) $('.couple:nth-child(' + i + ') .person.empty.female').append('<img src="images/people/woman.jpg" />');

		if(!front.hasClass("empty") && back.hasClass("empty")) front.addClass("can-marry");
		if(front.hasClass("can-marry")) front.append('<div class="tree-btn marry-btn"></div>');
		if(front.hasClass("governer")) front.append('<div class="rank gov"><div class="rank-icon"></div></div>');
		if(back.hasClass("governer")) back.append('<div class="rank gov"><div class="rank-icon"></div></div>');
		if(front.hasClass("general")) front.append('<div class="rank gen"><div class="rank-icon"></div></div>');
		if(back.hasClass("general")) back.append('<div class="rank gen"><div class="rank-icon"></div></div>');
		if(front.hasClass("both")) front.append('<div class="rank both"><div class="rank-icon"></div></div>');
		if(back.hasClass("both")) back.append('<div class="rank both"><div class="rank-icon"></div></div>');


	};

	for (var i = 1; i <= $('.not-family .person').length; i++) {
		var personPendingCourt = $('.pending.to-court .person:nth-child(' + i + ')');
		var personInCourt = $('.court .person:nth-child(' + i + ')');
		var personPendingMarriage = $('.pending.marriage .person:nth-child(' + i + ')');

		if(personPendingCourt.html() == "") personPendingCourt.addClass("empty").addClass("male").append('<img src="images/people/man.jpg" />');
		if(personInCourt.html() == "") personInCourt.addClass("empty").addClass("male").append('<img src="images/people/man.jpg" />');
		if(personPendingMarriage.html() == "") personPendingMarriage.addClass("empty").addClass("male").append('<img src="images/people/man.jpg" />');

		if(!personPendingCourt.hasClass("empty")) personPendingCourt.append('<div class="tree-btn add-to-court-btn"></div>');
		if(!personInCourt.hasClass("empty")) personInCourt.addClass("can-marry").append('<div class="tree-btn marry-btn"></div>');


	};

	$(" .add-to-court-btn ").live("click", function() {
		var person = $(this).parent();
		var gender = "";
		var personClass = person.attr('class');
		if(personClass.indexOf('male') >= 0) gender = "male";
		if(personClass.indexOf('female') >= 0) gender = "female";

		for(var i = 1; i <= $('.court .person').length; i++) {
			var personInCourt = $('.court .person:nth-child(' + i + ')');
			if(personInCourt.hasClass("empty")) {
				$(this).remove();
				personInCourt.empty().removeClass("male").removeClass("empty").addClass(gender).addClass("can-marry").append(person.children()).append('<div class="tree-btn marry-btn"></div>');;

				person.addClass("empty").addClass("male").append('<img src="images/people/man.jpg" />');
				
				break;
			}
		};
	});
	$(" .not-family .marry-btn ").live("click", function(eventt) {
		$(this).removeClass("marry-btn").addClass("cancel-btn");

		var b = false;
		var thisPerson = $(this).parent();
		var gender = "";
		var personClass = thisPerson.attr('class');
		if(personClass.indexOf('male') >= 0) gender = "male";
		if(personClass.indexOf('female') >= 0) gender = "female";

		for (var i = 1; i <= $('.couple .person').length; i++) {
			var couple = $('.couple:nth-child(' + i + ')');
			var person = $('.couple:nth-child(' + i + ') .person');
			var front = $('.couple:nth-child(' + i + ') .person.front');
			var back = $('.couple:nth-child(' + i + ') .person.back');
			var frontGender = "";
			var frontClass = person.attr('class');
			if(frontClass.indexOf('male') >= 0) frontGender = "male";
			if(frontClass.indexOf('female') >= 0) frontGender = "female";
			if(b == true) thisPerson.css("background", "red");
			if(!front.hasClass("empty") || !back.hasClass("empty")) {
				if(front.hasClass("can-marry")) {
					if(gender != frontGender) {
						front.css("box-shadow", "0px 0px 10px 5px rgba(255, 255, 255, 0.75)");
						$( front.find(".marry-btn") ).live("click", function() {
							b = true;
							$(this).parent().next().empty().removeClass("empty").append(thisPerson.children());
							thisPerson.addClass("empty").addClass("male").append('<img src="images/people/man.jpg" />');
							$(this).remove();
							$(".cancel-btn").remove();
							//person.removeAttr('style');
							
						});
						break;
					}
					else person.css("opacity", 0.5);
				}
				else person.css("opacity", 0.5);
			}
			
		};
		$("marry-btn").die();
	});






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

	$(" #fam-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#fam-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #gov-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#gov-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #gen-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#gen-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #mar-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#mar-tab").fadeIn(500);
		$(this).addClass("active");
	});
	$(" #arch-tab-tr ").live("click", function() {
		$(".tab").hide();
		$(".tabs li a").removeClass("active");
		$("#arch-tab").fadeIn(500);
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