pages = '';
curpage = '';
pagex = '';
pagey = '';
pagetag = '';
pagemax = '';

var fileManager = {
    init: function() {
        var content = draw.fileManager();
        content.appendTo('.cadmin_panel');
        // content.draggable({cursor: "move", handle: ".cadmin_boxheader_manager"});
        $('.fileContainer').html(language.loadingfiles);
        var obj = cadmin.getObject();
        //pass x y of image,tag and page number to fetch data
        this.loadFiles(obj.data('imagex'), obj.data('imagey'), 'all', 1, 6);
    },
    loadFiles: function(x, y, tag, page, max) {

        var url = '/cadmin/view/' + page + '/' + tag + '/' + x + '/' + y + '/' + max;
        $.ajax
                ({
                    url: url,
                    success: function(data)
                    {
                        {
                            data = JSON.parse(data.trim());
                            curpage = page;
                            pagex = x;
                            pagey = y;
                            pagetag = tag;
                            pagemax = max;
                            //session.setImages(data);
                            fileManager.start(data);

                        }

                    }
                });

    },
    start: function(data) {
        if (data === 'no files') {
            $('.fileContainer').html(language.nofiles);
        }
        else {
            $('.fileContainer').empty();
            $('.cadmin_filter').empty();
            $('.buttoncontainer').remove();
            $('#pagination-digg').remove();

            var wrapper = $('<div>').appendTo('.fileContainer');
            var imgrow = $('<div>').attr({'class': 'imgrow'}).appendTo(wrapper);


            var obj = cadmin.getObject();
            pages = data.pages.number;
            if (data.data) {
                $.each(data.data, function(e, value) {
                    if (imgrow.children('div').length >= 3) {
                        var row = $('<div>').attr({'class': 'imgrow'}).appendTo(wrapper).insertBefore(imgrow);
                        row.html(imgrow.html());
                        imgrow.empty();
                    }
                    var imgbox = $('<div>').attr({'class': 'imgbox'}).appendTo(imgrow);
                    var newUrl = value.value;
                    if (obj.data('imagex') > 200 || obj.data('imagex') > 200) {
                        var newUrl = url.newUrl(value.value, 200, 200);
                    }
                    else {
                        var newUrl = url.newUrl(value.value, obj.data('imagex'), obj.data('imagex'));
                    }
                    if (obj.data('imagex') > value.x || obj.data('imagey') > value.y) {
                        var img = $('<img>').attr({'class': 'filemanagerfiles toosmall', 'src': newUrl}).appendTo(imgbox);
                        var divsmall = $('<div>').attr({'class': 'filemanagertosmall'}).html(language.toosmall).appendTo(imgbox);
                    }
                    else {
                        var img = $('<img>').attr({'class': 'filemanagerfiles unselected', 'src': newUrl}).appendTo(imgbox);
                    }


                    var inputdiv = $('<div>').attr({'class': 'inputdiv'}).appendTo(imgbox);

                    if (value.tags) {
                        $.each(value.tags, function(a, b) {
                            var div = $('<span>').attr({'class': 'tag'}).appendTo(inputdiv);
                            var span = $('<span>').attr({'class': 'tag', 'data-id': value.id}).appendTo(div);
                            var remove = $('<a>').attr({'href': '#', 'class': 'remove_tag'}).html('x');
                            span.html(b);
                            remove.appendTo(div);
                        });
                    }

                    else {
//                var div = $('<div>').attr({'class': 'tag', 'data-id': value.id}).appendTo(inputtags);
//                var remove = $('<a>').attr({'href': '#', 'class': 'remove_tag'}).html(' x');
//                div.html(value.cadmin_tag);
//                remove.appendTo(div);
                    }
                    var inputtags = $('<div>').attr({'id': 'tags', 'class': 'inputtags'}).appendTo(inputdiv);
                    var inputform = $('<input>').attr({'type': 'text', 'id': 'inputtags', 'class': 'inputform', 'data-id': value.id}).appendTo(inputtags);

                });
            }
            this.addPaginator();

            var buttons = $('<div>').attr({'class': 'buttoncontainer'}).appendTo('.cadmin_manager');
            var cadmin_buttons = $('<div>').attr({'class': 'cadmin_buttons_manager'}).appendTo(buttons);
            if (obj.data('type') == 'gallery') {
                var button_save = $('<a>').attr({'class': 'button fileManagerAdd customButton', 'href': '#'}).html('Add').appendTo(cadmin_buttons);
            }

            var button_exit = $('<a>').attr({'class': 'button fileManagerCancel customButton', 'href': '#'}).html('Cancel').appendTo(cadmin_buttons);
            this.addFilters();

            this.addMaxList();


        }
        input.trackButtons();
        input.trackKeys();
        input.trackFilter();
        scale.setSizes();
    },
    addPaginator: function() {
        var div = $('<ul>').attr({'id': 'pagination-digg'}).appendTo('.cadmin_manager');

        if (pages > 1) {
            var li = $('<li>').appendTo(div);
            var a = $('<a>').attr({'href': 'prev', 'class': 'pagination-page previous'}).html(language.previous).appendTo(li);
            for (var i = 1; i <= pages; i++) {
                //var li = $('<li>').attr({'class': 'simple-pagination-li', 'id': 'simple-pagination-page' + i}).appendTo(div);
                var li = $('<li>').appendTo(div);
                var a = $('<a>').attr({'href': i, 'class': 'pagination-page'}).html(i).appendTo(li);
                //li.html(i);
            }

            var li = $('<li>').appendTo(div);
            var a = $('<a>').attr({'href': 'next', 'class': 'pagination-page next'}).html(language.next).appendTo(li);

            if (parseInt(curpage) === 1) {
                $('.previous').addClass('previous-off').removeClass('previous');
            }
            else {
                $('.previous-off').addClass('previous').removeClass('previous-off');
            }
            if (curpage === pages) {
                $('.next').addClass('next-off').removeClass('next');
            }
            else {
                $('.next-off').addClass('next').removeClass('next-off');
            }
            $(".pagination-page").removeClass('activepage');
            $(".pagination-page[href='" + curpage + "']").addClass('activepage');



        }


    },
    addMaxList: function() {
        var div = $('<div>').attr({'class': 'maxlist'}).appendTo('.cadmin_filter');
        var span = $('<span>').appendTo(div).html(language.itemsonpage);
        var li = $('<li>').attr({'class': 'maxlist-li', 'id': 'maxlist-li6'}).appendTo(div).html('6');
        var li = $('<li>').attr({'class': 'maxlist-li', 'id': 'maxlist-li25'}).appendTo(div).html('25');
        var li = $('<li>').attr({'class': 'maxlist-li', 'id': 'maxlist-li50'}).appendTo(div).html('50');
        var li = $('<li>').attr({'class': 'maxlist-li', 'id': 'maxlist-li100'}).appendTo(div).html('100');
        var li = $('<li>').attr({'class': 'maxlist-li', 'id': 'maxlist-li500'}).appendTo(div).html('500');
        $(".maxlist-li").removeClass('activemax');
        $("#maxlist-li" + pagemax).addClass('activemax');




    },
    addFilters: function() {

        var div = $('<div>').attr({'class': 'autocmpl'}).appendTo('.cadmin_filter');
        var span = $('<span>').appendTo(div).html(language.filtertags);
        var input = $('<input>').attr({'class': 'filterTags'}).appendTo(div);

        var cache = {};
        $(".filterTags").autocomplete({
            minLength: 1,
            source: function(request, response) {
                var term = request.term;
                if (term in cache) {
                    response(cache[ term ]);
                    return;
                }
                $.getJSON("/cadmin/search", request, function(data, status, xhr) {
                    cache[ term ] = data;
                    response(data);
                });
            },
            select: function(a, b) {
                $(this).val(b.item.value);
                var banner = b.item.value;
                if (banner === '') {
                    banner = 'all';
                }
                fileManager.loadFiles(pagex, pagey, banner, 1, pagemax);
            }
        }).keydown(function(e) {

            if (e.keyCode === ENTER_KEY) {
                var banner = $(this).val();
                if ($(this).val() === '') {
                    banner = 'all';
                }
                fileManager.loadFiles(pagex, pagey, banner, 1, pagemax);
            }
        });
        var checkboxwrapper = $('<div>').attr({'class': 'checkboxwrapper'}).appendTo('.cadmin_filter');
        var checkboxlabel = $('<span>').html(language.filtersmall).appendTo(checkboxwrapper);
        var checkbox = $('<input>').attr({'class': 'filterSize', 'type': 'checkbox', 'value': 'show', 'name': 'Show too small images'}).appendTo(checkboxwrapper);

        if (pagex === 1 && pagey === 1) {
            checkbox.attr('checked', true);
        }

    },
    insertTags: function(data) {

    },
    addtag: function(obj) {

        var id = obj.data('id');
        var container = obj.parent().parent();
        var check = this.checkTags(obj);
        if (check === 0 && obj.val() !== '') {
            var div = $('<span>').attr({'class': 'tag'}).insertBefore(container.children().last());
            var span = $('<span>').attr({'class': 'tag', 'data-id': obj.data('id')}).appendTo(div);
            var remove = $('<a>').attr({'href': '#', 'class': 'remove_tag'}).html('x');
            span.html(obj.val());
            remove.appendTo(div);
            obj.val('');
            input.trackButtons();
            this.addTagDatabase(span);
        }
        else {
            obj.toggleClass('not_valid');
        }

    },
    checkTags: function(obj) {
        var i = 0;

        var divs = obj.parent().parent();
        if (divs.children('.tag').length > 0) {
            divs.children('.tag').each(function() {
                if ($(this).clone().children('a').remove().end().text() === obj.val()) {
                    i++;
                }
                ;
            });
            return i;
        }
        else {
            return i;
        }
    },
    removetag: function(obj) {
        //var id = obj.data('id');


        obj.remove();
        input.trackButtons();
        this.removeTagDatabase(obj);

    },
    addTagDatabase: function(obj) {
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/addTag",
                    data: {
                        'id': obj.data('id'),
                        'tag': obj.clone().children('a').remove().end().text(),
                    },
                    cache: false,
                    success: function(data)
                    {
                        var answer = JSON.parse(data);
                        if (data === "success")
                        {

                        }

                    }
                });
    },
    removeTagDatabase: function(obj) {

        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/removeTag",
                    data: {
                        'id': obj.children('span').data('id'),
                        'tag': obj.clone().children('a').remove().end().text(),
                    },
                    cache: false,
                    success: function(data)
                    {
                        var answer = JSON.parse(data);
                        if (data === "success")
                        {
                        }

                    }
                });
    },
    add: function() {
        $('.selected').each(function() {
            var newUrl = $(this).attr('src');
            var obj = cadmin.getObject();
            var x = obj.data('imagex');
            var y = obj.data('imagey');
            var size = url.calculate(x, y, 200, 200);
            var newUrl = url.modify($(this).attr('src'), size['x'], size['y']);
            var imageli = $('<li>').attr({'class': 'dropbox'}).appendTo('#sortable2');
            var imagesrc = $('<img>').attr({'src': newUrl}).appendTo(imageli);


        });
        $('.cadmin_manager').remove();
    },
    addImage: function(img) {

        var obj = cadmin.getObject();
        var x = obj.data('imagex');
        var y = obj.data('imagey');
        var size = {};
        if (obj.data('imagex') < 500 && obj.data('imagey') < 500) {
            size['x'] = obj.data('imagex');
            size['y'] = obj.data('imagey');
        }
        else {
            size = url.calculate(x, y, 500, 500);
        }
        var newUrl = url.modify(img.attr('src'), size['x'], size['y']);
        $('#container').attr({'src': newUrl});
        $('.cadmin_manager').remove();



    }
};