var listeditor = {
    init: function() {
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
        listeditor.bindButtons();
        $('.cadmin_panel #editedTable').sortable({items: 'tr'});
    },
    bindButtons: function() {
        var obj = $('.cadmin_panel #editedTable');
        var tr = obj.find('tr:first');
        var elem = tr.children('td').length;
        var mainObj = cadmin.getObject();

        $('.cadmin_panel .listButton').unbind('click').bind('click', function() {
            if ($(this).hasClass('addRow')) {
                var newTr = $('<tr>').appendTo(obj);
                for (var i = 0; i < elem; i++)
                {
                    var newTd = $('<td>').html('').appendTo(newTr);
                }

            }
            if ($(this).hasClass('removeRow')) {
                var tr = obj.find('tr');
                if (tr.length === parseInt(mainObj.data('rows'))) {
                    draw.popupWindow(language.limit);
                }
                else {
                    obj.find('tr:last').remove();
                }

            }
            if ($(this).hasClass('addColumn')) {
                $.each(obj.find('tr'), function() {
                    var newTd = $('<td>').html('').appendTo($(this));
                });

            }
            if ($(this).hasClass('removeColumn')) {

                var tr = obj.find('tr:first');
                if (tr.children('td').length === parseInt(mainObj.data('cell'))) {
                    draw.popupWindow(language.limit);
                }
                else {
                    $.each(obj.find('tr'), function() {
                        $(this).find('td:last').remove();
                    });
                }
            }
            listeditor.init();
        });

    }
};
