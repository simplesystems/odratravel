var App = function() {



    var handleLoginForm = function() {
        jQuery('#forget-password').click(function() {
            jQuery('#loginform').hide();
            jQuery('#forgotform').show(200);
        });

        jQuery('#forget-btn').click(function() {

            jQuery('#loginform').slideDown(200);
            jQuery('#forgotform').slideUp(200);
        });
    }

    var handleFixInputPlaceholderForIE = function() {
        //fix html5 placeholder attribute for ie7 & ie8
        if (jQuery.browser.msie && jQuery.browser.version.substr(0, 1) <= 9) { // ie7&ie8
            jQuery('input[placeholder], textarea[placeholder]').each(function() {

                var input = jQuery(this);

                jQuery(input).val(input.attr('placeholder'));

                jQuery(input).focus(function() {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                jQuery(input).blur(function() {
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    }


    return {
        // login page setup
        initLogin: function() {
            handleLoginForm();
            handleFixInputPlaceholderForIE();
        }

    };



}();