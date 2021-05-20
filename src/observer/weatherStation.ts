import Observable from "./observable";
import Observer from "./observer";

export default class WeatherStation implements Observable {
	private observers: Observer[];
	private temperature: number;

	constructor() {
		this.observers = [];
		this.temperature = 100;
	}

	public add(o: Observer): void {
		this.observers.push(o);
	}

	public remove(o: Observer): void {
		let i = this.observers.indexOf(o);
		if (i > -1) {
			this.observers.splice(i, 1);
		}
	}

	public notify(): void {
		for (var i = 0; i < this.observers.length; i++) {
			let observer: Observer = this.observers[i];
			observer.update();
		}
	}

	public setTemperature(temp: number) {
		this.temperature = temp;
	}

	public getTemperature(): number {
		return this.temperature;
	}
}