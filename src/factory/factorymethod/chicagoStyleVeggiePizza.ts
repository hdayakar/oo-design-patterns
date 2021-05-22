import Pizza from "./pizza";

export default class ChicagoStyleVeggiePizza extends Pizza {

	constructor() {
		super();
		this.name = "Chicago Style Deep Dish Veggie Pizza";
		this.dough = "Extra Thick Crust Dough";
		this.sauce = "Plum Tomato Sauce";

		this.toppings.push("Shredded Mozzarella cheese");
		this.toppings.push("Black Olives");
		this.toppings.push("Spinach");
		this.toppings.push("Eggplant");
	}
 
	public cut(): void {
		console.log("Cutting the pizza into square slices");
	}
}
