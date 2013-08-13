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
        $('.cadmin_panel #editedTable td:not(.tdEditorRow)').unbind('click').click(function() {
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

        $('.cadmin_panel #editedTable .inputThead').unbind('click').click(function() {
            $(this).focus();
        });
        $('.cadmin_panel #editedTable .remover').unbind('click').click(function() {

            var mainObj = cadmin.getObject();
            var obj = $('.cadmin_panel #editedTable');
            var tr = obj.find('tr:first');
            if (tr.children('td').length - 1 === parseInt(mainObj.data('cell'))) {
                draw.popupWindow(language.limit);
            }
            else {
                var pos = $(this).parent().parent().data('pos');
                $.each(obj.find('td'), function() {

                    if ($(this).data('pos') === pos) {
                        $(this).remove();
                    }
                });
            }


        });
        $('.cadmin_panel #editedTable .remover2').unbind('click').click(function() {
            var mainObj = cadmin.getObject();
            var obj = $('.cadmin_panel #editedTable');
            var tr = obj.find('tr');
            if (tr.length - 1 === parseInt(mainObj.data('rows'))) {
                draw.popupWindow(language.limit);
            }
            else {
                $(this).parent().parent().parent().remove();
            }

        });
        $('.cadmin_panel #editedTable .adder').unbind('click').click(function() {
            var pos = $(this).parent().parent().data('pos');
            var obj = $('.cadmin_panel #editedTable');
            var max = 0;
            $.each(obj.find('td'), function() {
                if ($(this).data('pos') >= max && $(this).data('pos') !== 'edit') {
                    max = $(this).data('pos') + 1;
                }
            });
            $.each(obj.find("td[data-pos='" + pos + "']"), function() {
                var td = $('<td>').attr({'data-pos': max}).insertAfter($(this));
            });
            var newTd = obj.find("td[data-pos='" + max + "']:first");
            newTd.attr('class', 'tdEditorRow');
            var div = $('<div>').appendTo(newTd);
            var img = $('<img>').attr({'class': 'adder', 'src': '/cadmin/add.png'}).appendTo(div);
            var div = $('<div>').appendTo(newTd);
            var img = $('<img>').attr({'class': 'handle', 'src': '/cadmin/move.png'}).appendTo(div);
            var div = $('<div>').appendTo(newTd);
            var img = $('<img>').attr({'class': 'remover', 'src': '/cadmin/remove.png'}).appendTo(div);
            var div = $('<div>').attr({'class': 'divThead'}).appendTo(newTd);
            var input = $('<input>').attr({'class': 'inputThead', 'type': 'text', 'name': 'thead'}).appendTo(div);
            listeditor.bindTd();
            listeditor.bindButtons();
        });
        $('.cadmin_panel #editedTable .adder2').unbind('click').click(function() {

            var obj = $('.cadmin_panel #editedTable');
            var tr = $('<tr>').insertAfter($(this).parent().parent().parent());
            $.each(obj.find('tr:not(.editorRow):first').find('td:not(.tdEditorRow)'), function() {
                var td = $('<td>').attr({'data-pos': $(this).data('pos')}).appendTo(tr);
            });
            var td = $('<td>').attr({'class': 'tdEditorRow', 'data-pos': 'edit'}).appendTo(tr);
            var div = $('<div>').appendTo(td);
            var img = $('<img>').attr({'class': 'adder2', 'src': '/cadmin/add.png'}).appendTo(div);
            var div = $('<div>').appendTo(td);
            var img = $('<img>').attr({'class': 'handle2', 'src': '/cadmin/move.png'}).appendTo(div);
            var div = $('<div>').appendTo(td);
            var img = $('<img>').attr({'class': 'remover2', 'src': '/cadmin/remove.png'}).appendTo(div);
            listeditor.bindTd();
            listeditor.bindButtons();
        });


    },
    drawRows: function() {
        var obj = $('.cadmin_panel #editedTable');
        obj.addClass('draggable');
        var tr = obj.find('tr:first');
        if (!(tr.hasClass('editorRow'))) {
            var thead = obj.find('thead');
            if (!(thead.length > 0)) {
                var thead = $('<thead>').prependTo(obj);
                var newTr = $('<tr>').attr({'class': 'editorRow'}).appendTo(thead);
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
                        var div = $('<div>').attr({'class': 'divThead'}).appendTo(newTd);
                        var input = $('<input>').attr({'class': 'inputThead', 'type': 'text', 'name': 'thead'}).appendTo(div);
                    }
                }
            }
            else {
                var newTr = $('<tr>').attr({'class': 'editorRow'});
                var i = 0;
                $.each(thead.children('tr').children(), function() {
                    {

                        var newTd = $('<td>').attr({'data-pos': i, 'class': 'tdEditorRow'}).appendTo(newTr);
                        var div = $('<div>').appendTo(newTd);
                        var img = $('<img>').attr({'class': 'adder', 'src': '/cadmin/add.png'}).appendTo(div);
                        var div = $('<div>').appendTo(newTd);
                        var img = $('<img>').attr({'class': 'handle', 'src': '/cadmin/move.png'}).appendTo(div);
                        var div = $('<div>').appendTo(newTd);
                        var img = $('<img>').attr({'class': 'remover', 'src': '/cadmin/remove.png'}).appendTo(div);
                        var div = $('<div>').attr({'class': 'divThead'}).appendTo(newTd);
                        var input = $('<input>').attr({'class': 'inputThead', 'type': 'text', 'name': 'thead'}).appendTo(div).val($(this).text());
                        i++;
                    }
                });
                thead.empty();
                newTr.appendTo(thead);
            }



            $.each(obj.find('tr'), function() {
                var newTd = $('<td>').attr({'class': 'tdEditorRow', 'data-pos': 'edit'}).appendTo($(this));
                var div = $('<div>').appendTo(newTd);
                var img = $('<img>').attr({'class': 'adder2', 'src': '/cadmin/add.png'}).appendTo(div);
                var div = $('<div>').appendTo(newTd);
                var img = $('<img>').attr({'class': 'handle2', 'src': '/cadmin/move.png'}).appendTo(div);
                var div = $('<div>').appendTo(newTd);
                var img = $('<img>').attr({'class': 'remover2', 'src': '/cadmin/remove.png'}).appendTo(div);
            });
            obj.find('tr:first').find('td:last').empty().attr('data-pos', 'edit');
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
        $(".cadmin_panel #editedTable").sortable({handle: '.handle2', helper: fixHelper, items: 'tr', containment: "#editedTable", update: function(event, ui) {
                listeditor.bindTd();
                listeditor.bindButtons();
            }}).disableSelection();
        $(".cadmin_panel #editedTable tr:first").sortable({handle: '.handle', items: 'td', containment: "#editedTable tr:first", axis: "x",
            start: function(event, ui) {
            },
            update: function(event, ui) {

                $.each($(".cadmin_panel #editedTable tr:first td"), function() {

                    var obj = $('.cadmin_panel #editedTable');
                    var sd = 0;
                    var pos = $(this).data('pos');

                    $.each(obj.find('tr:not(.editorRow)'), function() {
                        var clon = $(this).clone();
                        var tr = $(this);
                        tr.find("td[data-pos='" + pos + "']:first").remove();
                        $.each(clon.find('td'), function() {
                            if ($(this).data('pos') === pos) {
                                $(this).appendTo(tr);
                            }
                        });
                        tr.appendTo(obj);
                    });




                });
                listeditor.bindTd();
            }

        }).disableSelection();
        listeditor.bindButtons();
    }
};
