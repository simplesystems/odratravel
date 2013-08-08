var session = {
    switchtabs: function(selected, target) {

        var textcontent;
        var imagecontent;
        var gallerycontent;
        var videocontent;
        var imagecontent;
        var generalcontent;
        var currentcontent;
        var settingsCon;

        var content = $('.cadmin_leftcol_sub').children();
        var content2 = $('.cadmin_leftcol_sub_settings').children();
        var obj = cadmin.getObject();
        switch (selected) {
            case 'text':
                $('textarea').html(tinyMCE.activeEditor.getContent());
                tinyMCE.activeEditor.remove();
                this.textcontent = content;
                break;
            case 'image':
                this.imagecontent = content;
                break;
            case 'gallery':
                this.gallerycontent = content;
                break;
            case 'video':
                this.videocontent = content;
                break;
            case 'general':
                this.generalcontent = content2;
                break;
            case 'current':
                this.currentcontent = content2;
                break;
            case 'summary':
                break;
            case 'pages':
                break;
            case 'history':
                break;
            case 'help':
                break;
            case 'exit':
                break;
        }
        if (target != 'exit') {
            $('.cadmin_leftcol_sub').empty();
            $('.cadmin_leftcol_sub_settings').empty();
        }
        switch (target) {
            case 'text':
                if (this.textcontent !== undefined) {
                    return this.textcontent;
                }
                else {
                    return draw.text(obj);
                }

                break;
            case 'image':
                if (this.imagecontent !== undefined) {
                    return this.imagecontent;
                }
                else {
                    return draw.image(obj);
                }
                break;
            case 'gallery':
                if (this.gallerycontent !== undefined) {
                    return this.gallerycontent;
                }
                else {
                    return draw.gallery(obj);
                }
                break;
            case 'video':
                if (this.videocontent !== undefined) {
                    return this.videocontent;
                }
                else {
                    return draw.video(obj);
                }
                break;
            case 'general':
                if (this.generalcontent !== undefined) {
                    return this.generalcontent;
                }
                else {
                    return draw.general(obj);
                }
                break;
            case 'current':
                if (this.currentcontent !== undefined) {
                    return this.currentcontent;
                }
                else {
                    return draw.current(obj);
                }
                break;
            case 'summary':

                settings.getSession();
                return draw.summary(obj);

                break;
            case 'pages':

                //settings.getSession();
                return draw.pages(obj);

                break;

            case 'history':
                history.getHistory();
                return draw.history();
                break;
            case 'help':
                return draw.help();
                break;
//            case 'import':
//                if (this.importcontent !== undefined) {
//                    return this.importcontent;
//                }
//                else {
//                    return draw.import();
//                }
//                break;
//            case 'export':
//                if (this.exportcontent !== undefined) {
//                    return this.exportcontent;
//                }
//                else {
//                    return draw.export();
//                }
                break;
            case 'exit':
                $('.cadmin_content').fadeOut(1000, function() {
                    $('.cadmin_content').remove();
                    $('body').css('overflow', 'auto');
                });
                $('.cadmin_content_settings').fadeOut(1000, function() {
                    $('.cadmin_content_settings').remove();
                });
                break;
        }
        scale.setSizes();
    },
    clearHistory: function() {
        this.historycontent = undefined;
    },
    clearSession: function() {
        this.textcontent = undefined;
        this.imagecontent = undefined;
        this.gallerycontent = undefined;
        this.videocontent = undefined;
        this.imagecontent = undefined;
        this.historycontent = undefined;
        this.helpcontent = undefined;
        this.images = undefined;
    },
//    getImages: function() {
//        if (this.images !== undefined) {
//            getupload.getimages();
//        } else {
//            return this.images;
//        }
//
//    },
//    setImages: function(data) {
//        this.images = data;
//    }
    setSettings: function(data) {
        this.settingsCon = data;
    },
    getSettings: function(data) {
        return this.settingsCon;
    }
};


