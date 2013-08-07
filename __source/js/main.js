 $('#bxslider').bxSlider({
			  minSlides: 1,
			  maxSlides: 1,
			  mode: 'fade',
  			  auto: true,
			  useCSS: false
			});

 $('#bxslider_p').bxSlider({
			  minSlides: 3,
			  maxSlides: 3,

			  slideWidth: 85,
			  slideMargin: 10
			});


curr_obj = '';
$('#sidemenu > li:not(.active) a').not('.active').hover(
	function(){
	   curr_obj = $(this).find('img');
	   oldSrc = curr_obj.attr('src');
	   curr_obj.attr('src', oldSrc.replace('/','/a_'));
	},

	function(){

	     $(this).find('img').attr('src', oldSrc);
	}
)


$('#sidemenu a').click(function(){
	if($(this).next().is('ul')){
		$(this).next().slideToggle()
		return false;
	}
})




			$("a.gallery").fancybox();
		


$('#bxslider_p a:first').addClass('active');
$('#bxslider_p a').click(function(){
	$('#bxslider_p a.active').removeClass('active');
	$(this).addClass('active');
	$('div.medium_photo_wrapper a').attr('href',$(this).attr('href'));
	$('div.medium_photo_wrapper img').attr('src',$(this).attr('data-medium-image'));
	return false;
})