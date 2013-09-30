var tinymcecustom = {
    start: function(obj) {

        $.getJSON("/cadmin/getPages", function(data) {
            tinymcecustom.editor2(obj, data);

        });
    },
    //for texts
    editor2: function(obj, data) {
        tinymce.init({
            remove_script_host: false,
            convert_urls: false,
            selector: "#editedtext",
            theme: "modern",
            width: 700,
            height: 250,
            menubar: false,
            toolbar: "insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link unlink | code | image",
            plugins: 'link code image',
            file_browser_callback: function(field_name, url_origin, type, win) {
                obj = cadmin.getObject();
                obj.data('imagex', 200);
                obj.data('imagey', 200);
                obj.data('type', 'browser');

                var fm = fileManager.init(obj);
                fm.bind('selected_image', function(e, data) {
                    $('#' + field_name).val(data);
                    fileManager.close();
                    var dimensions = $('label:contains(Dimensions)').parent().find('input');
                    $(dimensions[0]).val(200);
                    $(dimensions[1]).val(200);
                    $(dimensions[0]).on('keyup', function() {
                        $('#' + field_name).val(url.modify($('#' + field_name).val(), $(this).val(), $(dimensions[1]).val()));
                    });
                    $(dimensions[1]).on('keyup', function() {
                        $('#' + field_name).val(url.modify($('#' + field_name).val(), $(dimensions[0]).val(), $(this).val()));
                    });
                });

            },
            link_list: data
        });
    },
    //for gallery
    editor: function(obj) {
        tinymce.init({
            selector: "#editedtext",
            theme: "modern",
            width: 718,
            height: 168,
            menubar: false,
            toolbar: "insertfile undo redo | bold italic |"

        });
    }
};