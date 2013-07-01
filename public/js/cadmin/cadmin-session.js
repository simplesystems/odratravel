var session = {
    switchtabs: function(selected, target) {

        var textcontent;
        var imagecontent;
        var gallerycontent;
        var videocontent;
        var imagecontent;

        var content = $('.cadmin_leftcol_sub').children();
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
            case 'history':
                break;
            case 'help':
                break;
            case 'exit':
                break;
        }
        if (target != 'exit') {
            $('.cadmin_leftcol_sub').empty();
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
    }
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
};


