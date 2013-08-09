var reload = {
    all: function() {
        if (slider.length > 0) {
            slider.reloadSlider();
        }
        if (slider2.length > 0) {
            slider2.reloadSlider();
        }
    },
    text: function(obj) {
        $.ajax
                ({
                    type: "POST",
                    url: "/cadmin/getText",
                    data: {
                        'key': obj.data('key')

                    },
                    cache: false,
                    success: function(data)
                    {
                        $('#editedtext').html(data);
                    }
                });
    }
};