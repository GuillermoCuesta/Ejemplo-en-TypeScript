import { Dinosaurio } from '../Dinosaurio';

export class TRex extends Dinosaurio {
	private longitud_manos: number;
	constructor(
		altura: number,
		alimentacion: string,
		especie: string,
		longitud_manos: number
	) {
		super(altura, alimentacion, especie);
		this.longitud_manos = longitud_manos;
	}
}
