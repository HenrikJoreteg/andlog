// follow @HenrikJoreteg and @andyet if you like this ;)
(function (window,localStorage) {
    var out;
    if (localStorage && localStorage.debug && window.console) {
        out = window.console; // overwrite it... yeah, weird, but it works.
    } else {
        out = {};
        var methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),
            l = methods.length,
            i = 0,
            fn = function () {};
        
        for (; i < l; i++) {
            out[methods[i]] = fn;
        }
    
    }
    if(typeof exports !== 'undefined') {
        module.exports = out;
    } else {
        window.console = out;
    }
})(window, localStorage);