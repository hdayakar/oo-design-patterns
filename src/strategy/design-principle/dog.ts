import Animal from "./Animal";

export default class Dog implements Animal {
	public makeSound(): void {
		this.bark();
	}
	
	public bark(): void {
		console.log("bark sound");
	}
}