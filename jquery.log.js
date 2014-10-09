/*
* Author: Ondrej Maksi
* Web: ondrejmaksi.com
* GitHub: https://github.com/omaksi/jquery.log.js
* License: MIT
*/

(function($) {
 
    $.fn.log = function(data, options) {

        if ($.fn.log.options.enabled === false){
            if (this instanceof jQuery){
                return this;
            } else {
                return;
            }
        }

        var toLog = null;

        if (data){
            toLog = data;
        } else {
            toLog = this;
        }

        if ( $.isArray(toLog) &&  $.fn.log.options.loopArrays){
            if (toLog instanceof jQuery){
                toLog.each(function() {
                    console.log(this);
                });
            } else {
                for (var i = 0; i < toLog.length; i++) {
                    console.log(toLog[i]);
                };
            }
        } else {
            console.log(toLog);
        }

        if (this instanceof jQuery){
            return this;
        }
    };

    $.fn.log.defaults = {
        enabled:true,
        loopArrays: false
    }

    $.fn.log.options = $.extend({}, $.fn.log.defaults);

    $.fn.log.setOptions = function(options){
        if (typeof options === "object"){
            $.fn.log.options = options;
        } else {
            console.warn("log.js: invalid settings");
        }
    }

    $.fn.log.enable = function(){
        $.fn.log.options.enabled = true;
    }

    $.fn.log.disable = function(){
        $.fn.log.options.enabled = false;
    }

    $.log = $.fn.log;
 
}(jQuery));