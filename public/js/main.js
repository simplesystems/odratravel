slider = '';
slider2 = '';

$(document).ready(function() {
    $('table#navmenu td[width="6px"]').remove();
    var stars = $('.stars').children('div').text();
    $('.stars').children('div').html(stars.replace(/\*/g, '<img src="/img/star.png">'));
    var path = window.location.pathname;
    path = path.split('/');

    if (path[1] == 'menu') {
        $('img[data-route="/menu/' + path[2] + '"]').parent().parent().trigger('click');
    }


});
$(document).bind('text_content_update', function(obj) {
    var stars = $('.stars').children('div').text();
    $('.stars').children('div').html(stars.replace(/\*/g, '<img src="/img/star.png">'));
});
$(document).bind('slider_gallery_update', function() {
    var obj = $('.galleryslider');
    var div = $('<div>').attr({'class': 'bxslider'});
    var ul = $('<ul>').attr({'class': 'bxslider', 'id': 'bxslider_p'}).appendTo(div);

    $('div[data-key=' + obj.data('key') + '] li:not(.bx-clone) img').each(function() {
        var li = $('<li>').appendTo(ul);
        var newUrl = $(this).attr('src');
        if (newUrl.indexOf('?')) {
            newUrl = newUrl.split('?')[0];
        }
        var newUrl2 = newUrl.split('/');
        newUrl2[5] = 326;
        newUrl2[6] = 217;
        newUrl2 = newUrl2.join('/');

        var newUrl3 = newUrl.split('/');
        newUrl3[5] = 640;
        newUrl3[6] = 480;
        newUrl3 = newUrl3.join('/');
        var a = $('<a>').attr({'href': newUrl3, 'data-medium-image': newUrl2, 'alt': 'alt'}).appendTo(li);
        var img = $('<img>').attr({'src': newUrl}).appendTo(a);
    });
    obj.empty();
    div.appendTo(obj);
    $('#bxslider_p').bxSlider({
        minSlides: 3,
        maxSlides: 10,
        slideWidth: 85,
        slideMargin: 10,
        clones: false
    });
});
$(document).bind('text_content_update', function() {

});


slider = $('#bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 1,
    mode: 'fade',
    auto: true,
    useCSS: false,
    clones: false
});
slider2 = $('#bxslider_p').bxSlider({
    minSlides: 3,
    maxSlides: 10,
    slideWidth: 85,
    slideMargin: 10,
    clones: false
});
curr_obj = '';
$('#sidemenu > li:not(.active) a').not('.active').hover(
        function() {
            curr_obj = $(this).find('img');
            oldSrc = curr_obj.attr('src');
            curr_obj.attr('src', curr_obj.data('hover'));
        },
        function() {

            $(this).find('img').attr('src', oldSrc);
        }
)


$('#sidemenu a').unbind('click').click(function() {

//$.each($(this).parent().parent().find('li'), function() {
//        $(this).removeClass('active');
//        $(this).children('ul:visible').slideUp();
//
//    });
    $(this).parent().parent().find('li').removeClass('active');
    $(this).parent().parent().find('ul:visible').hide();

    $(this).parent().addClass('active');
    if ($(this).children('ul:hidden')) {
        $(this).slideDown();
        return false;
    }



});




$("a.gallery").fancybox();
$('#bxslider_p a:first').addClass('active');
$('#bxslider_p a').click(function() {
    $('#bxslider_p a.active').removeClass('active');
    $(this).addClass('active');
    $('div.medium_photo_wrapper a').attr('href', $(this).attr('href'));
    $('div.medium_photo_wrapper img').attr('src', $(this).attr('data-medium-image'));
    return false;
})