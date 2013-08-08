demo = 'no';
$(document).ready(function() {
    $.ajax
            ({
                type: "POST",
                url: "/cadmin/check",
                data: '',
                cache: false,
                async: false,
                success: function(data)
                {
                    var answer = JSON.parse(data);
                    if (answer === "success")
                    {
                        cadmin.init();
                    }
                    if (answer === "demo")
                    {
                        demo = 'yes';
                        cadmin.init();
                    }

                }
            });


});