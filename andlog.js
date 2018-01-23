// follow @HenrikJoreteg and @andyet if you like this ;)
(function () {
    function getLocalStorageSafely() {
        var localStorage;
        try {
            localStorage = window.localStorage;
        } catch (e) {
            // failed: access to localStorage is denied
        }
        return localStorage;
    }

    var inNode = typeof window === 'undefined',
        ls = !inNode && getLocalStorageSafely(),
        out = {};

    if (inNode) {
        module.exports = console;
        return;
    }

    var andlogKey = ls.andlogKey || 'debug'
    if (ls && ls[andlogKey] && window.console) {
        out = window.console;
    } else {
        var methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),
            l = methods.length,
            fn = function () {};

        while (l--) {
            out[methods[l]] = fn;
        }
    }
    if (typeof exports !== 'undefined') {
        module.exports = out;
    } else {
        window.console = out;
    }
})();
