var replace = {
    gallery: function(obj) {
        var data = {};
        var ul = $('#sortable1').children();
        var i = 0;
        //var imgclass = $('#bxslider img').attr('class');
        $('#bxslider').empty();
        ul.each(function() {

            var newUrl = url.modify($(this).children('img').attr('src'), obj.data('imagex'), obj.data('imagey'));
            data[i] = {}
            data[i]['image'] = newUrl
            data[i]['text'] = $(this).children('img').children('div').children('p').html();
            data[i]['link'] = $(this).children('img').children('div').children('a').attr('href');
            data[i]['desc'] = $(this).children('img').children('div').children('a').text();
            var li = $('<li>').appendTo('#bxslider');
            var img = $('<img>').attr({'class': 'mobile mobileHide', 'src': newUrl}).appendTo(li);
            var sub = $('<div>').attr({'class': 'banner_sub'}).appendTo(li);
            var p = $('<p>').html($(this).children('img').children('div').children('p').html()).appendTo(sub);
            var a = $('<a>').attr({'class': 'btn', 'href': $(this).children('img').children('div').children('a').attr('href')}).html($(this).children('img').children('div').children('a').text()).appendTo(sub);
            i++;

        });
        //var slider = $('#bxslider').bxSlider();
        slider2.reloadSlider();
        return data;
    },
    image: function(obj) {

        var img = $('#container');
        var newUrl = url.modify(img.attr('src'), obj.data('imagex'), obj.data('imagey'));
        obj.attr({'src': newUrl});
    },
    text: function(obj) {

        var data = tinyMCE.activeEditor.getContent();
        $('div[data-key=' + obj.data('key') + ']').html(data);

    },
    video: function(obj) {

        var div = $('.linkdiv div input');
        var ul = $('#bxslider2 ul').empty();
        div.each(function() {

            var li = $('<li>').appendTo(ul);
            var frame = $('<iframe>').attr({'src': $(this).val(), 'frameborder': '0', 'allowfullscreen': ''}).appendTo(li);
            var p = $('<h3>').html('Take a virtual tour').appendTo(li);

        });
        slider.reloadSlider();
    },
    historyGallery: function(div) {
        var ul = div.children('.historywrapper');
        //var imgclass = $('#bxslider img').attr('class');
        $('#bxslider').empty();
        var obj = cadmin.getObject();
        ul.each(function() {
            var newUrl = url.modify($(this).children('img').attr('src'), obj.data('imagex'), obj.data('imagey'));
            var li = $('<li>').appendTo('#bxslider');
            var img = $('<img>').attr({'class': 'mobile mobileHide', 'src': newUrl}).appendTo(li);
            var sub = $('<div>').attr({'class': 'banner_sub'}).appendTo(li);
            var p = $('<p>').html($(this).children('p').html()).appendTo(sub);
            var a = $('<a>').attr({'class': 'btn', 'href': $(this).children('a').attr('href')}).html($(this).children('a').text()).appendTo(sub);

        });
        //var slider = $('#bxslider').bxSlider();
        slider2.reloadSlider();
    },
    historyImage: function(div) {
        var obj = cadmin.getObject();
        var img = div.children('.historywrapper').children('img');
        var newUrl = url.modify(img.attr('src'), obj.data('imagex'), obj.data('imagey'));
        obj.attr({'src': newUrl});
    },
    historyText: function(div) {
        var obj = cadmin.getObject();
        var data = div.children('.historywrapper').html();
        $('div[data-key=' + obj.data('key') + ']').html(data);

    },
    historyVideo: function(div) {
        var ol = div.children('.historywrapper');
        var ul = $('#bxslider2').empty();
        ol.each(function() {

            var li = $('<li>').appendTo(ul);
            var frame = $('<iframe>').attr({'src': $(this).children('iframe').attr('src'), 'frameborder': '0', 'allowfullscreen': ''}).appendTo(li);
            var p = $('<h3>').html($(this).children('span').html()).appendTo(li);

        });
        slider.reloadSlider();


    }
}
