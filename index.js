'use strict';

const console_log_level_wrapper = function(config) {
    return require('console-log-level')({
        prefix: function (level) {
            function pad(pad, str, padLeft) {
                if (typeof str === 'undefined')
                    return pad;
                if (padLeft) {
                    return (pad + str).slice(-pad.length);
                } else {
                    return (str + pad).substring(0, pad.length);
                }
            }

            const dateformat = require('dateformat');
            let dateString = dateformat(new Date(), config.pattern);
            if(config.prefix) return pad(new Array(dateString.length + config.prefix.length + 12).join(' '), `[${dateString}][${level.toUpperCase()}][${config.prefix}]`, false);
            else return pad(new Array(dateString.length + 10).join(' '), `[${dateString}][${level.toUpperCase()}]`, false);
        },
        level: config.level
    });
};

module.exports = console_log_level_wrapper;