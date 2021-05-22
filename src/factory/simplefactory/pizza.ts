
export default abstract class Pizza {
	name: string;
	dough: string;
	sauce: string;
	toppings: string[] = [];

	public getName(): string {
		return this.name;
	}

	public prepare(): void {
		console.log("Preparing " + this.name);
	}

	public bake(): void {
		console.log("Baking " + this.name);
	}

	public cut(): void {
		console.log("Cutting " + this.name);
	}

	public box(): void {
		console.log("Boxing " + this.name);
	}

	public toString(): string {
		// code to display pizza name and ingredients
		let display: string = "------"+ this.name + "-----\n" + this.dough + "\n" + this.sauce + "\n";
		for (var i = 0; i < this.toppings.length; i++) {
			display = this.toppings[i] + "\n";
		}
		return display;
	}
}

