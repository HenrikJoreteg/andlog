// helps us be selective about logging
if (localStorage && localStorage.debug && window.console) {
    module.exports = window.console;
} else {
    var methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),
        l = methods.length,
        i = 0,
        res = {},
        fn = function () {};
        
    for (; i < l; i++) {
        res[methods[i]] = fn;
    }
    
    module.exports = res;
}