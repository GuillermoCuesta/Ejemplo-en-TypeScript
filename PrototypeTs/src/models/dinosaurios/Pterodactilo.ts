import { Dinosaurio } from '../Dinosaurio';

export class Pterodactilo extends Dinosaurio {
	private color_alas: string;
	constructor(
		altura: number,
		alimentacion: string,
		especie: string,
		color_alas: string
	) {
		super(altura, alimentacion, especie);
		this.color_alas = color_alas;
	}
}
