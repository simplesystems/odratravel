var ENTER_KEY = 13;
var SPACE_KEY = 32;
var BACKSPACE_KEY = 8;
var input = {
    MouseStart: function() {
        $(".editable").unbind('click').mouseenter(function() {
            $(this).addClass('cpadminover');
        });
        $(".editable").unbind('click').mouseleave(function() {
            $(this).removeClass('cpadminover');
        });
        $(".editable").unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.start($(this), 1000);
//            var top = $('html').scrollTop();
//            $('.cadmin_top').css('margin-top',top);
        });
        $(".videobtn").unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.start($(this).parent(), 1000);
        });
        $(".backgroundbtn").unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.start($(this).parent(), 1000);
        });
        $(".settings").unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($('.cadmin_content_settings').length === 0) {
                settings.getsettings();
            }

        });

    },
    MouseMenu: function() {
        $('.cadmin_rightcol li').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.menu($(this));
        });
    },
    SettingsMenu: function() {
        $('.cadmin_rightcol_settings li').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            cadmin.settingsmenu($(this));
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

            if (demo === "yes") {
                draw.popupWindow(language.notindemo);
            }
            else {
                cadmin.publish();
            }
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
                    replace.historyText(div);
                    break;
                case 'image':
                    replace.historyImage(div);
                    break;
                case 'list':
                    replace.historyList(div);
                    break;
                case 'gallery':
                    replace.historyGallery(div);
                    break;
                case 'video':
                    replace.historyVideo(div);
                    break;
            }
            session.clearSession();
        });
        $('a.revert2').unbind('click').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var obj = $(this).siblings('div.preview');
            settings.cancel(obj);

        });
        $(document).on('dragover', function(event) {

            $('#sortable2').addClass('dropable');
            $('#dropimagebox').addClass('dropable');

        });
        $('.cadmin_panel').on('dragend', function(event) {

            $('#sortable2').removeClass('dropable');
            $('#dropimagebox').removeClass('dropable');

        });
        $('.cadmin_panel').on('drop', function(event) {

            $('#sortable2').removeClass('dropable');
            $('#dropimagebox').removeClass('dropable');

        });

        $('.cadmin_panel').on('dragleave', function(event) {

            $('#sortable2').removeClass('dropable');
            $('#dropimagebox').removeClass('dropable');

        });
    },
    trackKeys: function() {
        $('.inputform').keypress(function(e) {
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

        $(".maxlist-li").unbind('click').bind("click", function(e) {
            var id = $(this).attr('id');
            id = id.replace("maxlist-li", "");
            if ($(this).attr('id') != "maxlist-li" + pagemax) {
                fileManager.loadFiles(pagex, pagey, pagetag, curpage, id);
            }
            else {
                e.preventDefault();
            }

        });



    },
    SettingsTrack: function() {
        $('.keepset').change(function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).is(':checked')) {
                $('.cadmin_set input').prop('disabled', true);
                $(this).prop('disabled', false);
                settings.insert('general');
            }
            else {
                $('.cadmin_set input').prop('disabled', false);
            }

        });
        $('.saveGeneral').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (demo === "yes") {
                draw.popupWindow(language.notindemo);
            }
            else {
                settings.saveGeneral();
            }
        });
        $('.saveCurrent').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (demo === "yes") {
                draw.popupWindow(language.notindemo);
            }
            else {
                settings.saveCurrent();
            }
        });
        $('.saveSummary').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (demo === "yes") {
                draw.popupWindow(language.notindemo);
            }
            else {
                settings.saveSummary();
            }

        });
        $('.savePages').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (demo === "yes") {
                draw.popupWindow(language.notindemo);
            }
            else {
                settings.pagesSave();
            }

        });
        $('.cancelPages').unbind('click').bind('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            settings.pagesCancel();
        });
        $('.pageradio').change(function(e) {
            e.preventDefault();
            e.stopPropagation();
            settings.pagesSet($(this));
        });
        $('.pageradio2').change(function(e) {
            e.preventDefault();
            e.stopPropagation();
            settings.pagesSet2($(this));
        });
        $('.inputLang').change(function() {
            settings.pagesSet3($(this));
        });
        $('.inputLang').keypress(function(event) {
            if (event.keyCode == 13) {
                settings.pagesSet3($(this));
            }

        });

    },
    jsTreeInput: function() {
        $("#mmenu input").unbind('click').bind('click', function(e) {
            switch (this.id) {
                case "add_default":
                    $(".cadmin_tree").jstree("create", null, "last", {"attr": {"rel": this.id.toString().replace("add_", "")}});
                    break;
//                case "search":
//                    $(".cadmin_tree").jstree("search", document.getElementById("text").value);
//                    break;
                case "undo":
                    if (rollback) {
                        $.jstree.rollback(rollback);
                    }
                    break;
                default:
                    $(".cadmin_tree").jstree(this.id);
                    break;
            }

        });

        $(".cadmin_tree").bind("select_node.jstree", function(NODE, REF_NODE) {
            //console.log(REF_NODE.inst.get_json()[0]);
            //console.log(REF_NODE.inst.get_json()[0].data);
            $('.pageedit').empty();
            $('.pageedit2').empty();
            if (REF_NODE.inst.get_json()[0].attr.rel === 'default') {
                // console.log(REF_NODE.rslt.obj.parents("li")[0].rel);
                //console.log(REF_NODE.inst.get_path('#' + REF_NODE.rslt.obj.attr('id'),true));
                //console.log(REF_NODE.inst.get_path(REF_NODE.rslt.obj)[1]);
                if (REF_NODE.inst.get_path(REF_NODE.rslt.obj)[1] === 'menu') {
                    if (REF_NODE.inst.get_path(REF_NODE.rslt.obj)[3] !== undefined) {
                        settings.pagesGet(REF_NODE.inst.get_json()[0].attr.id.replace("node_", ""), true, true, false, false);
                    } else {
                        settings.pagesGet(REF_NODE.inst.get_json()[0].attr.id.replace("node_", ""), true, true, false, true);
                    }
                }
                else {
                    settings.pagesGet(REF_NODE.inst.get_json()[0].attr.id.replace("node_", ""), true, true, true, false);
                }
            }
            if (REF_NODE.inst.get_json()[0].attr.rel === 'main') {
                settings.pagesGet(REF_NODE.inst.get_json()[0].attr.id.replace("node_", ""), false, true, true, false);
            }
            var a = $.jstree._focused().get_selected();

        });
    }



};