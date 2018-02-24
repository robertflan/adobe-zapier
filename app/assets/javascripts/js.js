$( document ).on('turbolinks:load',function() {

	 $('.rotate-icon').click(function(){
    	$(this).toggleClass("rotate");
    });
	 $(" .desktop-menu .nav-item a").on('click', function(e) {

		   // prevent default anchor click behavior
		   e.preventDefault();

		   // store hash
		   var hash = this.hash;
		   console.log("menu clicked")
		   // animate
		   $('html, body').animate({
		       scrollTop: $(hash).offset().top
		     }, 1000, function(){

		       // when done, add hash to url
		       // (default click behaviour)
		       window.location.hash = hash;
		     });
		   return false;

		});
	//LOADER/SPINNER
	$(window).bind("load", function() {

	    "use strict";
	    
	    $(".spn_hol").fadeOut(100);
	});

	$('#navbarSideButton').on('click', function(){
		$('#navbarSide').addClass('reveal');
		$('.overlay').show();
	});

	$('.overlay').on('click', function(){
	    $('#navbarSide').removeClass('reveal');
	    $('.overlay').hide();
	  });

	$('.side-link.top').on('click', function(){
	    $('#navbarSide').removeClass('reveal');
	    $('.overlay').hide();
	  });
	// $('.flexslider').flexslider({
 //        animation: "slide",
 //        controlNav: "thumbnails",
 //        start: function(slider){
 //          $('body').removeClass('loading');
 //        }
 //      });

	// $('.flexslider1').flexslider({
 //        animation: "slide",
 //        controlNav: "thumbnails",
 //        start: function(slider){
 //          $('body').removeClass('loading');
 //        }
 //      });

	// $('.flexslider1 .flex-control-nav li').each(function(index, element){
	// 	setTimeout( function(){
	// 			    $(element).addClass('animated slideOutDown');
	// 			  }, (100 * index));
	// });

	$(window).scroll(function(){
		if($('#testimonial').length){
			var top = $('#testimonial').offset().top - 600;
		    if($(this).scrollTop() >= top){	        
				$('.flexslider1 .flex-control-nav li').each(function(index, element){
					setTimeout( function(){
							    $(element).removeClass('slideOutDown').addClass('animated bounceInUp');
							  }, (100 * index));
				});
		    }
		}	    
	});
	$('.why-images img').hide();
	$('.why-images img').each(function(index, element){
		setTimeout( function(){
				    $(element).show().addClass('animated slideInUp');
				  }, (500 * index));
	});
    
    $('.flex-control-thumbs img').on('mouseenter', function(){
    	var index = $('.flex-control-thumbs img').index($(this));
    	var str = '';
    	switch(index){
    		case 0:
    			str = '';
    			break;
    		case 1:
    			str = '';
    			break;    			
    		case 2:
    			str = '';
    			break;
    		case 3:
	    		str = '';
	    		break;    			
    	}

    	$(this).parent().append('<span class="thumb-over">'+str+'</span>');
    });	
	
	$('.flex-control-thumbs img').on('mouseout', function(){
    	$('.flex-control-thumbs li span.thumb-over').remove();
    });	
 //AOS.init();
	
});