slider = '';
slider2 = '';

$(document).bind('#bxslider_p-update', function() {
    var obj = $('.galleryslider');
    var div = $('<div>').attr({'class': 'bxslider'});
    var ul = $('<ul>').attr({'class': 'bxslider', 'id': 'bxslider_p'}).appendTo(div);

    $('div[data-key=' + obj.data('key') + '] li:not(.bx-clone) img').each(function() {
        var li = $('<li>').appendTo(ul);
        var newUrl = $(this).attr('src');
        if (newUrl.indexOf('?')) {
            newUrl = newUrl.split('?')[0];
        }
        var a = $('<a>').attr({'href': newUrl, 'data-medium-image': newUrl, 'alt': 'alt'}).appendTo(li);
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
            curr_obj.attr('src', oldSrc.replace('/img/', '/img/a_'));
        },
        function() {

            $(this).find('img').attr('src', oldSrc);
        }
)


$('#sidemenu a').click(function() {
    if ($(this).next().is('ul')) {
        $(this).next().slideToggle()
        return false;
    }
})




$("a.gallery").fancybox();



$('#bxslider_p a:first').addClass('active');
$('#bxslider_p a').click(function() {
    $('#bxslider_p a.active').removeClass('active');
    $(this).addClass('active');
    $('div.medium_photo_wrapper a').attr('href', $(this).attr('href'));
    $('div.medium_photo_wrapper img').attr('src', $(this).attr('data-medium-image'));
    return false;
})