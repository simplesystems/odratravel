var type;
var key;
var selected;
var Object;

var cadmin = {
    init: function() {
        var bar = draw.bar();
        bar.appendTo('body');
        draw.editlink();
        $('body').addClass('baractive');
        scale.calculate();
        input.MouseStart();

    },
    start: function(obj, fadeTime) {

        $('body').css('overflow', 'hidden');
        session.clearHistory();
        this.Object = obj;
        var main = draw.main();
        this.type = obj.data('type');
        this.key = obj.data('key');
        main.appendTo('.cadmin_panel');
        main.fadeIn(fadeTime, function() {
            //// Animation complete
        });

        switch (this.type) {
            case 'text':
                var content = draw.text(obj);
                var menu = draw.menu(this.type);
                content.appendTo('.cadmin_leftcol_sub');

                break;
            case 'image':
                var content = draw.image(obj);
                var menu = draw.menu(this.type);
                content.appendTo('.cadmin_leftcol_sub');

                break;
            case 'gallery':
                var content = draw.gallery(obj);
                var menu = draw.menu(this.type);
                content.appendTo('.cadmin_leftcol_sub');
                draw.startSortable(obj.data('max'));
                break;
            case 'video':
                var content = draw.video(obj);
                var menu = draw.menu(this.type);
                content.appendTo('.cadmin_leftcol_sub');
                break;
        }
        this.selected = this.type;
        menu.appendTo('.cadmin_rightcol');
        //content.appendTo('.cadmin_leftcol_sub');
        draw.external(obj);
        input.MouseMenu();
        input.trackButtons();
        scale.setSizes();


    },
    menu: function(obj) {

        $('.cadmin_rightcol li').removeClass('active');
        obj.addClass('active');
        var child = obj.children().attr('href');
        var newcontent = session.switchtabs(this.selected, child);

        if (child !== 'exit') {
            this.selected = child;
            newcontent.appendTo('.cadmin_leftcol_sub');
            scale.setSizes();
        }
        draw.external(this.Object);
        if (this.selected === 'gallery') {
            draw.startSortable(obj.data('max'));
            scale.setSizes();
        }
        input.trackButtons();

    },
    cancel: function() {

        history.revertLast(this.Object);
        save.destroySession(this.Object);
    },
    save: function() {
        save.saveToSession(this.Object);
    },
    publish: function() {
        save.publish(this.Object);
    },
    fileManager: function() {
        fileManager.init();
    },
    getObject: function() {
        return this.Object;
    },
    settings: function() {
        if ($('.cadmin_content').length > 0) {
            //cadmin.save();
        }
        $('body').css('overflow', 'hidden');
        $('.cadmin_content').remove();
        $('.cadmin_content_settings').remove();
        var main = draw.settings();
        main.appendTo('.cadmin_panel');
        main.fadeIn(1000, function() {
            //// Animation complete
        });
        var general = draw.general();
        general.appendTo('.cadmin_leftcol_sub_settings');
        input.SettingsMenu();
        input.SettingsTrack();
        this.selected = 'general';
        scale.setSizes();
        settings.insert(this.selected);
    },
    settingsmenu: function(obj) {
        //alert($(location).attr('pathname'));
        $('.cadmin_rightcol_settings li').removeClass('active');
        obj.addClass('active');
        var child = obj.children().attr('href');
        var newcontent = session.switchtabs(this.selected, child);

        if (child !== 'exit') {
            this.selected = child;
            newcontent.appendTo('.cadmin_leftcol_sub');
            scale.setSizes();
            this.selected = obj.children().attr('href');
            newcontent.appendTo('.cadmin_leftcol_sub_settings');
            input.SettingsMenu();
            input.SettingsTrack();
            scale.setSizes();
            settings.insert(this.selected);
        }

        if (child === 'pages') {
            settings.pagesTree();
            input.jsTreeInput();
        }
        if (child === 'exit') {
            $('body').css('overflow', 'auto');
        }


    }

};


