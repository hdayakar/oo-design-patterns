export default abstract class Pizza {
	name: string;
	dough: string;
	sauce: string;
	toppings: string[] = [];
 
	public prepare(): void {
		console.log("Preparing " + this.name);
		console.log("Tossing dough...");
		console.log("Adding sauce...");
		console.log("Adding toppings: ");
		for (var i = 0; i < this.toppings.length; i++) {
			console.log("   " + this.toppings[i]);
		}
	}
  
	public bake(): void {
		console.log("Bake for 25 minutes at 350");
	}
 
	public cut(): void {
		console.log("Cutting the pizza into diagonal slices");
	}
  
	public box(): void {
		console.log("Place pizza in official PizzaStore box");
	}
 
	public getName(): string {
		return this.name;
	}

	public toString(): string {
		let display: string = "------"+ this.name + "-----\n" + this.dough + "\n" + this.sauce + "\n";
		for (var i = 0; i < this.toppings.length; i++) {
			display = this.toppings[i] + "\n";
		}
		return display;
	}
}