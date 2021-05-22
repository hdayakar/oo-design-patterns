import Pizza from "./pizza";

export default class VeggiePizza extends Pizza {
	constructor() {
		super();
		this.name = "Clam Pizza";
		this.dough = "Thin Crust";
		this.sauce = "White garlic Sauce";
		this.toppings.push("Clams");
		this.toppings.push("Grated parmesan cheese");
	}
}