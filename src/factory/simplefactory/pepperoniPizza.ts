import Pizza from "./pizza";

export default class VeggiePizza extends Pizza {
	constructor() {
		super();
		this.name = "Pepperoni Pizza";
		this.dough = "Crust";
		this.sauce = "Marinara Sauce";
		this.toppings.push("Sliced Pepperoni");
		this.toppings.push("Sliced Onion");
		this.toppings.push("Grated parmesan cheese");
	}
}