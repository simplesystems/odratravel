var save = {
    saveToSession: function(obj) {

        switch (obj.data('type')) {
            case 'text':
                var data = tinyMCE.activeEditor.getContent();
                replace.text(obj)
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
                                    draw.popupWindow('Saved!');
                                }

                            }
                        });

                break;
            case 'image':
                replace.image(obj);
                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/save",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': $('#container').attr('src'),
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
                                    draw.popupWindow('Saved!');
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
                                    draw.popupWindow('Saved!');
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
                                    draw.popupWindow('Saved!');
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
                                    draw.popupWindow('Published!');
                                }
                                if (answer === "changes")
                                {
                                    draw.popupWindow('Someone made changes too!Check history!');
                                }

                            }
                        });
                break;
            case 'image':


                replace.image(obj)

                $.ajax
                        ({
                            type: "POST",
                            url: "/cadmin/publish",
                            data: {
                                'type': obj.data('type'),
                                'key': obj.data('key'),
                                'data': $('#container').attr('src'),
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
                                    draw.popupWindow('Published!');
                                }
                                if (answer === "changes")
                                {
                                    draw.popupWindow('Someone made changes too!Check history!');
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
                                    draw.popupWindow('Published!');
                                }
                                if (answer === "changes")
                                {
                                    draw.popupWindow('Someone made changes too!Check history!');
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
                                    draw.popupWindow('Published!');
                                }
                                if (answer === "changes")
                                {
                                    draw.popupWindow('Someone made changes too!Check history!');
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
                        if (data === "success")
                        {
                            draw.popupWindow('Changes aborted!');
                        }

                    }
                });
    }

};