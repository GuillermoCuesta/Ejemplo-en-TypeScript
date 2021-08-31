"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pterodactilo = void 0;
var Dinosaurio_1 = require("../Dinosaurio");
var Pterodactilo = /** @class */ (function (_super) {
    __extends(Pterodactilo, _super);
    function Pterodactilo(altura, alimentacion, especie, color_alas) {
        var _this = _super.call(this, altura, alimentacion, especie) || this;
        _this.color_alas = color_alas;
        return _this;
    }
    return Pterodactilo;
}(Dinosaurio_1.Dinosaurio));
exports.Pterodactilo = Pterodactilo;
//# sourceMappingURL=Pterodactilo.js.map