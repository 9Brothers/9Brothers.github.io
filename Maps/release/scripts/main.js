/// <reference path="../../typings/index.d.ts" />
var Maps = (function () {
    function Maps() {
    }
    Maps.Run = function (args) {
        this.args = args;
        this.Render();
    };
    Maps.Init = function () {
        this.RenderMap();
        this.AddMarkers(this.args.dataSource);
    };
    Maps.Render = function () {
        var template = "\n      <div id=\"" + this.mapSelector + "\" style='width: 100%;height: 100%'></div>      \n    ";
        $(this.args.selector).append(template);
        template = "\n      <script src=\"https://maps.googleapis.com/maps/api/js?key=" + this.args.key + "&callback=Maps.Init\" async defer></script>\n    ";
        $('body').append(template);
    };
    Maps.RenderMap = function () {
        this.map = new google.maps.Map(document.getElementById(this.mapSelector), {
            center: {
                lat: -34.397,
                lng: 150.644
            },
            zoom: 8
        });
    };
    Maps.AddMark = function (mark) {
        this.map.setCenter(mark.latlng);
        var marker = new google.maps.Marker({
            position: mark.latlng,
            map: this.map,
            title: mark.title
        });
    };
    Maps.AddMarkers = function (markers) {
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var m = markers_1[_i];
            this.AddMark(m);
        }
    };
    Maps.GetPositions = function () {
        var result = [];
        $.ajax({
            url: '/datasource/markers.json',
            headers: { "Accept": "application/json" },
            method: "GET",
            async: false,
            success: function (response) {
                result = response.positions;
            },
            error: function (error) {
                console.log(error);
            }
        });
        return result;
    };
    return Maps;
}());
Maps.mapSelector = 'nb-map';
