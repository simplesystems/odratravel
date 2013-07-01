var tinymcecustom = {
    start: function(obj) {
        tinymce.init({
            selector: "textarea",
            theme: "modern",
            width: 718,
            height: 250,
            menubar: false,
            toolbar: "insertfile undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
            setup: function(ed) {
//                ed.onKeyUp.add(function(ed, e) {
//                    // define local variables
//                    var tinymax, tinylen, htmlcount;
//
//                    // get individual character limit of this editor
//                    tinymax = ed.settings.charLimit;
//
//                    //grabbing the length of the curent editors content
//                    tinylen = ed.getContent().length;
//                });
//               ed.onInit.add(function(ed) {
//                    var texttoedit = $("*[data-key=" + key + "]").html();
//                    tinyMCE.activeEditor.setContent(texttoedit);
//
//                });

            }
        });
    },
    editor: function(obj) {
        tinymce.init({
            selector: "textarea",
            theme: "modern",
            width: 718,
            height: 168,
            menubar: false,
            toolbar: "insertfile undo redo | bold italic |",
            setup: function(ed) {
//                ed.onKeyUp.add(function(ed, e) {
//                    // define local variables
//                    var tinymax, tinylen, htmlcount;
//
//                    // get individual character limit of this editor
//                    tinymax = ed.settings.charLimit;
//
//                    //grabbing the length of the curent editors content
//                    tinylen = ed.getContent().length;
//                });
//               ed.onInit.add(function(ed) {
//                    var texttoedit = $("*[data-key=" + key + "]").html();
//                    tinyMCE.activeEditor.setContent(texttoedit);
//
//                });

            }
        });
    },
};