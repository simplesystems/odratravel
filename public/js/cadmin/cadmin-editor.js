var editor = {
    init: function(obj) {
        var main = draw.editor();
        main.appendTo('.cadmin_panel');
    },
    gallery: function(obj) {
        this.init(obj);
        var editor = draw.galleryEditor(obj);
        editor.appendTo('.cadmin_editor');
        tinymcecustom.editor(obj);
        input.trackButtons();
        scale.setSizes();
    },
    galleryadd: function(obj) {
        var link = $('#hreflink').val();
        var desc = $('#hrefdesc').val();
        var text = tinyMCE.activeEditor.getContent();
        var target = $('.editimagebox .current').children();
        target.empty();
        target.html(text);
        var a = $('<a>').html(desc).attr({'href': link}).appendTo(target);
    },
    text: function(obj) {

    }
}
