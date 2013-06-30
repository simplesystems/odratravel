 $('#bxslider').bxSlider({
			  minSlides: 1,
			  maxSlides: 1,
			  mode: 'fade',
  			  auto: true,
			  useCSS: false
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