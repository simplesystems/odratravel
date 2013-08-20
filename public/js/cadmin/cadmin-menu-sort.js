$(document).ready(function() {
    $("#menu-top").sortable({
        placeholder: "ui-state-highlight",
        update: function(event, ui) {
            var ul = $('#menu-top');
            var list = {};
            var i = 0;
            ul.children().each(function() {

                list[i] = $(this).children('a').attr('href');
                i++;
            });
            $.ajax
                    ({
                        type: "POST",
                        url: "/cadmin/menuList",
                        data: {
                            'data': list,
                            'menu': 'top'
                        },
                        cache: false,
                        success: function(data)
                        {
                        }
                    });
        }}).disableSelection();
    $("#menu-front").sortable({
        placeholder: "ui-state-highlight",
        update: function(event, ui) {
            var ul = $('#menu-front');
            var list = {};
            var i = 0;
            ul.children().each(function() {

                list[i] = $(this).children('a').attr('href');
                i++;
            });
            $.ajax
                    ({
                        type: "POST",
                        url: "/cadmin/menuList",
                        data: {
                            'data': list,
                            'menu': 'front'
                        },
                        cache: false,
                        success: function(data)
                        {
                        }
                    });
        }}).disableSelection();
    $("#menu-info").sortable({
        placeholder: "ui-state-highlight",
        items: "li:not(.disabled):not(.h2)",
        update: function(event, ui) {
            var ul = $('#menu-info');
            var list = {};
            var i = 0;
            ul.children().each(function() {

                list[i] = $(this).children('a').attr('href');
                i++;
            });
            $.ajax
                    ({
                        type: "POST",
                        url: "/cadmin/menuList",
                        data: {
                            'data': list,
                            'menu': 'info'
                        },
                        cache: false,
                        success: function(data)
                        {
                        }
                    });
        }}).disableSelection();
    $("#menu-help").sortable({
        placeholder: "ui-state-highlight",
        items: "li:not(.disabled):not(.h2)",
        update: function(event, ui) {
            var ul = $('#menu-help');
            var list = {};
            var i = 0;
            ul.children().each(function() {

                list[i] = $(this).children('a').attr('href');
                i++;
            });
            $.ajax
                    ({
                        type: "POST",
                        url: "/cadmin/menuList",
                        data: {
                            'data': list,
                            'menu': 'help'
                        },
                        cache: false,
                        success: function(data)
                        {
                        }
                    });
        }}).disableSelection();

});