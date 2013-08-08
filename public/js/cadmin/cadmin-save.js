var save = {
    saveToSession: function(obj) {

        switch (obj.data('type')) {
            case 'text':
                var data = tinyMCE.activeEditor.getContent();
                replace.text(obj);
                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/save",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': data,
                                'md5': obj.data('md5')
                            },
                            cache: false,
                            success: function(data)
                            {
                                var answer = JSON.parse(data);
                                if (answer === "success")
                                {
                                    draw.popupWindow(language.saved);
                                }

                            }
                        });

                break;
            case 'image':
                replace.image(obj);
                if (obj.data('style') === 'background') {
                    var bg = obj.css('background-image');
                    bg = bg.replace('url(', '').replace(')', '');
                    bg = bg.substring(0, bg.length - 1)
                    var link = bg.substring(bg.indexOf("/files"));
                }
                else {
                    var link = obj.attr('src');
                }
                link = url.getId(link);
                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/save",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': link[0],
                                'x': obj.data('imagex'),
                                'y': obj.data('imagey'),
                                'md5': obj.data('md5')
                            },
                            cache: false,
                            success: function(data)
                            {
                                var answer = JSON.parse(data);
                                if (answer === "success")
                                {
                                    draw.popupWindow(language.saved);
                                }

                            }
                        });

                break;
            case 'gallery':
                var data = replace.gallery(obj);
                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/save",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': data,
                                'x': obj.data('imagex'),
                                'y': obj.data('imagey'),
                                'md5': obj.data('md5')
                            },
                            cache: false,
                            success: function(data)
                            {
                                var answer = JSON.parse(data);
                                if (answer === "success")
                                {
                                    draw.popupWindow(language.saved);
                                }

                            }
                        });

                break;
            case 'video':
                var data = {};
                var div = $('.videoinput');
                var i = 0;
                div.each(function() {
                    data[i] = {}
                    data[i]['link'] = $(this).val();
                    data[i]['desc'] = $(this).siblings('.videodesc').val();
                    i++;
                });
                replace.video(obj);
                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/save",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': data,
                                'md5': obj.data('md5')
                            },
                            cache: false,
                            success: function(data)
                            {
                                var answer = JSON.parse(data);
                                if (answer === "success")
                                {
                                    draw.popupWindow(language.saved);
                                }

                            }
                        });
                break;
            case 'history':
                this.historycontent = content;
                break;
            case 'help':
                this.helpcontent = content;
                break;
            case 'import':
                this.importcontent = content;
                break;
            case 'export':
                this.exportcontent = content;
                break;
        }


    },
    publish: function(obj) {

        switch (obj.data('type')) {
            case 'text':
                var data = tinyMCE.activeEditor.getContent();
                replace.text(obj)
                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/publish",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': data,
                                'md5': obj.data('md5')
                            },
                            cache: false,
                            success: function(data)
                            {
                                var answer = JSON.parse(data);
                                if (answer === "success")
                                {
                                    draw.popupWindow(language.published);
                                }
                                if (answer === "changes")
                                {
                                    draw.popupWindow(language.someonechange);
                                }

                            }
                        });
                break;
            case 'image':
                replace.image(obj)
                if (obj.data('style') === 'background') {
                    var bg = obj.css('background-image');
                    bg = bg.replace('url(', '').replace(')', '');
                    bg = bg.substring(0, bg.length - 1)
                    var link = bg.substring(bg.indexOf("/files"));
                }
                else {
                    var link = obj.attr('src');
                }
                link = url.getId(link);
                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/publish",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': link[0],
                                'x': obj.data('imagex'),
                                'y': obj.data('imagey'),
                                'md5': obj.data('md5')
                            },
                            cache: false,
                            success: function(data)
                            {
                                var answer = JSON.parse(data);
                                if (answer === "success")
                                {
                                    draw.popupWindow(language.published);
                                }
                                if (answer === "changes")
                                {
                                    draw.popupWindow(language.someonechange);
                                }

                            }
                        });



                break;
            case 'gallery':
                var data = replace.gallery(obj);
                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/publish",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': data,
                                'x': obj.data('imagex'),
                                'y': obj.data('imagey'),
                                'md5': obj.data('md5')
                            },
                            cache: false,
                            success: function(data)
                            {
                                var answer = JSON.parse(data);
                                if (answer === "success")
                                {
                                    draw.popupWindow(language.published);
                                }
                                if (answer === "changes")
                                {
                                    draw.popupWindow(language.someonechange);
                                }

                            }
                        });

                break;
            case 'video':
                var data = {};
                var div = $('.videoinput');
                var i = 0;
                div.each(function() {
                    data[i] = {}
                    data[i]['link'] = $(this).val();
                    data[i]['desc'] = $(this).siblings('.videodesc').val();
                    i++;
                });
                replace.video(obj);

                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/publish",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': data,
                                'md5': obj.data('md5')
                            },
                            cache: false,
                            success: function(data)
                            {
                                var answer = JSON.parse(data);
                                if (answer === "success")
                                {
                                    draw.popupWindow(language.published);
                                }
                                if (answer === "changes")
                                {
                                    draw.popupWindow(language.someonechange);
                                }

                            }
                        });
                break;
            case 'history':
                this.historycontent = content;
                break;
            case 'help':
                this.helpcontent = content;
                break;
            case 'import':
                this.importcontent = content;
                break;
            case 'export':
                this.exportcontent = content;
                break;
        }


    },
    destroySession: function(obj) {

        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/destroy",
                    data: {
                        'type': obj.data('type'),
                        'key': obj.data('key'),
                    },
                    cache: false,
                    success: function(data)
                    {
                        var answer = JSON.parse(data);
                        if (answer === "success")
                        {
                            draw.popupWindow(language.aborted);
                        }

                    }
                });
    }

};