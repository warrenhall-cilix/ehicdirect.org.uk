var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/* Custom General jQuery
/*--------------------------------------------------------------------------------------------------------------------------------------*/
;(function($, window, document, undefined) {
//Genaral Global variables
//"use strict";
var $win = $(window);
var $doc = $(document);
var $winW = function(){ return $(window).width(); };
var $winH = function(){ return $(window).height(); };
var $screensize = function(element){  
		$(element).width($winW()).height($winH());
	};
	
	var screencheck = function(mediasize){
		if (typeof window.matchMedia !== "undefined"){
			var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
			if( screensize.matches ) {
				return true;
			}else {
				return false;
			}
		} else { // for IE9 and lower browser
			if( $winW() <=  mediasize ) {
				return true;
			}else {
				return false;
			}
		}
	};

$doc.ready(function() {
	/*--------------------------------------------------------------------------------------------------------------------------------------*/		
	// Remove No-js Class
	$("html").removeClass('no-js').addClass('js');
	
	
	
	/* Get Screen size
	---------------------------------------------------------------------*/
	$win.load(function(){
		$win.on('resize', function(){
			$screensize('your selector');	
		}).resize();	
	});
	
	
	/* Menu ICon Append prepend for responsive
	---------------------------------------------------------------------*/
	$(window).on('resize', function(){
		if (screencheck(1023)) {
			if(!$('#menu').length){
				$('#mainmenu').prepend('<a href="#" id="menu" class="menulines-button"><span class="menulines"></span> <em>Menu</em></a>');
			}
			$('.headertopright ul li').insertAfter('#mainmenu ul li:first-child');
		} else {
			$("#menu").remove();
		}
	}).resize();

		


	/* Main Navigation Sticky
	* ----------------------------------------------------------------------------------------------------------------------*/
	var intialtop = $(document).scrollTop();
	var headerheight = $("#header").outerHeight();
	$(window).scroll(function() {
		var afterscrolltop = $(document).scrollTop();
		if( afterscrolltop > headerheight ) {
			$("#header").addClass("navhide");
		} else {
			$("#header").removeClass("navhide");
		}
		if( afterscrolltop > intialtop ) {
			$("#header").removeClass("navshow");
		} else {
			$("#header").addClass("navshow");
		}
		intialtop = $(document).scrollTop();
	});
	
	/* Tab Content box 
	---------------------------------------------------------------------*/
	var tabBlockElement = $('.tab-data');
		$(tabBlockElement).each(function() {
			var $this = $(this),
				tabTrigger = $this.find(".tabnav li"),
				tabContent = $this.find(".tabcontent");
				var textval = [];
				tabTrigger.each(function() {
					textval.push( $(this).text() );
				});	
			$this.find(tabTrigger).first().addClass("active");
			$this.find(tabContent).first().show();




			
			$(tabTrigger).on('click',function () {
				$(tabTrigger).removeClass("active");
				$(this).addClass("active");
				$(tabContent).hide().removeClass('visible');
				var activeTab = $(this).find("a").attr("data-rel");
				$this.find('#' + activeTab).fadeIn('normal').addClass('visible');
							
				return false;
			});
		
			var responsivetabActive =  function(){
			if (screencheck(1023)){
				if( !$('.tabMobiletrigger').length ){

					$(tabContent).each(function(index) {
						$(this).before("<h2 class='tabMobiletrigger'>"+textval[index]+"</h2>");	
						$this.find('.tabMobiletrigger:first').addClass("rotate");
					});
					$('.tabMobiletrigger').click('click', function(){
						var tabAcoordianData = $(this).next('.tabcontent');
						if($(tabAcoordianData).is(':visible') ){
							$(this).removeClass('rotate');
							$(tabAcoordianData).slideUp('normal');
							//return false;
						} else {
							$this.find('.tabMobiletrigger').removeClass('rotate');
							$(tabContent).slideUp('normal');
							$(this).addClass('rotate');
							$(tabAcoordianData).not(':animated').slideToggle('normal');
						}
						return false;
					});
				}
					
			} else {
				if( $('.tabMobiletrigger').length ){
					$('.tabMobiletrigger').remove();
					tabTrigger.removeClass("active");
					$this.find(tabTrigger).removeClass("active").first().addClass('active');
					$this.find(tabContent).hide().first().show();				
				}		
			}
		};
		$(window).on('resize', function(){
			if(!$this.hasClass('only-tab')){
				responsivetabActive();
			}
		}).resize();
	});
	
	/* Accordion box JS
	---------------------------------------------------------------------*/
	$('.accordion-databox').each(function() {
		var $accordion = $(this),
			$accordionTrigger = $accordion.find('.accordion-trigger'),
			$accordionDatabox = $accordion.find('.accordion-data');
			
			$accordionTrigger.first().addClass('open');
			$accordionDatabox.first().show();
			
			$accordionTrigger.on('click',function (e) {
				var $this = $(this);
				var $accordionData = $this.next('.accordion-data');
				if( $accordionData.is($accordionDatabox) &&  $accordionData.is(':visible') ){
					$this.removeClass('open');
					$accordionData.slideUp(400);
					e.preventDefault();
				} else {
					$accordionTrigger.removeClass('open');
					$this.addClass('open');
					$accordionDatabox.slideUp(400);
					$accordionData.slideDown(400);
				}
			});
	});
	
	
	/* MatchHeight Js
	-------------------------------------------------------------------------*/
	if($('.matchheightbox').length){
		$('.matchheightbox').matchHeight({
			byRow: false
		});
	}
	if($('.formsectionbox .form-group').length){
		$('.formsectionbox .form-group').matchHeight();
	}
	
	if($('.bannerflexbox').length){
		$('.bannerflexbox').matchHeight();
	}	
	
	if($('.bannerflexboxinn p').length){
		$('.bannerflexboxinn p').matchHeight();
	}
	
	if($('.documentneededlisting li').length){
		$('.documentneededlisting li').matchHeight();
	}	




	if($('.bannerflexboxinn p').length){
		$('.bannerflexboxinn p').matchHeight({
			byRow: false
		});
	}	
	
	/*Convert Img to BG
	---------------------------------------------------------------------*/
	if($('.bgimg img').length){
		$('.bgimg img').each(function() {
			var imgSrc = $(this).attr('src');
			$(this).parents('.bgimg').css('background-image', 'url('+imgSrc+')');
		});
	}




	/*Mobile menu click
	---------------------------------------------------------------------*/
	$(document).on('click',"#menu", function(){
		$(this).toggleClass('menuopen');
		$(this).next('ul').slideToggle('normal');
		return false;
	});
	
	/*Step Form
	---------------------------------------------------------------------*/
	$(".formnextbtn").click(function() {
		$(this).parents('fieldset').next().fadeIn('slow');
		$(this).parents('fieldset').css({
		'display': 'none'
		});
		jQuery('html, body').animate({
			scrollTop: jQuery(".formstepsnav").offset().top - 90
		}, 1000);
		$('.formstepsnav').find('li.active').next().addClass('active')
		return false;
	});
	 /**** START JS FOR ERROR 404 PAGE *****/

		var $headerHeight = $('#header').outerHeight();

		$('.page-not-found').css('margin-top', $headerHeight + 30 + 'px');

		$(window).resize(function(event) {

			var $headerHeight = $('#header').outerHeight();

			$('.page-not-found').css('margin-top', $headerHeight + 30 + 'px');

		});

		/**** END JS FOR ERROR 404 PAGE *****/
   
	var $headerHeight = $('#header').outerHeight();
	$('#mainbanner').css('margin-top', $headerHeight + 'px');
	$('.innermain').css('margin-top', $headerHeight + 10 + 'px');
	var $titleHeight = $('.sdfleftbox .sectiontitle').outerHeight();
	$('.sdfrightbox').css('padding-top', $titleHeight + 'px');
	$('.breadcrumbsarea').css('margin-top', $headerHeight + 'px');




	$(window).on('resize', function(){
		var $headerHeight = $('#header').outerHeight();
		$('#mainbanner').css('margin-top', $headerHeight + 'px');
		$('.innermain').css('margin-top', $headerHeight + 10 + 'px');
		if (screencheck(767)){
			$('.sdfrightbox p:first-child').removeAttr('style');
		} else {
			var $titleHeight = $('.sdfleftbox .sectiontitle').outerHeight();
			$('.sdfrightbox p:first-child').css('padding-top', $titleHeight + -25 + 'px');
		}
	}).resize();
	
	$('.close').click(function(e) {
            $(this).parents('.disclaimer').fadeOut('normal');
		return false;
        });
	
	/*Datepicker JS
	---------------------------------------------------------------------*/
	$('.datepicker').datepicker({
			dateFormat: 'dd-mm-yy',
			changeMonth: true,
			changeYear: true,
			yearRange: '1950:2019',
			maxDate: 0,
		});
		
		$('select').select2({
		  selectOnClose: true,
		  minimumResultsForSearch: Infinity
		});
		
		if($(window).width() > 1023){		
			$('#menu-top-menu li.moremenuli').appendTo('.moremenuwrapper ul');
			
			$('.moremenuwrapper .moremenu').hover(function(){
				$(this).next('ul').addClass('active');
			},
			function(){
				$(this).next('ul').removeAttr('class');
			});
			
			$('.moremenuwrapper > ul').hover(function(){
				$(this).addClass('active');
			},
			function(){
				$(this).removeAttr('class');
			});
		}


/*--------------------------------------------------------------------------------------------------------------------------------------*/		
});	







/*All function need to define here for use strict mode



----------------------------------------------------------------------------------------------------------------------------------------*/








/*--------------------------------------------------------------------------------------------------------------------------------------*/



})(jQuery, window, document);
}