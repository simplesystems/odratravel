var settings = {
    getsettings: function() {
        $(".settings").unbind('click').click(function(e) {
            e.preventDefault();
        });
        $.ajax
                ({
                    url: "/cadmin/getSettings",
                    success: function(data)
                    {
                        data = JSON.parse(data.trim());
                        input.MouseStart();
                        session.setSettings(data);
                        cadmin.settings();
                    }
                });
    },
    saveGeneral: function() {
        document.title = $('#title').val(),
                $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/saveGeneral",
                    data: {
                        'title': $('#title').val(),
                        'desc': $('#desc').val(),
                        'keywords': $('#keywords').val()
                    },
                    cache: false,
                    success: function(data)
                    {
                        var answer = JSON.parse(data);
                        if (answer === "success")
                        {
                            draw.popupWindow(language.saved);
                        }

                    }
                });
    },
    saveCurrent: function() {
        document.title = $('#title').val(),
                $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/saveCurrent",
                    data: {
                        'page': $(location).attr('pathname'),
                        'title': $('#title').val(),
                        'desc': $('#desc').val(),
                        'keywords': $('#keywords').val(),
                        'keep': ($('.keepset').prop('checked'))
                    },
                    cache: false,
                    success: function(data)
                    {
                        var answer = JSON.parse(data);
                        if (answer === "success")
                        {
                            draw.popupWindow(language.saved);
                        }

                    }
                });
    },
    saveSummary: function() {

        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/publishAll",
                    data: {
                        'data': ''
                    },
                    cache: false,
                    success: function(data)
                    {
                        var answer = JSON.parse(data);
                        if (answer === "success")
                        {
                            draw.popupWindow(language.published);
                        }

                    }
                });
    },
    insert: function(type) {
        var data = session.getSettings();
        if ($('.keepset').prop('checked')) {
            type = 'general';
        }

        $.each(data, function(key, value) {
            if (value.cadmin_setting === 'main_page' && type === 'general') {
                $('#title').val(value.cadmin_value.title);
                $('#desc').val(value.cadmin_value.desc);
                $('#keywords').val(value.cadmin_value.keywords);
            }
            if (value.cadmin_setting === $(location).attr('pathname') && type !== 'general') {
                $('#title').val(value.cadmin_value.title);
                $('#desc').val(value.cadmin_value.desc);
                $('#keywords').val(value.cadmin_value.keywords);
            }

        });
        if ($('#title').val() === '' && $('#desc').val() === '' && $('#desc').val() === '' && type !== 'general') {

            $('.cadmin_set input').prop('disabled', true);
            $('.keepset').attr('checked', true).prop('disabled', false);
            $.each(data, function(key, value) {
                if (value.cadmin_setting === 'main_page') {
                    $('#title').val(value.cadmin_value.title);
                    $('#desc').val(value.cadmin_value.desc);
                    $('#keywords').val(value.cadmin_value.keywords);
                }
            });
        }
    },
    getSession: function() {
        $.ajax
                ({
                    url: "/cadmin/getSession",
                    success: function(data)
                    {
                        data = JSON.parse(data.trim());
                        $('.cadmin_sum').html('');
                        var ol = $('<ol>').attr({'class': 'oll'}).appendTo('.cadmin_sum');
                        $.each(data, function(a, b) {


                            $.each(this, function(key, val) {
                                var li = $('<li>').appendTo(ol);
                                var translate = '';
                                switch (val.type) {
                                    case 'text':
                                        translate = language.text;
                                        break;
                                    case 'image':
                                        translate = language.image;
                                        break;
                                    case 'gallery':
                                        translate = language.gallery;
                                        break;
                                    case 'video':
                                        translate = language.video;
                                        break;
                                    case 'list':
                                        translate = language.list;
                                        break;
                                }
                                var spantime = $('<span>').attr({'class': 'summarylist'}).html(translate + ':').appendTo(li);
                                var arevert = $('<a>').attr({'class': 'revert2 li', 'href': '#'}).appendTo(li);
                                var apreview = $('<a>').attr({'class': 'preview li', 'href': '#'}).appendTo(li);
                                var preview = $('<div>').attr({'class': 'preview'}).appendTo(li);
                                apreview.html('preview');
                                arevert.html('cancel');
                                //preview.html(val.cadmin_value);
                                switch (val.type) {
                                    case 'text':
                                        preview.attr({'data-key': val.key, 'data-type': val.type});
                                        var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                                        wrapper.html(val.value);
                                        break;
                                    case 'image':
                                        var size = url.getSize(val.value);
                                        var newsize = url.calculate(size['x'], size['y'], 200, 100);
                                        preview.attr({'data-key': val.key, 'data-type': val.type, 'data-imagex': size['x'], 'data-imagey': size['y']});
                                        var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                                        var newUrl2 = url.newUrl(val.value, newsize['x'], newsize['y']);
                                        var img = $('<img>').attr({'class': '', 'src': newUrl2}).appendTo(wrapper);
                                        break;
                                    case 'gallery':
                                        $.each(val.value, function(k, v) {
                                            var size = url.getSize(v.image);
                                            var newsize = url.calculate(size['x'], size['y'], 200, 100);
                                            var newUrl2 = url.newUrl(v.image, newsize['x'], newsize['y']);
                                            var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                                            var img = $('<img>').attr({'class': '', 'src': newUrl2}).appendTo(wrapper);
                                            var text = $('<p>').html(v.text).appendTo(wrapper);
                                            var a = $('<a>').attr({'href': v.link}).appendTo(wrapper);
                                            a.html(v.desc);
                                            preview.attr({'data-key': val.key, 'data-type': val.type, 'data-imagex': size['x'], 'data-imagey': size['y']});
                                        });
                                        break;
                                    case 'video':
                                        preview.attr({'data-key': val.key, 'data-type': val.type});
                                        $.each(val.value, function(k, v) {
                                            var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                                            var iframe = $('<iframe>').attr({'src': v.link, 'class': 'videopreview'}).appendTo(wrapper);
                                            var span = $('<span>').attr({'class': 'videodeschistory'}).appendTo(wrapper);
                                            span.html(v.desc);
                                        });
                                        break;
                                }
                                input.trackButtons();
                            });
                        });
                        if ($('.cadmin_sum').text() === '') {
                            $('.cadmin_sum').html(language.nothingtopublish);
                        }
                        //$('.cadmin_sum').html(data);
                        //console.log(data);
//                        session.setSettings(data);
//                        cadmin.settings();

                    }
                });
    },
    cancel: function(obj) {
        settings.revert(obj);

        save.destroySession(obj);
        obj.parent().remove();
    },
    revert: function(obj) {

        var key = obj.data('key');
        $.ajax
                ({
                    url: "/cadmin/getHistory?key=" + key,
                    success: function(data)
                    {
                        data = JSON.parse(data.trim());
                        settings.restore(data, obj);
                    }
                });
    },
    restore: function(data, obj) {
        if (data != "success") {
            switch (obj.data('type')) {
                case 'text':
                    $('*[data-key=' + obj.data('key') + ']').html(data.history[0].cadmin_value);
                    break;
                case 'image':
                    var img = $('*[data-key=' + obj.data('key') + ']');
                    var newUrl2 = url.newUrl(data.history[0].cadmin_value, img.data('imagex'), img.data('imagey'));
                    $('*[data-key=' + obj.data('key') + ']').attr({'src': newUrl2});
                    break;
                case 'gallery':

                    //var imgclass = $('#bxslider img').attr('class');
                    $('#bxslider').empty();
                    $.each(data.history[0].cadmin_value, function(k, v) {
                        var newUrl = url.modify(v.image, obj.data('imagex'), obj.data('imagey'));
                        var li = $('<li>').appendTo('#bxslider');
                        var img = $('<img>').attr({'class': 'mobile mobileHide', 'src': newUrl}).appendTo(li);
                        if (obj.data('opt') === "yes") {
                            var sub = $('<div>').attr({'class': 'banner_sub'}).appendTo(li);
                            var p = $('<p>').html(v.text).appendTo(sub);
                            var a = $('<a>').attr({'class': 'btn', 'href': v.link}).html(v.desc).appendTo(sub);
                        }

                    });
                    //var slider = $('#bxslider').bxSlider();
                    reload.all();
                    break;
                case 'video':
                    var ul = $('#bxslider2').empty();
                    $.each(data.history[0].cadmin_value, function(k, v) {
                        var li = $('<li>').appendTo(ul);
                        var frame = $('<iframe>').attr({'src': v.link, 'frameborder': '0', 'allowfullscreen': ''}).appendTo(li);
                        var p = $('<h3>').html(v.desc).appendTo(li);
                    });
                    reload.all();
                    break;
            }
        }
    },
    pagesTree: function() {
        jsTreeCustom.init();
    },
    pagesGet: function(id, temp) {
        $.ajax
                ({
                    url: "/cadmin/jsTree?operation=get_pages&id=" + id,
                    success: function(data)
                    {

                        data = JSON.parse(data.trim());
                        settings.pagesDraw(data, temp);
                    }
                });
    },
    pagesDraw: function(data, temp) {
        $('.pageedit').empty();
        $('.pageedit2').empty();
        if (temp === true) {

            span = $('<span>').html(' ' + language.template + ':<br />').appendTo('.pageedit');
            $.each(templates, function(k, v) {
                var input2 = $('<input>').attr({'class': 'pageradio', 'id': data.id, 'type': 'radio', 'name': 'template', 'value': v}).appendTo('.pageedit');
                var span = $('<span>').html(' ' + k + '<br />').appendTo('.pageedit');
            });

            $('input:radio[name=template]').each(function() {
                if ($(this).val() === data.template) {
                    $(this).attr('checked', true);
                }
                if (data.template === null && $(this).val() === 'default') {
                    $(this).attr('checked', true);
                }
            });
        }

        var span = $('<span>').html(' ' + language.position + ':<br />').appendTo('.pageedit2');
        $.each(positions, function(k, v) {
            var input2 = $('<input>').attr({'class': 'pageradio2', 'id': data.id, 'type': 'radio', 'name': 'menu', 'value': v}).appendTo('.pageedit2');
            var span = $('<span>').html(' ' + k + '<br />').appendTo('.pageedit2');
        });

        $('input:radio[name=menu]').each(function() {
            if ($(this).val() === data.menu) {
                $(this).attr('checked', true);
            }
            if (data.menu === null && $(this).val() === 'none') {
                $(this).attr('checked', true);
            }
        });
        input.SettingsTrack();

    },
    pagesSet: function(data) {
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/jsTree",
                    data: {
                        'operation': 'page_template',
                        'id': data.attr('id'),
                        'template': data.val()
                    },
                    cache: false,
                    success: function(data)
                    {

                    }
                });
    },
    pagesSet2: function(data) {
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/jsTree",
                    data: {
                        'operation': 'page_menu',
                        'id': data.attr('id'),
                        'template': data.val()
                    },
                    cache: false,
                    success: function(data)
                    {

                    }
                });
    },
    pagesSave: function() {
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/jsTreeSave",
                    data: 'save',
                    cache: false,
                    success: function(data)
                    {
                        draw.popupWindow(language.saved);
                        data = JSON.parse(data.trim());
                        replace.menu(data);
                        settings.pagesSaveReload();
                    }
                });
    },
    pagesSaveReload: function() {
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/jsTreeCancel",
                    data: 'save',
                    cache: false,
                    success: function(data)
                    {
                        $('.pageedit').empty();
                        $('.pageedit2').empty();
                        jsTreeCustom.init();
                        input.SettingsTrack();
                        input.jsTreeInput();
                    }
                });
    },
    pagesCancel: function() {
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/jsTreeCancel",
                    data: 'save',
                    cache: false,
                    success: function(data)
                    {
                        $('.pageedit').empty();
                        $('.pageedit2').empty();
                        draw.popupWindow(language.aborted);
                        jsTreeCustom.init();
                        input.SettingsTrack();
                        input.jsTreeInput();
                    }
                });
    }

};