// follow @HenrikJoreteg and @andyet if you like this ;)
(function () {
if (localStorage && localStorage.debug && window.console) {
    if (typeof exports !== 'undefined') {
        module.exports = window.console;
    } else {
        // overwrite it... yeah, weird, but it works.
        window.console = window.console;
    }
} else {
    var methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),
        l = methods.length,
        i = 0,
        res = {},
        fn = function () {};
        
    for (; i < l; i++) {
        res[methods[i]] = fn;
    }
    
    if (typeof exports !== 'undefined') {
        module.exports = res;
    } else {
        window.console = res;
    }
}
})();