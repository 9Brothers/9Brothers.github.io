(function () {
    onmessage = function (e) {
        debugger;
        importScripts(e.data.worker.file);
        eval("" + e.data.worker.func);
    };
})();
