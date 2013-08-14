//default slider caption
defaultCaption = '';
var draw = {
    bar: function() {
        var cadmin_panel = $('<div>').attr({'class': 'cadmin_panel'});
        var cadmin_bar = $('<div>').attr({'class': 'cadmin_bar'}).appendTo(cadmin_panel);
        var cadmin_header = $('<div>').attr({'class': 'cadmin_header'}).appendTo(cadmin_bar);
        var span = $('<span>').attr({'class': 'cadmin_bar_title'}).appendTo(cadmin_header);
        var b = $('<b>').appendTo(cadmin_header);
        var up_logout = $('<a>').attr({'class': 'up logout', 'href': '/cadmin/logout'}).appendTo(cadmin_header);
        var up_settings = $('<a>').attr({'class': 'up settings', 'href': ''}).appendTo(cadmin_header);
        span.html(language.youarein);
        up_settings.html(language.settings);
        up_logout.html(language.dashboard);
        b.html(language.webadminpanel);
        return cadmin_panel;
    },
    main: function() {
        var cadmin_content = $('<div>').attr({'class': 'cadmin_content', 'hidden': 'true'});
        var cadmin_top = $('<div>').attr({'class': 'cadmin_top'}).appendTo(cadmin_content);
        var cadmin_form = $('<div>').attr({'class': 'cadmin_form'}).appendTo(cadmin_content);
        var cadmin_leftcol = $('<div>').attr({'class': 'cadmin_leftcol'}).appendTo(cadmin_form);
        var cadmin_rightcol = $('<div>').attr({'class': 'cadmin_rightcol'}).appendTo(cadmin_form);
        // left
        var cadmin_leftcol_sub = $('<div>').attr({'class': 'cadmin_leftcol_sub'}).appendTo(cadmin_leftcol);
        var cadmin_top_img = $('<img>').attr({'alt': language.cms, 'src': '/img/cadmin/logo.png'}).appendTo(cadmin_top);
        var cadmin_top_h2 = $('<h2>').appendTo(cadmin_top);
        cadmin_top_h2.html(language.adminpanel);
        return cadmin_content;
    },
    text: function(obj) {

        var cadmin_text_edit = $('<div>').attr({'class': 'cadmin_text_edit'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_text_edit);
        var textdiv = $('<div>').attr({'class': 'tinymce'}).appendTo(cadmin_text_edit);
        var textarea = $('<textarea>').attr({'id': 'editedtext'}).appendTo(textdiv);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_text_edit);
        var button_save_text = $('<a>').attr({'class': 'button save', 'href': '#'}).appendTo(cadmin_buttons);
        var button_public = $('<a>').attr({'class': 'button public', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        h3.html(language.texteditor);
        abort.html(language.cancelchanges);
        button_save_text.html(language.save);
        button_public.html(language.public);
        textarea.html(obj.html());
        return cadmin_text_edit;
    },
    list: function(obj) {

        var cadmin_text_edit = $('<div>').attr({'class': 'cadmin_list_edit'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_text_edit);
        var textdiv = $('<div>').attr({'class': 'tinymce'}).appendTo(cadmin_text_edit);
        var textarea = $('<table>').attr({'id': 'editedTable'}).appendTo(textdiv);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_text_edit);
        var button_save_text = $('<a>').attr({'class': 'button save', 'href': '#'}).appendTo(cadmin_buttons);
        var button_public = $('<a>').attr({'class': 'button public', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        h3.html(language.listeditor);
        abort.html(language.cancelchanges);
        button_save_text.html(language.save);
        button_public.html(language.public);
        textarea.html(textarea.html() + obj.html());
        //var a = $('<button>').html(language.addrow).attr('class', 'listButton addRow').appendTo(textdiv);
        //var a = $('<button>').html(language.removerow).attr('class', 'listButton removeRow').appendTo(textdiv);
        //var a = $('<button>').html(language.addcolumn).attr('class', 'listButton addColumn').appendTo(textdiv);
        //var a = $('<button>').html(language.removecolumn).attr('class', 'listButton removeColumn').appendTo(textdiv);
        return cadmin_text_edit;
    },
    image: function(obj) {

        var cadmin_img = $('<div>').attr({'class': 'cadmin_img'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_img);
        var cadmin_add = $('<div>').attr({'class': 'cadmin_add'}).appendTo(cadmin_img);
        var cadmin_addbox = $('<div>').attr({'class': 'cadmin_addbox', 'id': 'dropimagebox'}).appendTo(cadmin_add);
        var cadmin_addbox2 = $('<div>').attr({'class': 'cadmin_addbox2', 'id': 'container'}).appendTo(cadmin_add);
        var attachments = $('<div>').attr({'class': 'attachments'}).appendTo(cadmin_add);
        var cadmin_upload = $('<div>').attr({'class': 'cadmin_upload'}).appendTo(cadmin_add);
        var button_upload = $('<a>').attr({'class': 'button upload pickfiles', 'href': '#', 'id': 'upload_button'}).appendTo(cadmin_upload);
        var button_add = $('<a>').attr({'class': 'button add', 'href': '#', 'id': 'browse_files'}).appendTo(cadmin_upload);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_img);
        var button_save = $('<a>').attr({'class': 'button save', 'href': '#'}).appendTo(cadmin_buttons);
        var button_public = $('<a>').attr({'class': 'button public', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        //var divText = $('<div>').attr({'id': 'uploadedtext'}).appendTo(cadmin_add);
        if (obj.data('optional') == 'yes') {
            var span = $('<span>').html('link:').appendTo(attachments);
            var input = $('<input>').attr({'type': 'text', 'class': 'imagehref'}).appendTo(attachments);
            input.val(obj.parent().attr('href'));
        }
        h3.html(language.imageeditor);
        abort.html(language.cancelchanges);
        button_add.html(language.browse);
        button_upload.html(language.filemanager);
        button_save.html(language.save);
        button_public.html(language.public);
        //divText.html('Drop file on image or browse files:');

        var x = obj.data('imagex');
        var y = obj.data('imagey');
        var size = url.calculate(x, y, 500, 500);
        if (x < 500 && y < 500) {
            size['x'] = x;
            size['y'] = y;
        }

        if (obj.data('style') === 'background') {
            var bg = obj.css('background-image');
            bg = bg.replace('url(', '').replace(')', '');
            bg = bg.substring(0, bg.length - 1);
            bg = bg.substring(bg.indexOf("/files"));
            var newUrl = url.modify(bg, size['x'], size['y']);
        }

        else {
            var newUrl = url.modify(obj.attr('src'), size['x'], size['y']);
        }


        var img = $('<img>').attr({'src': newUrl, 'id': 'container'}).appendTo(cadmin_addbox);
        return cadmin_img;
    },
    gallery: function(obj) {

        var cadmin_img = $('<div>').attr({'class': 'cadmin_img'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_img);
        var cadmin_add = $('<div>').attr({'class': 'cadmin_add'}).appendTo(cadmin_img);
        var editbox = $('<div>').attr({'class': 'editimagebox'}).appendTo(cadmin_add);
        var editfrombox = $('<div>').attr({'class': 'editimagebox2'}).appendTo(cadmin_add);
        //var attachments = $('<div>').attr({'class': 'attachments', 'id': 'container'}).appendTo(cadmin_add);
        var cadmin_upload = $('<div>').attr({'class': 'cadmin_upload'}).appendTo(cadmin_add);
        var button_upload = $('<a>').attr({'class': 'button upload pickfiles', 'href': '#', 'id': 'upload_button'}).appendTo(cadmin_upload);
        var button_add = $('<a>').attr({'class': 'button add', 'id': 'browse_files', 'href': '#'}).appendTo(cadmin_upload);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_img);
        var button_save = $('<a>').attr({'class': 'button save', 'href': '#'}).appendTo(cadmin_buttons);
        var button_public = $('<a>').attr({'class': 'button public', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        var divText = $('<div>').attr({'id': 'uploadedtext'}).appendTo(editbox);
        var divText2 = $('<div>').attr({'id': 'uploadedtext'}).appendTo(editfrombox);
        h3.html(language.galleryeditor);
        abort.html(language.cancelchanges);
        button_add.html(language.browse);
        button_upload.html(language.filemanager);
        button_save.html(language.save);
        button_public.html(language.public);
        divText.html(language.imagesonpage);
        divText2.html(language.imagesnotadded);

        var ul = $('<ul>').attr({'id': 'sortable1', 'class': 'connectedSortable'}).appendTo(editbox);
        var ul2 = $('<ul>').attr({'id': 'sortable2', 'class': 'connectedSortable'}).appendTo(editfrombox);
        var x = obj.data('imagex');
        var y = obj.data('imagey');
        var size = url.calculate(x, y, 200, 200);
        $('div[data-key=' + obj.data('key') + '] li:not(.bx-clone) img').each(function() {

            var newUrl = url.modify($(this).attr('src'), size['x'], size['y']);
            var li = $('<li>').attr({'class': 'dropbox'}).appendTo(ul);
            var imagesrc = $('<img>').attr({'src': newUrl, 'data-pos': $(this).data('pos')}).appendTo(li);
            var container = $('<div>').hide().appendTo(imagesrc);
            if (obj.data('opt') === "yes") {
                var banner_sub = $(this).siblings('div');
                container.html(banner_sub.html());
                if (defaultCaption === '') {
                    defaultCaption = banner_sub.html();
                }
                var span = $('<span>').attr({'class': 'toEdit'}).html(language.customize).appendTo(li);
            }

        });
        return cadmin_img;
    },
    editor: function(obj) {
        var cadmin_editor = $('<div>').attr({'class': 'cadmin_editor'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader_editor'}).appendTo(cadmin_editor);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var x = $('<span>').attr({'class': 'close'}).html('&#10006').appendTo(cadmin_boxheader);
        h3.html(language.editor);
        return cadmin_editor;
    },
    galleryEditor: function(obj) {

        var cadmin_editor_gal = $('<div>').attr({'class': 'cadmin_editor_gal'});
        var cadmin_add = $('<div>').attr({'class': 'cadmin_add2'}).appendTo(cadmin_editor_gal);
        var editbox = $('<div>').attr({'class': 'editimagewrapper'}).appendTo(cadmin_add);
        var buttons = $('<div>').attr({'class': 'buttoncontainer'}).appendTo(cadmin_editor_gal);
        var textdiv = $('<div>').attr({'class': 'tinymce'}).appendTo(cadmin_add);
        var label = $('<label>').html(language.link).appendTo(textdiv);
        var hrefInput = $('<input>').attr({'type': 'text', 'id': 'hreflink'}).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var label = $('<label>').html(language.description).appendTo(textdiv);
        var hrefDescInput = $('<input>').attr({'type': 'text', 'id': 'hrefdesc'}).appendTo(textdiv);
        var textarea = $('<textarea>').attr({'id': 'editedtext'}).appendTo(textdiv);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons_editor'}).appendTo(buttons);
        var button_save = $('<a>').attr({'class': 'button editorAdd customButton', 'href': '#'}).html(language.save).appendTo(cadmin_buttons);
        var button_exit = $('<a>').attr({'class': 'button editorCancel customButton', 'href': '#'}).html(language.cancel).appendTo(cadmin_buttons);
        hrefInput.val(obj.children().children('a').attr('href'));
        hrefDescInput.val(obj.children().children('a').text());
        var text = '';
        obj.children().children('p').each(function() {
            text = text + '<p>' + $(this).html() + '</p>';
        });
        textarea.val(text);
        return cadmin_editor_gal;
    },
    video: function(obj) {

        var cadmin_video_edit = $('<div>').attr({'class': 'cadmin_video_edit'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_video_edit);
        var linkdiv = $('<div>').attr({'class': 'linkdiv'}).appendTo(cadmin_video_edit);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_video_edit);
        var button_save_text = $('<a>').attr({'class': 'button save', 'href': '#'}).appendTo(cadmin_buttons);
        var button_public = $('<a>').attr({'class': 'button public', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        var addNew = $('<a>').attr({'href': '#', 'class': 'addInput'}).appendTo(linkdiv);
        addNew.html('Add next');
        var liframe = $('div[data-key=' + obj.data('key') + '] li:not(.bx-clone)');
        liframe.children('div').children('iframe').each(function() {
            var inputHolder = $('<div>').appendTo(linkdiv);
            var iframe = $('<iframe>').attr({'src': $(this).attr('src'), 'class': 'videopreview'}).appendTo(inputHolder);
            var input2 = $('<input>').attr({'class': 'videoinput', 'type': 'text', 'size': '100', 'placeholder': 'Image Link'}).appendTo(inputHolder);
            var input3 = $('<input>').attr({'class': 'videodesc', 'type': 'text', 'size': '100', 'placeholder': 'Image Link'}).appendTo(inputHolder);
            var remove = $('<a>').attr({'href': '#', 'class': 'removeInput'}).appendTo(inputHolder);
            remove.html('Remove');
            input2.val($(this).attr('src'));
            input3.val($(this).parent().siblings('h3').html());
        });
        h3.html(language.videoeditor);
        abort.html(language.cancelchanges);
        button_save_text.html(language.save);
        button_public.html(language.public);
        return cadmin_video_edit;
    },
    videoInput: function() {
        var inputHolder = $('<div>').appendTo('.linkdiv');
        var iframe = $('<iframe>').attr({'class': 'videopreview'}).appendTo(inputHolder);
        var input2 = $('<input>').attr({'class': 'videoinput', 'type': 'text', 'size': '100', 'placeholder': 'Image Link'}).appendTo(inputHolder);
        var input3 = $('<input>').attr({'class': 'videodesc', 'type': 'text', 'size': '100', 'placeholder': 'Image Link'}).appendTo(inputHolder);
        var remove = $('<a>').attr({'href': '#', 'class': 'removeInput'}).appendTo(inputHolder);
        remove.html(language.remove);
        input.trackButtons();
    },
    history: function() {

        var cadmin_history = $('<div>').attr({'class': 'cadmin_history'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_history);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        h3.html(language.history);
        var span = $('<span>').html(language.waitfilesloading).attr({'class': 'loaderhistory'}).appendTo(cadmin_history);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo('.cadmin_boxheader');
        abort.html(language.cancelchanges);
        return cadmin_history;
    },
    historylist: function(data) {
        scale.setSizes();
        $('.loaderhistory').html('');
        var ol = $('<ol>').appendTo('.cadmin_history');
        if (data) {
            $.each(data.history, function(key, val) {
                var li = $('<li>').appendTo(ol);
                var spantime = $('<span>').attr({'class': 'date'}).appendTo(li);
                var spanauthor = $('<span>').attr({'class': 'author'}).appendTo(li);
                var arevert = $('<a>').attr({'class': 'revert li', 'href': '#'}).appendTo(li);
                var apreview = $('<a>').attr({'class': 'preview li', 'href': '#'}).appendTo(li);
                var preview = $('<div>').attr({'class': 'preview'}).appendTo(li);
                var newDate = new Date(val.cadmin_date * 1000);
                var newTime = newDate.toGMTString();
                spantime.html(language.date + newTime);
                spanauthor.html(language.author + val.cadmin_author);
                arevert.html(language.revert);
                apreview.html(language.preview);
                //preview.html(val.cadmin_value);
                var obj = cadmin.getObject();
                switch (obj.data('type')) {
                    case 'text':
                        var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                        wrapper.html(val.cadmin_value);
                        break;
                    case 'list':
                        var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                        var table = $('<table>').appendTo(wrapper);

                        if (val.cadmin_value.thead) {
                            var thead = $('<thead>').appendTo(table);
                            $.each(val.cadmin_value.thead, function(k, v) {
                                var tr = $('<tr>').appendTo(thead);
                                $.each(v, function(a, b) {
                                    var td = $('<td>').html(b).appendTo(tr);
                                });
                            });
                        }
                        var tbody = $('<tbody>').appendTo(table);
                        $.each(val.cadmin_value.table, function(k, v) {
                            var tr = $('<tr>').appendTo(tbody);
                            $.each(v, function(a, b) {
                                var td = $('<td>').html(b).appendTo(tr);
                            });
                        });

                        break;
                    case 'image':
                        var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                        var x = obj.data('imagex');
                        var y = obj.data('imagey');
                        if (obj.data('imagex') > 200 || obj.data('imagex') > 200) {
                            var size = url.calculate(x, y, 200, 200);
                            var newUrl2 = url.newUrl(val.cadmin_value, size['x'], size['y']);
                        }
                        else {
                            var newUrl2 = url.newUrl(val.cadmin_value, obj.data('imagex'), obj.data('imagex'));
                        }
                        var img = $('<img>').attr({'class': '', 'src': newUrl2}).appendTo(wrapper);
                        break;
                    case 'gallery':
                        $.each(val.cadmin_value, function(k, v) {
                            var x = obj.data('imagex');
                            var y = obj.data('imagey');
                            if (obj.data('imagex') > 200 || obj.data('imagex') > 200) {
                                var size = url.calculate(x, y, 200, 200);
                                var newUrl2 = url.newUrl(v.image, size['x'], size['y']);
                            }
                            else {
                                var newUrl2 = url.newUrl(v.image, obj.data('imagex'), obj.data('imagex'));
                            }
                            var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                            var img = $('<img>').attr({'class': '', 'src': newUrl2}).appendTo(wrapper);
                            var text = $('<p>').html(v.text).appendTo(wrapper);
                            var a = $('<a>').attr({'href': v.link}).appendTo(wrapper);
                            a.html(v.desc);
                        });
                        break;
                    case 'video':
                        $.each(val.cadmin_value, function(k, v) {

                            var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                            var iframe = $('<iframe>').attr({'src': v.link, 'class': 'videopreview'}).appendTo(wrapper);
                            var span = $('<span>').attr({'class': 'videodeschistory'}).appendTo(wrapper);
                            span.html(v.desc);
                        });
                        break;
                }
                input.trackButtons();
            })
        }
        else {
            $('.loaderhistory').html(language.nohistory);
        }
    },
    help: function() {
        var cadmin_help = $('<div>').attr({'class': 'cadmin_help'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_help);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        h3.html(language.help);
        //abort.html(language.cancelchanges);
        return cadmin_help;
    },
    menu: function(type) {

        var ul = $('<ul>');
        switch (type) {
            case 'text':
                var li1 = $('<li>').appendTo(ul);
                li1.addClass('active');
                var li1a = $('<a>').attr({'href': 'text', 'class': 'menu text'}).appendTo(li1);
                var li1span = $('<span>').html(language.menutext).appendTo(li1a);
                var li1small = $('<small>').html(language.menutextsmall).appendTo(li1a);
                break;
            case 'list':
                var li1 = $('<li>').appendTo(ul);
                li1.addClass('active');
                var li1a = $('<a>').attr({'href': 'list', 'class': 'menu text'}).appendTo(li1);
                var li1span = $('<span>').html(language.menulist).appendTo(li1a);
                var li1small = $('<small>').html(language.menulistsmall).appendTo(li1a);
                break;
            case 'image':
                var li2 = $('<li>').appendTo(ul);
                li2.addClass('active');
                var li2a = $('<a>').attr({'href': 'image', 'class': 'menu img'}).appendTo(li2);
                var li2span = $('<span>').html(language.menuimage).appendTo(li2a);
                var li2small = $('<small>').html(language.menuimagesmall).appendTo(li2a);
                break;
            case 'gallery':
                var li2 = $('<li>').appendTo(ul);
                li2.addClass('active');
                var li2a = $('<a>').attr({'href': 'gallery', 'class': 'menu img'}).appendTo(li2);
                var li2span = $('<span>').html(language.menugallery).appendTo(li2a);
                var li2small = $('<small>').html(language.menugallerysmall).appendTo(li2a);
                break;
            case 'video':
                var li3 = $('<li>').appendTo(ul);
                li3.addClass('active');
                var li3a = $('<a>').attr({'href': 'video', 'class': 'menu video'}).appendTo(li3);
                var li3span = $('<span>').html(language.menuvideo).appendTo(li3a);
                var li3small = $('<small>').html(language.menuvideosmall).appendTo(li3a);
                break;
        }

        var li4 = $('<li>').appendTo(ul);
        //var li5 = $('<li>').appendTo(ul);
        var li6 = $('<li>').appendTo(ul);
        var li7 = $('<li>').appendTo(ul);
        var li8 = $('<li>').appendTo(ul);
        var li4a = $('<a>').attr({'href': 'history', 'class': 'menu history'}).appendTo(li4);
        var li4span = $('<span>').html(language.menuhistory).appendTo(li4a);
        var li4small = $('<small>').html(language.menuhistorysmall).appendTo(li4a);
        var li7a = $('<a>').attr({'href': 'help', 'class': 'menu help'}).appendTo(li7);
        var li7span = $('<span>').html(language.menuhelp).appendTo(li7a);
        var li7small = $('<small>').html(language.menuhelpsmall).appendTo(li7a);
        var li8a = $('<a>').attr({'href': 'exit', 'class': 'menu exit last'}).appendTo(li8);
        var li8span = $('<span>').html(language.menuexit).appendTo(li8a);
        var li8small = $('<small>').html(language.menuexitsmall).appendTo(li8a);
        return ul;
    },
    external: function(obj) {
        if (obj.data('type') === 'text') {
            if (!(obj.data('textarea') === 'yes')) {
                tinymcecustom.start(obj);
            }
        }
        if (obj.data('type') === 'gallery') {
            pluploadcustom.gallery(obj);
        }
        if (obj.data('type') === 'image') {
            pluploadcustom.image(obj);
        }
        if (obj.data('type') === 'list') {
            listeditor.init();
        }
    },
    startSortable: function(max) {
        $('#sortable1').sortable({connectWith: ".connectedSortable",
            dropOnEmpty: true,
            cancel: "li:only-child",
            receive: function(event, ui) {
                //max nubmer from data-max
                if ($(this).children().length > max) {
                    //ui.sender: will cancel the change.
                    //Useful in the 'receive' callback.
                    $(ui.sender).sortable('cancel');
                }
                var obj = cadmin.getObject();
                if (obj.data('opt') === "yes") {
                    var span = $('<span>').attr({'class': 'toEdit'}).html(language.customize).appendTo(ui.item);
                    input.trackButtons();
                    if (ui.item.children('img').children('div').length === 0) {
                        var container = $('<div>').appendTo(ui.item.children('img'));
                        container.html(defaultCaption);
                    }
                }

            }}).disableSelection();
        $('#sortable2').sortable({connectWith: ".connectedSortable",
            dropOnEmpty: true,
            receive: function(event, ui) {

                ui.item.children('span').remove();
            }}).disableSelection();
        $('#sortable2').css('position', 'fixed');



    },
    popupWindow: function(text) {
        var popup = $('<div>').attr({'class': 'popup', 'title': language.popuptitle}).appendTo('.cadmin_panel');
        popup.html(text);
        popup.fadeOut(3000, function() {
            popup.remove();
        });
    },
    fileManager: function() {

        var cadmin_manager = $('<div>').attr({'class': 'cadmin_manager'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader_manager'}).appendTo(cadmin_manager);
        var cadmin_filter = $('<div>').attr({'class': 'cadmin_filter'}).appendTo(cadmin_manager);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var h3_filter = $('<h3>').appendTo(cadmin_filter);
        var x = $('<span>').attr({'class': 'close'}).html('&#10006').appendTo(cadmin_boxheader);
        h3.html(language.filemanagertitle);
        //h3_filter.html('Filter by:');
        var file = $('<div>').attr({'class': 'fileContainer'}).appendTo(cadmin_manager);
        return cadmin_manager;
    },
    editlink: function() {
        var span = $('<span>').attr({'class': 'videobtn'}).html(language.editvideos).appendTo('.videoeditable');
        var span = $('<span>').attr({'class': 'backgroundbtn'}).html(language.editbackground).prependTo('.backgroundeditable');
    },
    settings: function() {
        var cadmin_content = $('<div>').attr({'class': 'cadmin_content_settings', 'hidden': 'true'});
        var cadmin_top = $('<div>').attr({'class': 'cadmin_top'}).appendTo(cadmin_content);
        var cadmin_form = $('<div>').attr({'class': 'cadmin_form'}).appendTo(cadmin_content);
        var cadmin_leftcol = $('<div>').attr({'class': 'cadmin_leftcol_settings'}).appendTo(cadmin_form);
        var cadmin_rightcol = $('<div>').attr({'class': 'cadmin_rightcol_settings'}).appendTo(cadmin_form);
        // left
        var cadmin_leftcol_sub = $('<div>').attr({'class': 'cadmin_leftcol_sub_settings'}).appendTo(cadmin_leftcol);
        var cadmin_top_img = $('<img>').attr({'alt': language.cms, 'src': '/img/cadmin/logo.png'}).appendTo(cadmin_top);
        var cadmin_top_h2 = $('<h2>').appendTo(cadmin_top);
        cadmin_top_h2.html(language.adminpanel);
        //menu:
        var ul = $('<ul>').appendTo(cadmin_rightcol);
        var li1 = $('<li>').appendTo(ul);
        li1.addClass('active');
        var li1a = $('<a>').attr({'href': 'general', 'class': 'menu general'}).appendTo(li1);
        var li1span = $('<span>').html(language.general).appendTo(li1a);
        var li1small = $('<small>').html(language.settings).appendTo(li1a);

        var li2 = $('<li>').appendTo(ul);
        var li2a = $('<a>').attr({'href': 'current', 'class': 'menu current'}).appendTo(li2);
        var li2span = $('<span>').html(language.current).appendTo(li2a);
        var li2small = $('<small>').html(language.settings).appendTo(li2a);

//        var li2 = $('<li>').appendTo(ul);
//        var li2a = $('<a>').attr({'href': 'access', 'class': 'menu access'}).appendTo(li2);
//        var li2span = $('<span>').html('Access').appendTo(li2a);
//        var li2small = $('<small>').html('Settings').appendTo(li2a);

        var li3 = $('<li>').appendTo(ul);
        var li3a = $('<a>').attr({'href': 'summary', 'class': 'menu summary'}).appendTo(li3);
        var li3span = $('<span>').html(language.summary).appendTo(li3a);
        var li3small = $('<small>').html(language.changes).appendTo(li3a);


        var li4 = $('<li>').appendTo(ul);
        var li4a = $('<a>').attr({'href': 'pages', 'class': 'menu pages'}).appendTo(li4);
        var li4span = $('<span>').html(language.pages).appendTo(li4a);
        var li4small = $('<small>').html(language.addremove).appendTo(li4a);

        var li5 = $('<li>').appendTo(ul);
        var li5a = $('<a>').attr({'href': 'exit', 'class': 'menu exit'}).appendTo(li5);
        var li5span = $('<span>').html(language.menuexit).appendTo(li5a);
        var li5small = $('<small>').html(language.settings).appendTo(li5a);


        return cadmin_content;
    },
    general: function() {
        var cadmin_settings = $('<div>').attr({'class': 'cadmin_settings'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_settings);
        var textdiv = $('<div>').attr({'class': 'cadmin_set'}).appendTo(cadmin_settings);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_settings);
        var button_save_text = $('<a>').attr({'class': 'button saveGeneral customButton', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        h3.html(language.general);
        button_save_text.html(language.save);

        var titles = $('<span>').html(language.pagetitle).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var descs = $('<span>').html(language.pagedesc).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var keywordss = $('<span>').html(language.pagekeywords).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var title = $('<input>').attr({'id': 'title'}).appendTo(titles);
        var desc = $('<input>').attr({'id': 'desc'}).appendTo(descs);
        var keywords = $('<input>').attr({'id': 'keywords'}).appendTo(keywordss);

        return cadmin_settings;

    },
    current: function() {
        var cadmin_settings = $('<div>').attr({'class': 'cadmin_settings'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_settings);
        var textdiv = $('<div>').attr({'class': 'cadmin_set'}).appendTo(cadmin_settings);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_settings);
        var button_save_text = $('<a>').attr({'class': 'button saveCurrent customButton', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        h3.html(language.current);
        button_save_text.html(language.save);
        var titles = $('<span>').html(language.pagekeepmain).appendTo(textdiv);
        var checkbox = $('<input>').attr({'class': 'keepset', 'type': 'checkbox', 'value': 'keep', 'name': 'keepset'}).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var titles = $('<span>').html(language.currentpagetitle).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var descs = $('<span>').html(language.currentpagedesc).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var keywordss = $('<span>').html(language.currentpagekeywords).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var title = $('<input>').attr({'id': 'title'}).appendTo(titles);
        var desc = $('<input>').attr({'id': 'desc'}).appendTo(descs);
        var keywords = $('<input>').attr({'id': 'keywords'}).appendTo(keywordss);
        return cadmin_settings;

    },
    summary: function() {
        var cadmin_settings = $('<div>').attr({'class': 'cadmin_settings'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_settings);
        var textdiv = $('<div>').attr({'class': 'cadmin_set'}).appendTo(cadmin_settings);
        var sum = $('<div>').attr({'class': 'cadmin_sum'}).appendTo(textdiv);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_settings);
        var button_save_text = $('<a>').attr({'class': 'button saveSummary customButton', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        h3.html(language.summary);
        button_save_text.html(language.public);
        sum.html(language.sessionloading);
        return cadmin_settings;
    },
    pages: function() {
        var cadmin_settings = $('<div>').attr({'class': 'cadmin_settings'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_settings);
        var textdiv = $('<div>').attr({'class': 'cadmin_set'}).appendTo(cadmin_settings);
        //var sum = $('<div>').attr({'class': 'cadmin_sum'}).appendTo(textdiv);
        var tree = $('<div>').attr({'class': 'cadmin_tree'}).appendTo(textdiv);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_settings);
        var button_save_text = $('<a>').attr({'class': 'button savePages customButton', 'href': '#'}).appendTo(cadmin_buttons);
        var button_cancel_text = $('<a>').attr({'class': 'button cancelPages customButton', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        h3.html(language.pages);
        button_save_text.html(language.public);
        button_cancel_text.html(language.cancel);
        //sum.html('Wait, session is loading...');
        var div = $('<div>').attr({'id': 'mmenu'}).appendTo(textdiv)
        var div2 = $('<div>').attr({'class': 'pageedit'}).appendTo(textdiv)
        var div3 = $('<div>').attr({'class': 'pageedit2'}).appendTo(textdiv)
        var input = $('<input>').attr({'id': 'add_default', 'type': 'button'}).css('display', 'block').css('float', 'left').val(language.addpage).appendTo(div);
        var input = $('<input>').attr({'id': 'rename', 'type': 'button'}).css('display', 'block').css('float', 'left').val(language.renamepage).appendTo(div);
        var input = $('<input>').attr({'id': 'remove', 'type': 'button'}).css('display', 'block').css('float', 'left').val(language.removepage).appendTo(div);
        //var input = $('<input>').attr({'id': 'undo', 'type': 'button'}).css('display', 'block').css('float', 'left').val('Undo last').appendTo(div);
        return cadmin_settings;

    },
    imageHref: function(data) {
        var input = $('<select>').insertBefore('.cadmin_upload');
        $.each(data, function(k, v) {
            var option = $('<option>').attr('value', v.value).html(v.title).appendTo(input);
        });
        input.change(function() {
            $('.imagehref').val($(this).val());
        });
    }
};
