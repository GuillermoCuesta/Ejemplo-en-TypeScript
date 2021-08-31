"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dinoproto_1 = require("./models/Dinoproto");
var generator = new Dinoproto_1.Dinoproto();
var dinoclone = generator.cloneDino('TRex1');
console.log(dinoclone.getAltura());
//# sourceMappingURL=app.js.map