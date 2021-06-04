import Animal from "./Animal";

export default class Cat implements Animal {
	public makeSound(): void {
		this.meow();
	}

	public meow(): void {
		console.log("meow sound")
	}
}