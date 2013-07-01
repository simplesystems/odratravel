Height = ''
wHeight = ''
$(window).resize(function() {
    // scale.calculate();
    scale.setSizes();
});
var scale = {
    calculate: function() {
        Height = $(window).innerHeight() - 265;
        wHeight = Height - 120;
    },
    setSizes: function() {
        scale.calculate();
        $('.cadmin_text_edit').css('height', Height);
        $('.cadmin_img').css('height', Height);
        $('.cadmin_video_edit').css('height', Height);
        $('.cadmin_history').css('height', Height);
        $('.cadmin_help').css('height', Height);
        $('.cadmin_manager').css('height', Height + 63);
        $('.cadmin_editor').css('height', Height + 63);
        $('.fileContainer').css('height', wHeight - 10);
        $('.cadmin_add').css('height', wHeight + 1);
        $('.cadmin_add2').css('height', wHeight + 83);
        $('.tinymce').css('height', wHeight - 12);
        $('.linkdiv').css('height', wHeight);

    },
}

