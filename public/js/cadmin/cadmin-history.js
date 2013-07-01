var history = {
    getHistory: function() {
        var obj = cadmin.getObject();
        var key = obj.data('key');
        scale.setSizes();
        $.ajax
                ({
                    url: "/cadmin/gethistory/?key=" + key,
                    success: function(data)
                    {
                        data = JSON.parse(data.trim());

                        draw.historylist(data);
                    }
                });
    },
    revertLast: function() {
        var obj = cadmin.getObject()
        var type = obj.data('type');
        var key = obj.data('key');
        $.ajax
                ({
                    url: "/cadmin/gethistory/?key=" + key,
                    success: function(data)
                    {
                        data = JSON.parse(data.trim());
                        history.restore(data);
                    }
                });
    },
    restore: function(data) {
        var obj = cadmin.getObject();
        var type = obj.data('type');
        var div = $('<div>').attr({'class': 'preview'});

        switch (type) {
            case 'text':
                var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(div);
                wrapper.html(data.history[0].cadmin_value);
                replace.historyText(div)
                break;
            case 'image':
                var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(div);
                var x = obj.data('imagex');
                var y = obj.data('imagey');
                if (obj.data('imagex') > 200 || obj.data('imagex') > 200) {
                    var size = url.calculate(x, y, 200, 200);
                    var newUrl = url.modify(data.history[0].cadmin_value, size['x'], size['y']);
                }
                else {
                    var newUrl = url.modify(data.history[0].cadmin_value, obj.data('imagex'), obj.data('imagex'));
                }
                var img = $('<img>').attr({'class': '', 'src': newUrl}).appendTo(wrapper);
                replace.historyImage(div)
                break;
            case 'gallery':
                $.each(data.history[0].cadmin_value, function(k, v) {
                    var x = obj.data('imagex');
                    var y = obj.data('imagey');


                    var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(div);
                    var img = $('<img>').attr({'class': '', 'src': v.image}).appendTo(wrapper);
                    var text = $('<p>').html(v.text).appendTo(wrapper);
                    var a = $('<a>').attr({'href': v.link}).appendTo(wrapper);
                    a.html(v.desc);

                });
                replace.historyGallery(div)
                break;
            case 'video':
                $.each(data.history[0].cadmin_value, function(k, v) {

                    var wrapper = $('<div>').attr({'class': 'historywrapper'}).appendTo(div);
                    var iframe = $('<iframe>').attr({'src': v.link, 'class': 'videopreview'}).appendTo(wrapper);
                    var span = $('<span>').attr({'class': 'videodeschistory'}).appendTo(wrapper);
                    span.html(v.desc);
                });
                replace.historyVideo(div)
                break;
        }

        $('.cadmin_content').remove();
        cadmin.start(obj, 1)
    }


};