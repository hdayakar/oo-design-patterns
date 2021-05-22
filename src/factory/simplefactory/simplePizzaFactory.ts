import Pizza from "./pizza";
import CheesePizza from "./cheesePizza";
import PepperoniPizza from "./pepperoniPizza";
import ClamPizza from "./clamPizza";
import VeggiePizza from "./veggiePizza";

export default class SimplePizaaFactory {
	public pizza: Pizza = null;

	public createPizza(type: string): Pizza {
		if (type == "cheese") {
			this.pizza = new CheesePizza();
		} else if (type == "pepperoni") {
			this.pizza = new PepperoniPizza();
		} else if (type == "clam") {
			this.pizza = new ClamPizza();
		} else if (type == "veggie") {
			this.pizza = new VeggiePizza();
		}
		return this.pizza;
	}
}