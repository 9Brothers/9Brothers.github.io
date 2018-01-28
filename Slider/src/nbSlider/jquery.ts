/// <reference path="../../typings/index.d.ts" />

(() => {

  let modOnePromisse = (): JQueryPromise<string> => {
    let modPromisse = $.Deferred();

    modPromisse.resolve('mod one');

    return modPromisse.promise();
  };

  let modTwoPromisse = (): JQueryPromise<any> => {
    let modPromisse = $.Deferred();

    modPromisse.resolve('mod two');

    return modPromisse.promise();
  }

  modOnePromisse()
    .pipe((result) => {
      
      $("#main").text(result);

      return modTwoPromisse();
    })
    .pipe((result) => {
      
      $("#main").text(result);
    })



})();