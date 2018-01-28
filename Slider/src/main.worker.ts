(() => {
  onmessage = (e) => {
    debugger;
    
    importScripts(e.data.worker.file);
    eval(`${e.data.worker.func}`);
  }
})();