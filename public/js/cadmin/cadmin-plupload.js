var pluploadcustom = {
    image: function(obj) {
        var uploader = new plupload.Uploader({
// General settings
            runtimes: 'html5,gears,silverlight,browserplus,html4',
            url: 'upload.php',
            max_file_size: '10mb',
            chunk_size: '10mb',
            unique_names: true,
            drop_element: 'container',
            container: 'dropimagebox',
            browse_button: 'browse_files',
            // Specify what files to browse for
            filters: [
                {title: "Image files", extensions: "jpg,gif,png,bmp"}
            ],
            // Flash settings
            flash_swf_url: '/plupload/js/plupload.flash.swf',
            // Silverlight settings
            silverlight_xap_url: '/plupload/js/plupload.silverlight.xap',
        });
        uploader.init();
        uploader.bind('FilesAdded', function(up, files) {
            uploader.start();
        });
        uploader.bind('FileUploaded', function(up, file, info) {

            var ifile = JSON.parse(info.response);
            var obj = cadmin.getObject();

            var newx;
            var newy;
            var x = obj.data('imagex');
            var y = obj.data('imagey');
            if (ifile.x >= x && ifile.y >= y) {

                var size = url.calculate(x, y, 500, 500);
                if (x < 500 && y < 500) {
                    size['x'] = x;
                    size['y'] = y;
                }


                $('#container').attr({'src': ifile.path + '/' + size['x'] + '/' + size['y'] + '/' + ifile.filename + '.' + ifile.extension, 'data-md5': ifile.md5});

            }

            else {
                draw.popupWindow('Too small image!')
            }



        });
        // PreInit events, bound before any internal events
//        
//                    
//
////                    log('[FileUploaded] File:', file, "Info:", info);
//
//                    var obj = cadmin.getObject();
//
//
//                    var li = $('<li>').attr({'class': 'dropbox'}).appendTo('#sortable2');
//                    //var imagediv = $('<div>').attr({'class': 'editimage2'}).appendTo(li);
//
//                   

        uploader.refresh();
    },
    gallery: function(obj) {
        var uploader = new plupload.Uploader({
// General settings
            runtimes: 'html5,gears,silverlight,browserplus,html4',
            url: 'upload.php',
            max_file_size: '10mb',
            chunk_size: '10mb',
            unique_names: true,
            drop_element: 'sortable2',
            container: 'sortable2',
            browse_button: 'browse_files',
            // Specify what files to browse for
            filters: [
                {title: "Image files", extensions: "jpg,gif,png,bmp"}
            ],
            // Flash settings
            flash_swf_url: '/plupload/js/plupload.flash.swf',
            // Silverlight settings
            silverlight_xap_url: '/plupload/js/plupload.silverlight.xap',
        });
        uploader.init();

        uploader.bind('FilesAdded', function(up, files) {
            uploader.start();
        });
        uploader.bind('FileUploaded', function(up, file, info) {

            var file = JSON.parse(info.response);

//                    log('[FileUploaded] File:', file, "Info:", info);

            var obj = cadmin.getObject();

            var li = $('<li>').attr({'class': 'dropbox'}).appendTo('#sortable2');
            //var imagediv = $('<div>').attr({'class': 'editimage2'}).appendTo(li);

            var newx;
            var newy;
            var x = obj.data('imagex');
            var y = obj.data('imagey');
            if (file.x >= x && file.y >= y) {



                var size = url.calculate(x, y, 200, 200);
                var newUrl = url.newUrl(file.path + '/' + file.filename + '.' + file.extension, size['x'], size['y']);

                var imagesrc = $('<img>').attr({'src': newUrl, 'data-pos': '0', 'data-md5': file.md5}).appendTo(li);



            }
            else {
                draw.popupWindow('Too small image!')
            }





        });
        // PreInit events, bound before any internal events
//        
//                    
//
////                    log('[FileUploaded] File:', file, "Info:", info);
//
//                    var obj = cadmin.getObject();
//
//
//                    var li = $('<li>').attr({'class': 'dropbox'}).appendTo('#sortable2');
//                    //var imagediv = $('<div>').attr({'class': 'editimage2'}).appendTo(li);
//
//                   

        uploader.refresh();
    }
};