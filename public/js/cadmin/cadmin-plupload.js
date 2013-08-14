var pluploadcustom = {
    image: function(obj) {
        var uploader = new plupload.Uploader({
            // General settings
            runtimes: 'html5,gears,flash,silverlight,browserplus,html4',
            url: '/cadmin/upload',
            max_file_size: '10mb',
            chunk_size: '2mb',
            unique_names: true,
            drop_element: 'dropimagebox',
            //container: 'container',
            browse_button: 'browse_files',
            // Specify what files to browse for
            filters: [
                {title: "Image files", extensions: "jpg,gif,png,bmp"}
            ],
            // Flash settings
            flash_swf_url: '/plupload/js/plupload.flash.swf',
            // Silverlight settings
            silverlight_xap_url: '/plupload/js/plupload.silverlight.xap'
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

                var path = url.newUrl(ifile.id, size['x'], size['y']);
                $('#container').attr({'src': path, 'data-md5': ifile.md5});

            }

            else {
                draw.popupWindow('Too small image!');
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

    },
    gallery: function(obj) {
        var uploader = new plupload.Uploader({
// General settings
            runtimes: 'html5,gears,flash,silverlight,browserplus,html4',
            url: '/cadmin/upload',
            max_file_size: '10mb',
            chunk_size: '2mb',
            unique_names: true,
            drop_element: 'sortable2',
            //container: 'cadmin_add',
            browse_button: 'browse_files',
            // Specify what files to browse for
            filters: [
                {title: "Image files", extensions: "jpg,gif,png,bmp"}
            ],
            // Flash settings
            flash_swf_url: '/plupload/js/plupload.flash.swf',
            // Silverlight settings
            silverlight_xap_url: '/plupload/js/plupload.silverlight.xap'
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
                var path = url.newUrl(file.id, size['x'], size['y']);
                var imagesrc = $('<img>').attr({'src': path, 'data-pos': '0', 'data-md5': file.md5}).appendTo(li);



            }
            else {
                draw.popupWindow('Too small image!');
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


    },
    file: function() {
        var uploader = new plupload.Uploader({
            runtimes: 'gears,html5,flash,silverlight,browserplus',
            browse_button: 'pickfiles',
            container: 'container',
            max_file_size: '10mb',
            url: 'cadmin/upload',
            flash_swf_url: '/plupload/js/plupload.flash.swf',
            silverlight_xap_url: '/plupload/js/plupload.silverlight.xap',
            filters: [
                {title: "Image files", extensions: "jpg,gif,png"},
                {title: "Zip files", extensions: "zip"}
            ],
            resize: {width: 320, height: 240, quality: 90}
        });

        uploader.bind('Init', function(up, params) {
        });

        uploader.init();

        uploader.bind('FilesAdded', function(up, files) {
            uploader.start();
            up.refresh(); // Reposition Flash/Silverlight
        });

        uploader.bind('FileUploaded', function(up, file) {
            var obj = cadmin.getObject();
            fileManager.loadFiles(obj.data('imagex'), obj.data('imagey'), 'all', 1, 6);

        });

    }
}