/// <reference path="../../typings/index.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
            url: './datasource/markers.json',
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
        return new Promise(function (resolve) {
            resolve(result);
        });
    };
    Maps.GetPositionsAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.GetPositions()];
                    case 1:
                        pos = _a.sent();
                        this.args.dataSource = pos;
                        return [2 /*return*/];
                }
            });
        });
    };
    return Maps;
}());
Maps.mapSelector = 'nb-map';
