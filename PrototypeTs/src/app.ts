import { Dinoproto } from './models/Dinoproto';

const generator = new Dinoproto();
const dinoclone = generator.cloneDino('TRex1');
console.log(dinoclone.getAltura());
