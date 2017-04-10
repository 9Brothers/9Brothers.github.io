/// <reference path="../typings/index.d.ts" />
var Maps = (function () {
    function Maps() {
    }
    Maps.Run = function (selector) {
        this.selector = selector;
        this.Render();
    };
    Maps.Init = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 8
        });
    };
    Maps.Render = function () {
        var template = "\n      <div id=\"nb-map\"></div>\n      <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyB07IRjMXwRi3I_P0XhfC2a-BsISkkB-8Q&callback=Maps.Init\" async defer></script>\n    ";
        $(this.selector).append(template);
    };
    return Maps;
}());
