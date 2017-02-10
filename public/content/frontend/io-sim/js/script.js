$(function(){


	function allJs(masterParent){

	var k = 1;

	$(masterParent + ".attackers .warriors div").live("click", function() {
		var dali = true;

		if ($(this).hasClass("inactive")) {
			dali = false;
		};

		var className = $(this).attr('class');
		
		$(this).addClass("inactive");
		
		if(dali) {
			$(masterParent + ".attackers .selected").append('<li></li>');
			$(masterParent + ".attackers .selected li:nth-child(" + k + ")").addClass(className).prepend('<div  class="red-cross"></div><div class="warrior" ></div><input type="text" />');

			k++;
		}
	});
	$(masterParent + ".attackers .army-icon.add-all").live("click", function() {
		$(masterParent + ".attackers  .selected").empty();

		$(masterParent + ".attackers .warriors li div").addClass("inactive");

		if(masterParent == "#army ") var warors = ["spearman", "archer", "swordsman", "light-cav", "ram", "sup-wagon", "heavy-spearman", "heavy-archer", "heavy-swordsman", "heavy-cav", "catapult", "ballista", "phalanx", "elite-archer", "guardian", "paladin", "trebuchet"];

		if(masterParent == "#great-people ") var warors = ["Acommander", "Icommander", "Ccommander", "siege", "healer", "scientist", "attackerS", "defenderS", "Fguardian", "slayer", "fugitive", "pillager", "robber", "guide", "Gtactitian", "tactitian", "civils", "manager"];

		for (var i=1; i <= $(masterParent + ".attackers .warriors li" ).size(); i++) {
			$(masterParent + ".attackers  .selected").append('<li></li>');

			if(masterParent == "#army ") $(masterParent + ".attackers .selected li:nth-child(" + i + ")" ).addClass(warors[i-1]).prepend('<div  class="red-cross"></div><div class="warrior" ></div><input type="text" />');

			if(masterParent == "#great-people ") $(masterParent + ".attackers .selected li:nth-child(" + i + ")" ).addClass(warors[i-1]).prepend('<div  class="red-cross"></div><div class="warrior" ></div><div class="dr-tr small">1<div class="pop-up">Level 3 - 10% bonus to wood production</div></div><ul class="dropdown small"><li>1</li><li>2</li><li>3</li></ul><div class="gear"><div class="pop-up-big"><div class="pop-title">Bonus from Talant</div><div class="clearfix"><input type="radio" name="'+warors[i-1]+'1" /><label for="'+warors[i-1]+'1">No talant</label></div><div class="clearfix"><input type="radio" name="'+warors[i-1]+'2" /><label for="'+warors[i-1]+'2">10% bonus to wood production</label></div><div class="clearfix"><input type="radio" name="'+warors[i-1]+'3" /><label for="'+warors[i-1]+'3">20% bonus to wood production</label></div><div class="clearfix"><input type="radio" name="'+warors[i-1]+'4" /><label for="'+warors[i-1]+'4">30% bonus to wood production</label></div></div></div>');
		}

		if(masterParent == "#army ") k = 18;
		if(masterParent == "#great-people ") k = 19;

	});
	$(masterParent + ".attackers .army-icon.remove-all").live("click", function() {
		$(masterParent + ".attackers .warriors li div").removeClass("inactive");
		
		$(masterParent + ".attackers .selected").empty();

		k = 1;
	});
	$(masterParent + ".attackers .red-cross").live("click", function() {

		var thisClass = $(this).parent().attr('class');
		$(masterParent + ".attackers .warriors ." + thisClass).removeClass("inactive");

		$(this).parent().remove();
		
		k--;
		
	});

	var p = 1;

	$(masterParent + ".defenders .warriors div").live("click", function() {
		var dali = true;

		if ($(this).hasClass("inactive")) {
			dali = false;
		};

		var className = $(this).attr('class');
		
		$(this).addClass("inactive");
		
		if(dali) {
			$(masterParent + ".defenders .selected").append('<li></li>');
			
			if(masterParent == "#army ") $(masterParent + ".defenders .selected li:nth-child(" + p + ")").addClass(className).prepend('<div  class="red-cross"></div><div class="warrior" ></div><div  class="fort-arrow expand"></div><input type="text" />');

			if(masterParent == "#great-people ") $(masterParent + ".defenders .selected li:nth-child(" + p + ")").addClass(className).prepend('<div  class="red-cross"></div><div class="warrior" ></div><input type="text" />');

			p++;
		}
	});
	$(masterParent + ".defenders .army-icon.add-all").live("click", function() {
		$(masterParent + ".defenders .selected").empty();				

		$(masterParent + ".defenders .warriors li div").addClass("inactive");

		var j = 0;
		
		if(masterParent == "#army ") var warors = ["spearman", "archer", "swordsman", "light-cav", "ram", "sup-wagon", "heavy-spearman", "heavy-archer", "heavy-swordsman", "heavy-cav", "catapult", "ballista", "phalanx", "elite-archer", "guardian", "paladin", "trebuchet"];

		if(masterParent == "#great-people ") var warors = ["Acommander", "Icommander", "Ccommander", "siege", "healer", "scientist", "attackerS", "defenderS", "Fguardian", "slayer", "fugitive", "pillager", "robber", "guide", "Gtactitian", "tactitian", "civils", "manager"];

		if(masterParent == "#army ")
			for (var i=1; i <= 2*$(masterParent + ".defenders .warriors li" ).size(); i+=2) {
				$(masterParent + ".defenders .selected").append('<li></li>');

				$(masterParent + ".defenders .selected li:nth-child(" + i + ")" ).addClass("fort-left").addClass(warors[j]).prepend('<div  class="red-cross"></div><div class="warrior" ></div><div  class="fort-arrow shrink"></div><input type="text" />');
			
				$('<li class="fort-right"><div class="warrior" ></div></div><input type="text" /></li>').insertAfter($(masterParent + ".defenders .selected li:nth-child(" + i + ")"));

			
			j++;
			
		}

		if(masterParent == "#great-people ") 
			for (var i=1; i <= $(masterParent + ".defenders .warriors li" ).size(); i++) {
				$(masterParent + ".defenders .selected").append('<li></li>');
				
				$(masterParent + ".defenders .selected li:nth-child(" + i + ")" ).addClass(warors[i-1]).prepend('<div  class="red-cross"></div><div class="warrior" ></div><div class="dr-tr small">1<div class="pop-up">Level 3 - 10% bonus to wood production</div></div><ul class="dropdown small"><li>1</li><li>2</li><li>3</li></ul><div class="gear"><div class="pop-up-big"><div class="pop-title">Bonus from Talant</div><div class="clearfix"><input type="radio" name="'+warors[i-1]+'1" /><label for="'+warors[i-1]+'1">No talant</label></div><div class="clearfix"><input type="radio" name="'+warors[i-1]+'2" /><label for="'+warors[i-1]+'2">10% bonus to wood production</label></div><div class="clearfix"><input type="radio" name="'+warors[i-1]+'3" /><label for="'+warors[i-1]+'3">20% bonus to wood production</label></div><div class="clearfix"><input type="radio" name="'+warors[i-1]+'4" /><label for="'+warors[i-1]+'4">30% bonus to wood production</label></div></div></div>');

			j++;
		}

		if(masterParent == "#army ") p = 35;
		if(masterParent == "#great-people ") p = 19;

	});
	$(masterParent + ".defenders .army-icon.remove-all").live("click", function() {
		$(masterParent + ".defenders .warriors li div").removeClass("inactive");
		
		$(masterParent + ".defenders .selected").empty();

		p = 1;
	});
	$(masterParent + ".defenders .red-cross").live("click", function() { 
		if ($(this).parent().hasClass("fort-left")) {
			$(this).parent().next().remove();
			p--;
		}

		$(this).parent().removeClass("fort-left")
		var thisClass = $(this).parent().attr('class');
		$(masterParent + ".defenders .warriors ." + thisClass).removeClass("inactive");
		
		$(this).parent().remove();
		
		p--;
	});
	$(masterParent + ".defenders .fort-arrow.expand").live("click", function() {

		$(this).parent().addClass("fort-left");
		
		$('<li class="fort-right"><div class="warrior"></div></div><input type="text" /></li>').insertAfter($(this).parent());	

		$(this).removeClass("expand").addClass("shrink");

		p++;
	});
	$(masterParent + ".defenders .fort-arrow.shrink").live("click", function() {

		$(this).parent().next().remove();
		$(this).parent().removeClass("fort-left");
		$(this).removeClass("shrink").addClass("expand");

		p--;
	});
	$(masterParent + ".defenders .fort-right").live("mouseover", function() {
		$(this).prev().find(".red-cross").show();
	});
	$(masterParent + ".defenders li").live("mouseover", function() {
		$(this).find(".red-cross").show();
	});
	$(masterParent + ".red-cross").live("mouseover", function() {
		$(this).show();
	});
	$(masterParent + ".defenders .fort-right").live("mouseout", function() {
		$(this).prev().find(".red-cross").hide();
	});
	$(masterParent + ".defenders li").live("mouseout", function() {
		$(this).find(".red-cross").hide();
	});

	$(masterParent + ".attackers .army-icon.clear-all").live("click", function() {
		$(masterParent + ".attackers .selected li input").val('');
	});
	$(masterParent + ".defenders .army-icon.clear-all").live("click", function() {
		$(masterParent + ".defenders .selected li input").val('');
	});

	$(masterParent + ".btn.switch").live("click", function() {

		$("#army .section:first-child").insertAfter($("#army .btn.switch").parent());
		$("#army .section:last-child").insertBefore($("#army .btn.switch").parent());
		$("#army .section:first-child .armies").removeClass("defenders").addClass("attackers");
		$("#army .section:last-child .armies").removeClass("attackers").addClass("defenders");

		$("#params .section:first-child").insertAfter($("#params .btn.switch").parent());
		$("#params .section:last-child").insertBefore($("#params .btn.switch").parent());
		$("#params .section:first-child .armies").removeClass("defenders").addClass("attackers");
		$("#params .section:last-child .armies").removeClass("attackers").addClass("defenders");

		$("#great-people .section:first-child").insertAfter($("#great-people .btn.switch").parent());
		$("#great-people .section:last-child").insertBefore($("#great-people .btn.switch").parent());
		$("#great-people .section:first-child .armies").removeClass("defenders").addClass("attackers");
		$("#great-people .section:last-child .armies").removeClass("attackers").addClass("defenders");
		
		$(".posit").empty();
		$(".attackers").parent().find(".posit").text("attacker");
		$(".defenders").parent().find(".posit").text("defender");

		var brrr = 0;

		for (var i=1; i <= $(masterParent + ".attackers .warriors li" ).size(); i++) {
			if($(masterParent + ".attackers .selected li:nth-child(" + i + ")").hasClass("fort-right")) {
	    		brrr++;
	    	}
		}

		if(masterParent == "#army ") {
			$(masterParent + ".attackers").find(".fort-right").remove(); 
			$(masterParent + ".attackers").find(".fort-arrow").remove();

			$(masterParent + ".attackers .selected li").removeClass("fort-left");

			$(masterParent + ".defenders .selected .spearman").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .archer").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .swordsman").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .light-cav").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .ram").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .sup-wagon").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .heavy-spearman").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .heavy-archer").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .heavy-swordsman").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .heavy-cav ").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .catapult").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .ballista").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .phalanx").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .elite-archer").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .guardian").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .paladin").prepend('<div  class="fort-arrow expand"></div>');
			$(masterParent + ".defenders .selected .paladin").prepend('<div  class="fort-arrow expand"></div>');
		}

		p = p - brrr;

		var a = k;
		var b = p;
		p = a;
		k = b;

	});

	}

	$('.cont.sim').drags({ handle:".cont-head" });

	$( "#sim-trigger" ).on( "click", function() {
		$(".cont.sim").fadeIn(100);
	});
	$( ".close.sim" ).on( "click", function() {
		$(".cont.sim").fadeOut(100);
	});
	$( ".gen-cont-tr" ).on( "click", function() {
		$(".cont.gen").fadeIn(100);
	});
	$( ".close.gen" ).on( "click", function() {
		$(".cont.gen").fadeOut(100);
	});

	$(" .tab-tr.army ").live("click", function() {
		$(".tab").hide();
		$(".tab-tr").removeClass("active");
		$("#army").fadeIn(500);
		$(this).addClass("active");
	});
	$(" .tab-tr.gr-ppl ").live("click", function() {
		$(".tab").hide();
		$(".tab-tr").removeClass("active");
		$("#great-people").fadeIn(500);
		$(this).addClass("active");
	});
	$(" .tab-tr.params ").live("click", function() {
		$(".tab").hide();
		$(".tab-tr").removeClass("active");
		$("#params").fadeIn(500);
		$(this).addClass("active");
	});

	if( $(".player-info").hasClass("no-pic") ) {
		$(".player-info.no-pic").prepend('<img src="images/avatar.png" class="avatar" />');
	}

	$(".dr-tr").live("click", function() {
		if($(this).hasClass("big-tr")) $(".dropdown").not($(this).find(".dropdown")).removeClass("visible");
			else $(".dropdown").not($(this).siblings(".dropdown")).removeClass("visible");
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


	allJs("#army ");
	allJs("#params ");
	allJs("#great-people ");

	$(".gear").live("click", function() {
		$(this).find(".pop-up-big").toggleClass("visible");
	});

});