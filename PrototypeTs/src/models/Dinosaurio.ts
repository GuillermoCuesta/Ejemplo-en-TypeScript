export abstract class Dinosaurio {
	private altura: number;
	private alimentacion: string;
	private especie: string;

	constructor(altura: number, alimentacion: string, especie: string) {
		this.alimentacion = alimentacion;
		this.altura = altura;
		this.especie = especie;
	}

	public getAltura(): number {
		return this.altura;
	}
}
