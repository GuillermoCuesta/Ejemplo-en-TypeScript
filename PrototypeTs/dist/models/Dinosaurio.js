"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dinosaurio = void 0;
var Dinosaurio = /** @class */ (function () {
    function Dinosaurio(altura, alimentacion, especie) {
        this.alimentacion = alimentacion;
        this.altura = altura;
        this.especie = especie;
    }
    Dinosaurio.prototype.getAltura = function () {
        return this.altura;
    };
    return Dinosaurio;
}());
exports.Dinosaurio = Dinosaurio;
//# sourceMappingURL=Dinosaurio.js.map