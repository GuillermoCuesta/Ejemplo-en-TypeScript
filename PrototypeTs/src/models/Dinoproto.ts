import { Pterodactilo } from './dinosaurios/Pterodactilo';
import { TRex } from './dinosaurios/TRex';

export class Dinoproto {
	protos: any = {};
	constructor() {
		this.protos['TRex1'] = new TRex(
			5.87,
			'Carnivoro',
			'Holotype',
			0.06
		);
		this.protos['Pterodactilo1'] = new Pterodactilo(
			1.8,
			'Carnivoro',
			'Cuvier',
			'Rosado'
		);
	}

	public cloneDino(tipo: string) {
		return this.protos[tipo];
	}
}
