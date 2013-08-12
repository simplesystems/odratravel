var save = {
    saveToSession: function(obj) {

        switch (obj.data('type')) {
            case 'text':
                if (!(obj.data('textarea') === 'yes')) {
                    var data = tinyMCE.activeEditor.getContent();
                }
                else {
                    var data = $('#editedtext').val();
                }
                break;
            case 'list':
                var list = $('.cadmin_panel #editedTable');
                var data = {};
                var i = 0;
                data['table'] = {};
                $.each(list.find('tr'), function() {
                    var a = 0;
                    data['table'][i] = {};
                    data['table'][i][a] = {};
                    $.each($(this).find('td'), function() {
                        data['table'][i][a] = $(this).text();
                        a++;
                    });
                    i++;
                });
                break;
            case 'image':
                if (obj.data('style') === 'background') {
                    var bg = obj.css('background-image');
                    bg = bg.replace('url(', '').replace(')', '');
                    bg = bg.substring(0, bg.length - 1);
                    var link = bg.substring(bg.indexOf("/files"));
                }
                else {
                    var link = obj.attr('src');
                }
                link = url.getId(link);
                var data = link[0];
                break;
            case 'gallery':
                var data = {};
                var ul = $('#sortable1').children();
                var i = 0;
                ul.each(function() {
                    var obj = cadmin.getObject();
                    var newUrl = url.modify($(this).children('img').attr('src'), obj.data('imagex'), obj.data('imagey'));
                    data[i] = {};
                    data[i]['image'] = parseInt(url.getId(newUrl));
                    if (obj.data('opt') === "yes") {
                        data[i]['text'] = '';
                        $(this).children('img').children('div').children('p').each(function() {
                            data[i]['text'] = data[i]['text'] + '<p>' + $(this).html() + '</p>';
                        });
                        data[i]['link'] = $(this).children('img').children('div').children('a').attr('href');
                        data[i]['desc'] = $(this).children('img').children('div').children('a').text();
                    }
                    i++;
                });
                break;
            case 'video':
                var data = {};
                var div = $('.videoinput');
                var i = 0;
                div.each(function() {
                    data[i] = {};
                    data[i]['link'] = $(this).val();
                    data[i]['desc'] = $(this).siblings('.videodesc').val();
                    i++;
                });
                break;
        }
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/save",
                    data: {
                        'type': obj.data('type'),
                        'key': obj.data('key'),
                        'data': data,
                        'md5': obj.data('md5')
                    },
                    cache: false,
                    success: function(data)
                    {
                        var answer = JSON.parse(data);
                        if (answer === "success")
                        {
                            draw.popupWindow(language.saved);
                            replace.init(obj);
                        }

                    },
                    error: function() {
                        draw.popupWindow(language.error);
                    }
                });
    },
    publish: function(obj) {

        switch (obj.data('type')) {
            case 'text':
                if (!(obj.data('textarea') == 'yes')) {
                    var data = tinyMCE.activeEditor.getContent();
                }
                else {
                    var data = $('#editedtext').val();
                }
                break;
            case 'list':
                var list = $('.cadmin_panel #editedTable');
                var listArray = {};
                var i = 0;
                listArray['table'] = {};
                $.each(list.find('tr'), function() {
                    var a = 0;
                    listArray['table'][i] = {};
                    listArray['table'][i][a] = {};
                    $.each($(this).find('td'), function() {
                        listArray['table'][i][a] = $(this).text();
                        a++;
                    });
                    i++;
                    data = listArray;
                });
                break;
            case 'image':
                if (obj.data('style') === 'background') {
                    var bg = obj.css('background-image');
                    bg = bg.replace('url(', '').replace(')', '');
                    bg = bg.substring(0, bg.length - 1);
                    var link = bg.substring(bg.indexOf("/files"));
                }
                else {
                    var link = obj.attr('src');
                }
                link = url.getId(link);
                var data = link[0];
                break;
            case 'gallery':
                var data = {};
                var ul = $('#sortable1').children();
                var i = 0;
                ul.each(function() {
                    var obj = cadmin.getObject();
                    var newUrl = url.modify($(this).children('img').attr('src'), obj.data('imagex'), obj.data('imagey'));
                    data[i] = {};
                    data[i]['image'] = parseInt(url.getId(newUrl));
                    if (obj.data('opt') === "yes") {
                        data[i]['text'] = '';
                        $(this).children('img').children('div').children('p').each(function() {
                            data[i]['text'] = data[i]['text'] + '<p>' + $(this).html() + '</p>';
                        });
                        data[i]['link'] = $(this).children('img').children('div').children('a').attr('href');
                        data[i]['desc'] = $(this).children('img').children('div').children('a').text();
                    }
                    i++;
                });
                break;
            case 'video':
                var data = {};
                var div = $('.videoinput');
                var i = 0;
                div.each(function() {
                    data[i] = {};
                    data[i]['link'] = $(this).val();
                    data[i]['desc'] = $(this).siblings('.videodesc').val();
                    i++;
                });
                replace.video(obj);
                break;
        }
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/publish",
                    data: {
                        'type': obj.data('type'),
                        'key': obj.data('key'),
                        'data': data,
                        'md5': obj.data('md5')
                    },
                    cache: false,
                    success: function(data)
                    {

                        var answer = JSON.parse(data);
                        if (answer === "success")
                        {
                            replace.init(obj);
                            draw.popupWindow(language.published);
                        }
                        if (answer === "changes")
                        {
                            replace.init(obj);
                            draw.popupWindow(language.someonechange);
                        }

                    },
                    error: function() {
                        draw.popupWindow(language.error);
                    }
                });



    },
    destroySession: function(obj) {

        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/destroy", data: {
                        'type': obj.data('type'),
                        'key': obj.data('key')
                    },
                    cache: false,
                    success: function(data)
                    {
                        var answer = JSON.parse(data);
                        if (answer === "success")
                        {
                            draw.popupWindow(language.aborted);
                        }

                    }
                });
    }

};