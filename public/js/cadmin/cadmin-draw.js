//default slider caption
defaultCaption = '';
var draw = {
    bar: function() {
        var cadmin_panel = $('<div>').attr({'class': 'cadmin_panel'});
        var cadmin_bar = $('<div>').attr({'class': 'cadmin_bar'}).appendTo(cadmin_panel);
        var cadmin_header = $('<div>').attr({'class': 'cadmin_header'}).appendTo(cadmin_bar);
        var span = $('<span>').attr({'class': 'cadmin_bar_title'}).appendTo(cadmin_header);
        var b = $('<b>').appendTo(cadmin_header);
        var up_logout = $('<a>').attr({'class': 'up settings', 'href': '/cadmin/logout'}).appendTo(cadmin_header);
        var up_settings = $('<a>').attr({'class': 'up logout', 'href': ''}).appendTo(cadmin_header);
        span.html('You are in');
        up_settings.html('Settings');
        up_logout.html('Logout');
        span.html('You are in');
        b.html('&nbsp Website Administration Panel');
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
        var cadmin_top_img = $('<img>').attr({'alt': 'Cadmin - Content Menagement System', 'src': '/img/cadmin/logo.png'}).appendTo(cadmin_top);
        var cadmin_top_h2 = $('<h2>').appendTo(cadmin_top);
        cadmin_top_h2.html('Administrator Panel');
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
        h3.html('Text editor');
        abort.html('cancel changes');
        button_save_text.html('Save');
        button_public.html('Public');
        textarea.html(obj.html());
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
        var button_add = $('<a>').attr({'class': 'button add pickfiles browse_files', 'href': '#', 'id': 'browse_files'}).appendTo(cadmin_upload);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_img);
        var button_save = $('<a>').attr({'class': 'button save', 'href': '#'}).appendTo(cadmin_buttons);
        var button_public = $('<a>').attr({'class': 'button public', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        //var divText = $('<div>').attr({'id': 'uploadedtext'}).appendTo(cadmin_add);
        h3.html('Image editor');
        abort.html('cancel changes');
        button_add.html('Browse files');
        button_upload.html('Open File Manager');
        button_save.html('Save');
        button_public.html('Public');
        //divText.html('Drop file on image or browse files:');

        var x = obj.data('imagex');
        var y = obj.data('imagey');
        var size = url.calculate(x, y, 500, 500);
        if (x < 500 && y < 500) {
            size['x'] = x;
            size['y'] = y;
        }

        var newUrl = url.modify(obj.attr('src'), size['x'], size['y']);
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
        var button_add = $('<a>').attr({'class': 'button add pickfiles plupload_add', 'id': 'browse_files', 'href': '#'}).appendTo(cadmin_upload);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons'}).appendTo(cadmin_img);
        var button_save = $('<a>').attr({'class': 'button save', 'href': '#'}).appendTo(cadmin_buttons);
        var button_public = $('<a>').attr({'class': 'button public', 'href': '#'}).appendTo(cadmin_buttons);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        //var filelist = $('<div>').attr({'id': 'dropbox', 'class': 'uploader'}).appendTo(attachments);
        var divText = $('<div>').attr({'id': 'uploadedtext'}).appendTo(editbox);
        var divText2 = $('<div>').attr({'id': 'uploadedtext'}).appendTo(editfrombox);
        h3.html('Gallery editor');
        abort.html('cancel changes');
        button_add.html('Browse files');
        button_upload.html('Open File Manager');
        button_save.html('Save');
        button_public.html('Public');
        divText.html('images on page:');
        divText2.html('images not added:');
        //filelist.html('drop here');

        var ul = $('<ul>').attr({'id': 'sortable1', 'class': 'connectedSortable'}).appendTo(editbox);
        var ul2 = $('<ul>').attr({'id': 'sortable2', 'class': 'connectedSortable'}).appendTo(editfrombox);
        var x = obj.data('imagex');
        var y = obj.data('imagey');
        var size = url.calculate(x, y, 200, 200);
        $('div[data-key=' + obj.data('key') + '] img').each(function() {

            var newUrl = url.modify($(this).attr('src'), size['x'], size['y']);
            var li = $('<li>').attr({'class': 'dropbox'}).appendTo(ul);
            var imagesrc = $('<img>').attr({'src': newUrl, 'data-pos': $(this).data('pos')}).appendTo(li);
            var container = $('<div>').hide().appendTo(imagesrc);
            var banner_sub = $(this).siblings('div');
            container.html(banner_sub.html());
            if (defaultCaption === '') {
                defaultCaption = banner_sub.html();
            }
            var span = $('<span>').attr({'class': 'toEdit'}).html('Customize slide').appendTo(li);
        });
        return cadmin_img;
    },
    editor: function(obj) {
        var cadmin_editor = $('<div>').attr({'class': 'cadmin_editor'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader_editor'}).appendTo(cadmin_editor);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var x = $('<span>').attr({'class': 'close'}).html('&#10006').appendTo(cadmin_boxheader);
        h3.html('Editor');
        return cadmin_editor;
    },
    galleryEditor: function(obj) {

        var cadmin_editor_gal = $('<div>').attr({'class': 'cadmin_editor_gal'});
        var cadmin_add = $('<div>').attr({'class': 'cadmin_add2'}).appendTo(cadmin_editor_gal);
        var editbox = $('<div>').attr({'class': 'editimagewrapper'}).appendTo(cadmin_add);
        var buttons = $('<div>').attr({'class': 'buttoncontainer'}).appendTo(cadmin_editor_gal);
        var textdiv = $('<div>').attr({'class': 'tinymce'}).appendTo(cadmin_add);
        var label = $('<label>').html('Link:').appendTo(textdiv);
        var hrefInput = $('<input>').attr({'type': 'text', 'id': 'hreflink'}).appendTo(textdiv);
        var br = $('<br>').appendTo(textdiv);
        var label = $('<label>').html('Description:').appendTo(textdiv);
        var hrefDescInput = $('<input>').attr({'type': 'text', 'id': 'hrefdesc'}).appendTo(textdiv);
        var textarea = $('<textarea>').attr({'id': 'editedtext'}).appendTo(textdiv);
        var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons_editor'}).appendTo(buttons);
        var button_save = $('<a>').attr({'class': 'button editorAdd customButton', 'href': '#'}).html('Save').appendTo(cadmin_buttons);
        var button_exit = $('<a>').attr({'class': 'button editorCancel customButton', 'href': '#'}).html('Cancel').appendTo(cadmin_buttons);
        hrefInput.val(obj.children().children('a').attr('href'));
        hrefDescInput.val(obj.children().children('a').text());
        textarea.val(obj.children().children('p').html());
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
        h3.html('Video editor');
        abort.html('cancel changes');
        button_save_text.html('Save');
        button_public.html('Public');
        return cadmin_video_edit;
    },
    videoInput: function() {
        var inputHolder = $('<div>').appendTo('.linkdiv');
        var iframe = $('<iframe>').attr({'class': 'videopreview'}).appendTo(inputHolder);
        var input2 = $('<input>').attr({'class': 'videoinput', 'type': 'text', 'size': '100', 'placeholder': 'Image Link'}).appendTo(inputHolder);
        var input3 = $('<input>').attr({'class': 'videodesc', 'type': 'text', 'size': '100', 'placeholder': 'Image Link'}).appendTo(inputHolder);
        var remove = $('<a>').attr({'href': '#', 'class': 'removeInput'}).appendTo(inputHolder);
        remove.html('Remove');
        input.trackButtons();
    },
    history: function() {

        var cadmin_history = $('<div>').attr({'class': 'cadmin_history'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_history);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        h3.html('History');
        var span = $('<span>').html('wait.. files are loading..').attr({'class': 'loaderhistory'}).appendTo(cadmin_history);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo('.cadmin_boxheader');
        abort.html('cancel changes');
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
                var newTime = newDate.toGMTString()
                spantime.html(' date: ' + newTime);
                spanauthor.html(' autor: ' + val.cadmin_author);
                arevert.html('revert');
                apreview.html('preview');
                //preview.html(val.cadmin_value);
                var obj = cadmin.getObject();
                switch (obj.data('type')) {
                    case 'text':
                        var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                        wrapper.html(val.cadmin_value);
                        break;
                    case 'image':
                        var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                        var x = obj.data('imagex');
                        var y = obj.data('imagey');
                        if (obj.data('imagex') > 200 || obj.data('imagex') > 200) {
                            var size = url.calculate(x, y, 200, 200);
                            var newUrl = url.modify(val.cadmin_value, size['x'], size['y']);
                        }
                        else {
                            var newUrl = url.modify(val.cadmin_value, obj.data('imagex'), obj.data('imagex'));
                        }
                        var img = $('<img>').attr({'class': '', 'src': newUrl}).appendTo(wrapper);
                        break;
                    case 'gallery':
                        $.each(val.cadmin_value, function(k, v) {
                            var x = obj.data('imagex');
                            var y = obj.data('imagey');
                            if (obj.data('imagex') > 200 || obj.data('imagex') > 200) {
                                var size = url.calculate(x, y, 200, 200);
                                var newUrl = url.modify(v.image, size['x'], size['y']);
                            }
                            else {
                                var newUrl = url.modify(v.image, obj.data('imagex'), obj.data('imagex'));
                            }
                            var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(preview);
                            var img = $('<img>').attr({'class': '', 'src': newUrl}).appendTo(wrapper);
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
            $('.loaderhistory').html('no history');
        }
    },
    help: function() {
        var cadmin_help = $('<div>').attr({'class': 'cadmin_help'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_help);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
        h3.html('Help');
        abort.html('cancel changes');
        return cadmin_help;
    },
//    import: function() {
//        var cadmin_import = $('<div>').attr({'class': 'cadmin_import'});
//        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_import);
//        var h3 = $('<h3>').appendTo(cadmin_boxheader);
//        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
//        h3.html('Import');
//        abort.html('cancel changes');
//        return cadmin_import;
//    },
//    export: function() {
//        var cadmin_export = $('<div>').attr({'class': 'cadmin_export'});
//        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader'}).appendTo(cadmin_export);
//        var h3 = $('<h3>').appendTo(cadmin_boxheader);
//        var abort = $('<a>').attr({'href': 'cancel', 'class': 'delete_change link'}).appendTo(cadmin_boxheader);
//        h3.html('Export');
//        abort.html('cancel changes');
//        return cadmin_export;
//    },
    menu: function(type) {

        var ul = $('<ul>');
        switch (type) {
            case 'text':
                var li1 = $('<li>').appendTo(ul);
                li1.addClass('active');
                var li1a = $('<a>').attr({'href': 'text', 'class': 'menu text'}).appendTo(li1);
                var li1span = $('<span>').html('Edit Text').appendTo(li1a);
                var li1small = $('<small>').html('text editor').appendTo(li1a);
        }

        switch (type) {
            case 'image':
                var li2 = $('<li>').appendTo(ul);
                li2.addClass('active');
                var li2a = $('<a>').attr({'href': 'image', 'class': 'menu img'}).appendTo(li2);
                var li2span = $('<span>').html('Edit Image').appendTo(li2a);
                var li2small = $('<small>').html('image editor').appendTo(li2a);
        }

        switch (type) {
            case 'gallery':
                var li2 = $('<li>').appendTo(ul);
                li2.addClass('active');
                var li2a = $('<a>').attr({'href': 'gallery', 'class': 'menu img'}).appendTo(li2);
                var li2span = $('<span>').html('Edit Gallery').appendTo(li2a);
                var li2small = $('<small>').html('Gallery editor').appendTo(li2a);
        }

        switch (type) {
            case 'video':
                var li3 = $('<li>').appendTo(ul);
                li3.addClass('active');
                var li3a = $('<a>').attr({'href': 'video', 'class': 'menu video'}).appendTo(li3);
                var li3span = $('<span>').html('Edit video').appendTo(li3a);
                var li3small = $('<small>').html('video editor').appendTo(li3a);
        }

        var li4 = $('<li>').appendTo(ul);
        //var li5 = $('<li>').appendTo(ul);
        var li6 = $('<li>').appendTo(ul);
        var li7 = $('<li>').appendTo(ul);
        var li8 = $('<li>').appendTo(ul);
        var li4a = $('<a>').attr({'href': 'history', 'class': 'menu history'}).appendTo(li4);
        var li4span = $('<span>').html('History').appendTo(li4a);
        var li4small = $('<small>').html('Check history').appendTo(li4a);
//        var li5a = $('<a>').attr({'href': 'import', 'class': 'menu import'}).appendTo(li5);
//        var li5span = $('<span>').html('Import').appendTo(li5a);
//        var li5small = $('<small>').html('import settings').appendTo(li5a);
//        var li6a = $('<a>').attr({'href': 'export', 'class': 'menu export'}).appendTo(li6);
//        var li6span = $('<span>').html('Export').appendTo(li6a);
//        var li6small = $('<small>').html('export settings').appendTo(li6a);
        var li7a = $('<a>').attr({'href': 'help', 'class': 'menu help'}).appendTo(li7);
        var li7span = $('<span>').html('Help').appendTo(li7a);
        var li7small = $('<small>').html('Read docs').appendTo(li7a);
        var li8a = $('<a>').attr({'href': 'exit', 'class': 'menu exit last'}).appendTo(li8);
        var li8span = $('<span>').html('Exit').appendTo(li8a);
        var li8small = $('<small>').html('Exit Cadmin').appendTo(li8a);
        return ul;
    },
    external: function(obj) {
        if (obj.data('type') == 'text') {
            tinymcecustom.start(obj);
        }
        if (obj.data('type') == 'gallery') {
            pluploadcustom.gallery(obj);
        }
        if (obj.data('type') == 'image') {
            pluploadcustom.image(obj);
        }
    },
    startSortable: function(max) {
        $('#sortable1').sortable({connectWith: ".connectedSortable",
            dropOnEmpty: true,
            cancel: "li:only-child",
            receive: function(event, ui) {
// so if > 10
                if ($(this).children().length > max) {
//ui.sender: will cancel the change.
//Useful in the 'receive' callback.
                    $(ui.sender).sortable('cancel');
                }
                var span = $('<span>').attr({'class': 'toEdit'}).html('Customize slide').appendTo(ui.item);
                input.trackButtons();
                if (ui.item.children().children('img').length == 0) {
                    var container = $('<div>').appendTo(ui.item.children('img'));
                    container.html(defaultCaption);
                }

            }}).disableSelection();
        $('#sortable2').sortable({connectWith: ".connectedSortable",
            dropOnEmpty: true,
            receive: function(event, ui) {

                ui.item.children('span').remove();
            }}).disableSelection();
        $('#sortable2').css('position', 'fixed');
//        $(document).on('dragenter', function(event) {
// 
//            $('#sortable2').addClass('dropable');
//
//        });


    },
    popupWindow: function(text) {
        var popup = $('<div>').attr({'class': 'popup', 'title': 'Attention!'}).appendTo('.cadmin_panel');
        popup.html(text);
        popup.dialog({zIndex: '100002'});
    },
    fileManager: function() {

        var cadmin_manager = $('<div>').attr({'class': 'cadmin_manager'});
        var cadmin_boxheader = $('<div>').attr({'class': 'cadmin_boxheader_manager'}).appendTo(cadmin_manager);
        var cadmin_filter = $('<div>').attr({'class': 'cadmin_filter'}).appendTo(cadmin_manager);
        var h3 = $('<h3>').appendTo(cadmin_boxheader);
        var h3_filter = $('<h3>').appendTo(cadmin_filter);
        var x = $('<span>').attr({'class': 'close'}).html('&#10006').appendTo(cadmin_boxheader);
        h3.html('File Manager');
        //h3_filter.html('Filter by:');
        var file = $('<div>').attr({'class': 'fileContainer'}).appendTo(cadmin_manager);
        return cadmin_manager;
    },
    editlink: function() {
        var span = $('<span>').attr({'class': 'videobtn'}).html('EDIT VIDEOS').appendTo('.videoeditable');
    }
};