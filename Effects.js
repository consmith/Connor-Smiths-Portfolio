/*Home Page Sections */

/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function(){
	var NavbarTop = $('nav').offset().top;
	var Nav = function () {
		var WinTop = $(window).scrollTop();
		if (WinTop > NavbarTop) {
			$('nav').addClass('sticky');
			$('#Title').css('opacity',1.2-$(window).scrollTop()/250);
		} else {
			$('nav').removeClass('sticky');
			$('#Title').css('opacity', 1.2-$(window).scrollTop()/250);
		}
	};


	Nav();

	$(window).scroll(function() {
		Nav();
	})
	
});


$('#AboutMePlaceholder').click(function () {
	
	$('html,body').delay(300).animate({scrollTop: $('#AboutMePlaceholder').offset().top },1000) ;
	
  $('#AboutMePlaceholder').fadeOut("slow", function () {
    $('#AboutMe').fadeIn("slow");
      
  });
})

$('#AboutMe').click(function(){
	
	$('html,body').animate({ scrollTop: $('#photo-album').offset().top },1000);
	
  $('#AboutMe').delay(300).fadeOut("slow", function(){
    $('#AboutMePlaceholder').fadeIn("slow");
		
  });
})

$('#ContactPlaceholder').click(function(){
	
  $('#ContactPlaceholder').fadeOut("slow", function(){
    $('#Contact').fadeIn("slow");
		$('html,body').delay(100).animate({ scrollTop: $('#Contact').offset().top },1000);
		
  });
})

/* Allows links to be clicked without fading back out */

hover = false;

$('#ContactLink').hover(function(){
  hover = true;
});
$('#ContactLink').mouseleave(function(){
  hover = false;
});


$('#Contact').click(function(){

  if (hover == false) {
		
		$('html,body').animate({ scrollTop: $('#photo-album').offset().top },1000);
		
    $('#Contact').delay(300).fadeOut("slow", function(){
      $('#ContactPlaceholder').fadeIn("slow");
			
    });
  }
});

/*Resume*/

var Color_Compat = [
	"salmon",
	"-webkit-linear-gradient(whitesmoke,whitesmoke,whitesmoke,salmon)",
	"-o-linear-gradient(whitesmoke,whitesmoke,whitesmoke,salmon)",
	"-moz-linear-gradient(whitesmoke,whitesmoke,whitesmoke,salmon)",
	"linear-gradient(whitesmoke,whitesmoke,whitesmoke,salmon)"
];

$('#PDF_Title').click(function(){
	
	
	$('#PDF_Title').css({"border-bottom":"none","border-top":"solid 1px","filter":"none"});
	
	$('#Interactive_Title').css({"border-bottom":"solid 1px","border-top":"none","filter":"opacity(50%)"});
	$('#Scannable_Title').css({"border-bottom":"solid 1px","border-top":"none","filter":"opacity(50%)"});
	
	$('#Interactive').fadeOut("fast");
	$('#Scannable').fadeOut("fast");
	$('#PDF').delay(200).fadeIn("fast");
});

$('#Interactive_Title').click(function(){
	
	$('#Interactive_Title').css({"border-bottom":"none","border-top":"solid 1px","filter":"none"});
	
	$('#PDF_Title').css({"border-bottom":"solid 1px","border-top":"none","filter":"opacity(50%)"});
	$('#Scannable_Title').css({"border-bottom":"solid 1px","border-top":"none","filter":"opacity(50%)"});
	
	$('#PDF').fadeOut("fast");
	$('#Scannable').fadeOut("fast");
	$('#Interactive').delay(200).fadeIn("fast");
});

$('#Scannable_Title').click(function(){
	
	$('#Scannable_Title').css({"border-bottom":"none","border-top":"solid 1px","filter":"none"});
	
	$('#Interactive_Title').css({"border-bottom":"solid 1px","border-top":"none","filter":"opacity(50%)"});
	$('#PDF_Title').css({"border-bottom":"solid 1px","border-top":"none","filter":"opacity(50%)"});
	
	$('#Interactive').fadeOut("fast");
	$('#PDF').fadeOut("fast");
	$('#Scannable').delay(200).fadeIn("fast");
});

             
/* Interactive Resume */

function HideSubInfo(IDValue,Head) {
	if ($(IDValue).children('div').is(':visible')) {
		$(IDValue).children('div').fadeOut();
		$(Head).css("border-right"," 5px double");
	} else {
		$(IDValue).children('div').fadeIn();
		$(Head).css("border-right","none");
	}
}

$('#EDU').click(function() {
	HideSubInfo('#Education','#EDU')
})

$('#WOR').click(function() {
	HideSubInfo('#Work_Experience','#WOR')
})

$('#COM').click(function() {
	HideSubInfo('#Extra_Commune','#COM')
})

$('#AWA').click(function() {
	HideSubInfo('#Awards','#AWA')
})

$('#Resume_Search').on('keyup',function(){
	var term = $('#Resume_Search').val().toLowerCase();
	$('.Inter li').each(function EqualStrings() {
		if ($(this).text().toLowerCase().indexOf(term) != -1) {
			$(this).show();
			$(this).css('background','#AEA8D3');
		} else {
			$(this).hide();
			$(this).css('background','whitesmoke')
		}
		
	});
	
	$('.Inter h5').each(function(){
		if ($(this).text().toLowerCase().indexOf(term) != -1) {
			$(this).show();
			$(this).css('color','salmon');
		} else {
			$(this).css('color','black');
		}
		
	});
	
	$('.Inter h6').each(function(){
		if ($(this).text().toLowerCase().indexOf(term) != -1) {
			$(this).show();
			$(this).css('background','#AEA8D3');
		} else {
			$(this).css('background','whitesmoke');
			$(this).hide();
		}
		
	});
	
	if (term.length < 1) {
		$('.Inter li').each(function(){
			$(this).css('background','whitesmoke');
		})
		$('.Inter h6').each(function(){
			$(this).css('background','whitesmoke');
		})
		$('.Inter h5').each(function(){
			$(this).css('color','black');
		})
	}
	
	/*if (area.indexOf(term) != -1) {
			area[area.indexOf(term)].css('color','red');
	};*/
	
});
