// follow @HenrikJoreteg and @andyet if you like this ;)
(function (window) {
    var ls = window.localStorage,
        out;
    if (ls && ls.debug && window.console) {
        out = window.console;
    } else {
        var out = {},
            methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),
            l = methods.length,
            fn = function () {};
        
        while (l--) {
            out[methods[l]] = fn;
        }
    }
    if(typeof exports !== 'undefined') {
        module.exports = out;
    } else {
        window.console = out;
    }
})(window); // make window a local var compression optimization.