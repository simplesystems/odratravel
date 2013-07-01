var type;
var key;
var selected;
var Object;


var cadmin = {
    init: function() {
        var bar = draw.bar();
        bar.appendTo('body');
        draw.editlink();
        input.MouseStart();
        $('body').addClass('baractive');
        scale.calculate()

        //draw.popupWindow('text');


    },
    start: function(obj, fadeTime) {

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

        history.revertLast();
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
    }

};


