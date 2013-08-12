var listeditor = {
    init: function() {

        var obj = $('.cadmin_panel #editedTable');
        $.each(obj.find('tr'), function() {
            var i = 0;
            $.each($(this).children('td'), function() {
                $(this).attr('data-pos', i);
                i++;
            });
        });

        listeditor.bindTd();
        listeditor.drawRows();


    },
    bindTd: function() {
        $('.cadmin_panel #editedTable td').unbind('click').click(function() {
            if ($(this).children('input').length === 0) {
                var OriginalContent = $(this).text();

                $(this).addClass("cellEditing");
                $(this).html("<input type='text' value='" + OriginalContent + "' />");
                $(this).children().first().focus();

                $(this).children().first().keypress(function(e) {
                    if (e.which == 13) {
                        var newContent = $(this).val();
                        $(this).parent().text(newContent);
                        $(this).parent().removeClass("cellEditing");
                    }
                });

                $(this).children().first().blur(function() {
                    $(this).parent().text(OriginalContent);
                    $(this).parent().removeClass("cellEditing");
                });
            }
        });
    },
    bindButtons: function() {

        $('.cadmin_panel #editedTable .remover').unbind('click').click(function() {
            var pos = $(this).parent().parent().data('pos');
            var obj = $('.cadmin_panel #editedTable');
            $.each(obj.find('td'), function() {

                if ($(this).data('pos') === pos) {
                    $(this).remove();
                }
            });
        });
        $('.cadmin_panel #editedTable .remover2').unbind('click').click(function() {
            $(this).parent().parent().parent().remove();

        });
        $('.cadmin_panel #editedTable .adder').unbind('click').click(function() {
            var pos = $(this).parent().parent().data('pos');
            var obj = $('.cadmin_panel #editedTable');
            var max = 0;
            $.each(obj.find('td'), function() {
                if ($(this).data('pos') > max) {
                    max = $(this).data('pos') + 1;
                }
            });
            $.each(obj.find('td'), function() {
                if ($(this).data('pos') === pos) {
                    var td = $('<td>').attr({'data-pos': max, 'class': 'tdEditorRow'}).insertAfter($(this));
                }
            });
            var newTd = obj.find("td[data-pos='" + max + "']:first");
            var div = $('<div>').appendTo(newTd);
            var img = $('<img>').attr({'class': 'adder', 'src': '/cadmin/add.png'}).appendTo(div);
            var div = $('<div>').appendTo(newTd);
            var img = $('<img>').attr({'class': 'handle', 'src': '/cadmin/move.png'}).appendTo(div);
            var div = $('<div>').appendTo(newTd);
            var img = $('<img>').attr({'class': 'remover', 'src': '/cadmin/remove.png'}).appendTo(div);
        });
        $('.cadmin_panel #editedTable .adder2').unbind('click').click(function() {

            //new obj here;
            $(this).parent().parent().parent();

        });
//        var obj = $('.cadmin_panel #editedTable');
//        var tr = obj.find('tr:first');
//        var elem = tr.children('td').length;
//        var mainObj = cadmin.getObject();
//
//        $('.cadmin_panel .listButton').unbind('click').bind('click', function() {
//            if ($(this).hasClass('addRow')) {
//                var newTr = $('<tr>').appendTo(obj);
//                for (var i = 0; i < elem; i++)
//                {
//                    var newTd = $('<td>').html('').appendTo(newTr);
//                }
//
//            }
//            if ($(this).hasClass('removeRow')) {
//                var tr = obj.find('tr');
//                if (tr.length === parseInt(mainObj.data('rows'))) {
//                    draw.popupWindow(language.limit);
//                }
//                else {
//                    obj.find('tr:last').remove();
//                }
//
//            }
//            if ($(this).hasClass('addColumn')) {
//                $.each(obj.find('tr'), function() {
//                    var newTd = $('<td>').html('').appendTo($(this));
//                });
//
//            }
//            if ($(this).hasClass('removeColumn')) {
//
//                var tr = obj.find('tr:first');
//                if (tr.children('td').length === parseInt(mainObj.data('cell'))) {
//                    draw.popupWindow(language.limit);
//                }
//                else {
//                    $.each(obj.find('tr'), function() {
//                        $(this).find('td:last').remove();
//                    });
//                }
//            }
//            listeditor.init();


    },
    drawRows: function() {
        var obj = $('.cadmin_panel #editedTable');
        obj.addClass('draggable');
        var tr = obj.find('tr:first');
        if (!(tr.hasClass('editorRow'))) {
            var newTr = $('<tr>').attr({'class': 'editorRow'}).prependTo(obj);
            var elem = tr.children('td').length;
            {
                for (var i = 0; i < elem; i++)
                {
                    var newTd = $('<td>').attr({'data-pos': i, 'class': 'tdEditorRow'}).appendTo(newTr);
                    var div = $('<div>').appendTo(newTd);
                    var img = $('<img>').attr({'class': 'adder', 'src': '/cadmin/add.png'}).appendTo(div);
                    var div = $('<div>').appendTo(newTd);
                    var img = $('<img>').attr({'class': 'handle', 'src': '/cadmin/move.png'}).appendTo(div);
                    var div = $('<div>').appendTo(newTd);
                    var img = $('<img>').attr({'class': 'remover', 'src': '/cadmin/remove.png'}).appendTo(div);
                }
            }
            $.each(obj.find('tr'), function() {
                var newTd = $('<td>').attr({'class': 'tdEditorRow'}).appendTo($(this));
                var div = $('<div>').appendTo(newTd);
                var img = $('<img>').attr({'class': 'adder2', 'src': '/cadmin/add.png'}).appendTo(div);
                var div = $('<div>').appendTo(newTd);
                var img = $('<img>').attr({'class': 'handle2', 'src': '/cadmin/move.png'}).appendTo(div);
                var div = $('<div>').appendTo(newTd);
                var img = $('<img>').attr({'class': 'remover2', 'src': '/cadmin/remove.png'}).appendTo(div);
            });
            obj.find('tr:first').find('td:last').remove();
        }

        var fixHelper = function(e, tr)
        {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function(index)
            {
                $(this).width($originals.eq(index).width());
            });
            return $helper;
        };
        $(".cadmin_panel #editedTable").sortable({handle: '.handle2', helper: fixHelper, items: 'tr', containment: "#editedTable"}).disableSelection();
        //$(".cadmin_panel #editedTable").dragtable({dragHandle: '.handle'});
        $(".cadmin_panel #editedTable tr:first").sortable({handle: '.handle', items: 'td', containment: "#editedTable tr:first", axis: "x",
            start: function(event, ui) {
            },
            update: function(event, ui) {

                $.each($(".cadmin_panel #editedTable tr:first td"), function() {
                    var pos = $(this).data('pos');
                    var obj = $('.cadmin_panel #editedTable');
                    var sd = 0;
                    $.each(obj.find('tr'), function() {
                        if (sd === 0) {
                            sd++;
                        }
                        else {

                            var clon = $(this).clone();
                            $(this).remove();
                            $.each(clon.children('td'), function() {
                                if ($(this).data('pos') === pos) {
                                    $(this).prependTo(clon);
                                }
                            });
                            clon.appendTo(obj);
                        }

                    });


                });
                listeditor.drawRows();
            }

        }).disableSelection();
        listeditor.bindButtons();
    }
};
