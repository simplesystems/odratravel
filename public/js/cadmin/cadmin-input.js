var ENTER_KEY = 13;
var SPACE_KEY = 32;
var BACKSPACE_KEY = 8;
var input = {
    MouseStart: function() {
        $(".editable").mouseenter(function() {
            $(this).addClass('cpadminover');
        });
        $(".editable").mouseleave(function() {
            $(this).removeClass('cpadminover');
        });
        $(".editable").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.start($(this), 1000);
//            var top = $('html').scrollTop();
//            $('.cadmin_top').css('margin-top',top);
        });
        $(".videobtn").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.start($(this).parent(), 1000);
        });

    },
    MouseMenu: function() {
        $('.cadmin_rightcol li').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.menu($(this));
        });
    },
    trackButtons: function() {
        $('a[href="cancel"]').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.cancel();
        });
        $('.save').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.save();
        });
        $('.public').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.publish();
        });
        $('.removeInput').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).parent().remove();
        });
        $('.addInput').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            draw.videoInput();
        });
        $('#upload_button').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.fileManager();
        });
        $('.close').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.cadmin_manager').remove();
            $('.cadmin_editor').remove();
        });
        $('.fileManagerAdd').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            fileManager.add();
        });
        $('.fileManagerCancel').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.cadmin_manager').remove();
        });
        $('.editorAdd').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            editor.galleryadd();
            $('.cadmin_add img').removeClass('current');
            $('.cadmin_editor').remove();
        });
        $('.editorCancel').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('.cadmin_add img').removeClass('current');
            $('.cadmin_editor').remove();
        });
        $('.unselected').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('selected');
            $(this).removeClass('unselected');
            var obj = cadmin.getObject();
            if (obj.data('type') == 'image') {
                fileManager.addImage($(this));
            }
            input.trackButtons();
        });
        $('.selected').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('unselected');
            $(this).removeClass('selected');
            input.trackButtons();
        });
        $('.remove_tag').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            fileManager.removetag($(this).parent());
        });
        $(".toEdit").unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var image = $(this).siblings('img');
            image.addClass('current');
            editor.gallery(image);
        });
        $(".videoinput").unbind('change').change(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).siblings('iframe').attr({'src': $(this).val()});
        });
        $("a.preview").unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
            $(this).siblings('div').slideToggle('slow', function() {
                // Animation complete.
            });
        });
        $("a.revert").unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var obj = cadmin.getObject();
            var type = obj.data('type');
            var div = $(this).siblings('.preview');
            switch (type) {
                case 'text':
                    replace.historyText(div)
                    break;
                case 'image':
                    replace.historyImage(div)
                    break;
                case 'gallery':
                    replace.historyGallery(div)
                    break;
                case 'video':
                    replace.historyVideo(div)
                    break;
            }
            session.clearSession();
            // var str = cadmin.getObject();
            // $('.cadmin_content').remove();
            //cadmin.start(str,1);
        });
        $(document).on('dragover', function(event) {

            $('#sortable2').addClass('dropable');
            $('#container').addClass('dropable');

        });
        $('.cadmin_panel').on('dragend', function(event) {

            $('#sortable2').removeClass('dropable');
            $('#container').removeClass('dropable');

        });
        $('.cadmin_panel').on('drop', function(event) {

            $('#sortable2').removeClass('dropable');
            $('#container').removeClass('dropable');

        });

        $('.cadmin_panel').on('dragleave', function(event) {

            $('#sortable2').removeClass('dropable');
            $('#container').removeClass('dropable');

        });
    },
    trackKeys: function() {
        $('.inputform').keypress('click', function(e) {
            $(this).removeClass('not_valid');
            if (e.keyCode == ENTER_KEY) {
                //enter
                fileManager.addtag($(this));
            }
            if (e.keyCode == BACKSPACE_KEY) {
                if ($(this).val() == '') {
                    var parent = $(this).parent();
                    var tags = parent.siblings(('.tag'));
                    if (tags.length > 0) {
                        fileManager.removetag(tags.last());
                    }
                    // user has pressed backspace
                }
            }
            if (e.keyCode == SPACE_KEY) {
                // user has pressed space
                fileManager.addtag($(this));
            }


        });

    },
    trackFilter: function() {
        $('.filterSize').change(function(e) {

            e.preventDefault();
            e.stopPropagation();
            var obj = cadmin.getObject();
            if ($(this).is(':checked')) {
                fileManager.loadFiles(1, 1, pagetag, 1, pagemax);
            }
            else {
                fileManager.loadFiles(obj.data('imagex'), obj.data('imagey'), pagetag, 1, pagemax);
            }

        });
        $(".pagination-page").unbind('click').bind("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var id = $(this).attr('href');
            //id = id.replace("simple-pagination-page", "");
            if (id === 'next') {
                id = parseInt(curpage) + 1;
            }
            if (id === 'prev') {
                id = parseInt(curpage) - 1;
            }
            if (!($(this).hasClass('previous-off') || $(this).hasClass('next-off')))
            {
                fileManager.loadFiles(pagex, pagey, pagetag, id, pagemax);
            }



        });

        $(".maxlist-li").unbind('click').bind("click", function() {
            var id = $(this).attr('id');
            id = id.replace("maxlist-li", "");
            fileManager.loadFiles(pagex, pagey, pagetag, curpage, id);
        });


    }
};