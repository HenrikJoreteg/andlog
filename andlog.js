// follow @HenrikJoreteg and @andyet if you like this ;)
(function () {
    function checkLocalStorageSafely() {
        var hasLocalStorage = true;
        try {
            hasLocalStorage = !!window.localStorage;
        } catch (e) {
            hasLocalStorage = false;
        }
        return hasLocalStorage;
    }

    var inNode = typeof window === 'undefined',
        ls = !inNode && checkLocalStorageSafely(),
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
