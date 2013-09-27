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
            toolbar: "insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link unlink | code | image",
            plugins: 'link code image',
            file_browser_callback: function(field_name, url, type, win) {
                tinymce.activeEditor.windowManager.open({
                    title: 'File manager',
                    body: [
                        {type: 'textbox', name: 'title', label: 'Title'}
                    ],
                    onsubmit: function(e) {
                        // Insert content when the window form is submitted
                        editor.insertContent('Title: ' + e.data.title);
                    }
                });
                console.log(field_name);
                console.log(url);
                console.log(type);
                console.log(win);
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