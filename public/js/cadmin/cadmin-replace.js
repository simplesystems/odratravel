var replace = {
    init: function(obj) {

        switch (obj.data('type')) {
            case 'text':
                replace.text(obj);
                break;
            case 'list':
                replace.list(obj);
                break;
            case 'image':
                replace.image(obj);
                break;
            case 'gallery':
                replace.gallery(obj);
                break;
            case 'video':
                replace.video(obj);
                break;
        }
    },
    gallery: function(obj) {

        var data = {};
        var ul = $('#sortable1').children();
        var i = 0;
        var main = $('*[data-key=' + obj.data('key') + '] ul');
        main.empty();
        ul.each(function() {
            var obj = cadmin.getObject();
            var newUrl = url.modify($(this).children('img').attr('src'), obj.data('imagex'), obj.data('imagey'));
            data[i] = {};
            data[i]['image'] = parseInt(url.getId(newUrl));
            if (obj.data('opt') === "yes") {
                data[i]['text'] = '';
                //data[i]['text'] = $(this).children('img').children('div').clone().remove('a').html();
                $(this).children('img').children('div').children('p').each(function() {
                    data[i]['text'] = data[i]['text'] + '<p>' + $(this).html() + '</p>';
                });
                data[i]['link'] = $(this).children('img').children('div').children('a').attr('href');
                data[i]['desc'] = $(this).children('img').children('div').children('a').text();
            }
            var li = $('<li>').appendTo(main);
            var img = $('<img>').attr({'class': 'mobile mobileHide', 'src': newUrl}).appendTo(li);
            if (obj.data('opt') === "yes") {
                var sub = $('<div>').attr({'class': 'banner_sub'}).appendTo(li);
                $(this).children('img').children('div').children('p').each(function() {
                    var p = $('<p>').html($(this).html()).appendTo(sub);
                });

                var a = $('<a>').attr({'class': 'btn', 'href': $(this).children('img').children('div').children('a').attr('href')}).html($(this).children('img').children('div').children('a').text()).appendTo(sub);
            }
            i++;

        });
        $(document).trigger('slider_gallery_update', obj);
        reload.all();
    },
    image: function(obj) {
        var main = $('*[data-key=' + obj.data('key') + ']');

        if (obj.data('style') === 'background') {
            var img = $('#container');
            var newUrl = url.modify(img.attr('src'), obj.data('imagex'), obj.data('imagey'));
            main.css("background", "url(" + newUrl + ") top center no-repeat ");
        }
        else {
            var img = $('#container');
            var newUrl = url.modify(img.attr('src'), obj.data('imagex'), obj.data('imagey'));
            main.attr({'src': newUrl});
        }
        $(document).trigger('image_content_update', obj);

    },
    text: function(obj) {
        if (!(obj.data('textarea') == 'yes')) {
            var data = tinyMCE.activeEditor.getContent();
        }
        else {
            var data = $('#editedtext').val();
        }
        $('*[data-key=' + obj.data('key') + ']').html(data);
        $(document).trigger('text_content_update', obj);
    },
    list: function(obj) {
        obj.empty();
        var list = $('.cadmin_panel #editedTable');
        var check = null;

        $.each(list.find('.editorRow').find('.tdEditorRow:not(td[data-pos="edit"])').find('input'), function() {
            if ($(this).val() !== '') {
                check = 'yes';
            }
        });
        if (check === 'yes') {
            $.each(list.find('.editorRow'), function() {
                var thead = $('<thead>').appendTo(obj);
                var tr = $('<tr>').appendTo(thead);
                $.each($(this).find('.tdEditorRow:not(td[data-pos="edit"])'), function() {
                    var td = $('<td>').appendTo(tr).html($(this).find('input').val());
                });
            });
        }

        var tbody = $('<tbody>').appendTo(obj);
        $.each(list.find('tbody').find('tr:not(.editorRow)'), function() {
            var tr = $('<tr>').appendTo(tbody);
            $.each($(this).find('td:not(.tdEditorRow)'), function() {
                var td = $('<td>').appendTo(tr).html($(this).text());
            });

        });
    },
    video: function(obj) {
        var div = $('.linkdiv div');
        var ul = $('*[data-key=' + obj.data('key') + '] ul').empty();
        console.log(ul);
        div.each(function() {
            var li = $('<li>').appendTo(ul);
            var frame = $('<iframe>').attr({'src': $(this).children('.videoinput').val(), 'frameborder': '0', 'allowfullscreen': ''}).appendTo(li);
            var p = $('<h3>').html($(this).children('.videodesc').val()).appendTo(li);
        });
        reload.all();
    },
    historyGallery: function(div) {
        var ul = div.children('.historywrapper');
        var obj = cadmin.getObject();
        var main = $('*[data-key=' + obj.data('key') + '] ul');
        main.empty();
        ul.each(function() {
            var obj = cadmin.getObject();
            var oldUrl = $(this).children('img').attr('src');
            if (oldUrl.indexOf('/files') === -1) {
                var newUrl = url.newUrl(oldUrl, obj.data('imagex'), obj.data('imagey'));
            }
            else {
                var newUrl = url.modify(oldUrl, obj.data('imagex'), obj.data('imagey'));
            }
            var li = $('<li>').appendTo(main);
            var img = $('<img>').attr({'class': 'mobile mobileHide', 'src': newUrl}).appendTo(li);
            var sub = $('<div>').attr({'class': 'banner_sub'}).appendTo(li);
            var p = $('<p>').html($(this).children('p').html()).appendTo(sub);
            var a = $('<a>').attr({'class': 'btn', 'href': $(this).children('a').attr('href')}).html($(this).children('a').text()).appendTo(sub);
        });
        reload.all();
    },
    historyImage: function(div) {
        var obj = cadmin.getObject();
        var img = div.children('.historywrapper').children('img');
        var oldUrl = img.attr('src');
        if (oldUrl.indexOf('/files') === -1) {
            var newUrl = url.newUrl(oldUrl, obj.data('imagex'), obj.data('imagey'));
        }
        else {
            var newUrl = url.modify(oldUrl, obj.data('imagex'), obj.data('imagey'));
        }

        if (obj.data('style') === 'background') {
            obj.css("background", "url(" + newUrl + ") top center no-repeat ");
        }
        else {
            obj.attr({'src': newUrl});
        }

    },
    historyText: function(div) {
        var obj = cadmin.getObject();
        var data = div.children('.historywrapper').html();
        $('div[data-key=' + obj.data('key') + ']').html(data);

    },
    historyList: function(div) {
        var obj = cadmin.getObject();
        var data = div.children('.historywrapper').html();
        $('table[data-key=' + obj.data('key') + ']').html(data);
    },
    historyVideo: function(div) {
        var ol = div.children('.historywrapper');
        var obj = cadmin.getObject();
        var ul = $('*[data-key=' + obj.data('key') + '] ul');
        ul.empty();
        ol.each(function() {
            var li = $('<li>').appendTo(ul);
            var frame = $('<iframe>').attr({'src': $(this).children('iframe').attr('src'), 'frameborder': '0', 'allowfullscreen': ''}).appendTo(li);
            var p = $('<h3>').html($(this).children('span').html()).appendTo(li);

        });
        reload.all();


    },
    menu: function(data) {
        var ul = $('#menu-top');
        ul.empty();
        if (data.top) {
            $.each(data.top, function(k, v)
            {
                var li = $('<li>').appendTo(ul);
                var a = $('<a>').html(v.title).attr({'href': v.route.toLowerCase()}).appendTo(li);
            });
            var ul = $('#menu-front');
            ul.empty();
        }
        if (data.front) {
            $.each(data.front, function(k, v)
            {
                var li = $('<li>').appendTo(ul);
                var a = $('<a>').html(v.title).attr({'href': v.route.toLowerCase()}).appendTo(li);
            });
        }
        if (data.info) {
            var ul = $('#menu-info');
            ul.empty();
            var li = $('<li>').appendTo(ul);
            var h2 = $('<h2>').appendTo(li).html('Information');
            $.each(data.info, function(k, v)
            {
                var li = $('<li>').appendTo(ul);
                var a = $('<a>').html(v.title).attr({'href': v.route.toLowerCase()}).appendTo(li);
            });
        }
        if (data.help) {
            var ul = $('#menu-help');
            ul.empty();
            var li = $('<li>').appendTo(ul);
            var h2 = $('<h2>').appendTo(li).html('Help');
            $.each(data.help, function(k, v)
            {
                var li = $('<li>').appendTo(ul);
                var a = $('<a>').html(v.title).attr({'href': v.route.toLowerCase()}).appendTo(li);
            });
        }
    },
};
