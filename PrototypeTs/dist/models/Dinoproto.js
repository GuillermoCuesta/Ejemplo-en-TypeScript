"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dinoproto = void 0;
var Pterodactilo_1 = require("./dinosaurios/Pterodactilo");
var TRex_1 = require("./dinosaurios/TRex");
var Dinoproto = /** @class */ (function () {
    function Dinoproto() {
        this.protos = {};
        this.protos['TRex1'] = new TRex_1.TRex(5.87, 'Carnivoro', 'Holotype', 0.06);
        this.protos['Pterodactilo1'] = new Pterodactilo_1.Pterodactilo(1.8, 'Carnivoro', 'Cuvier', 'Rosado');
    }
    Dinoproto.prototype.cloneDino = function (tipo) {
        return this.protos[tipo];
    };
    return Dinoproto;
}());
exports.Dinoproto = Dinoproto;
//# sourceMappingURL=Dinoproto.js.map