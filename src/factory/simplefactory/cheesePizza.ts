import Pizza from "./pizza";

export default class VeggiePizza extends Pizza {
	constructor() {
		super();
		this.name = "Cheese Pizza";
		this.dough = "Regular Crust";
		this.sauce = "Marinara Pizza Sauce";
		this.toppings.push("Fresh mozzarella");
		this.toppings.push("Parmesan");
	}
}