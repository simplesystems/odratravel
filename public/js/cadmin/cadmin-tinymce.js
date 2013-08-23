var tinymcecustom = {
    start: function(obj) {

        $.getJSON("/cadmin/getPages", function(data) {
            tinymcecustom.editor2(obj, data);

        });
    },
    //for texts
    editor2: function(obj, data) {
        tinymce.init({
            selector: "#editedtext",
            theme: "modern",
            width: 700,
            height: 250,
            menubar: false,
            toolbar: "insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link",
            plugins: 'link',
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