$(document).ready(function() {
    $.ajax
            ({
                type: "POST",
                url: "/cadmin.php?check=1",
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

                }
            });


});