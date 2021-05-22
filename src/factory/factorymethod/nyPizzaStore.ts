import PizzaStore from "./pizzaStore";
import Pizza from "./pizza";
import NYStyleCheesePizza from "./nyStyleCheesePizza";
import NYStyleVeggiePizza from "./nyStyleVeggiePizza";
import NYStyleClamPizza from "./nyStyleClamPizza";
import NYStylePepperoniPizza from "./nyStylePepperoniPizza";

export default class NYPizzaStore extends PizzaStore {

	public createPizza(item: string): Pizza {
		if (item == "cheese") {
			return new NYStyleCheesePizza();
		} else if (item == "veggie") {
			return new NYStyleVeggiePizza();
		} else if (item == "clam") {
			return new NYStyleClamPizza();
		} else if (item == "pepperoni") {
			return new NYStylePepperoniPizza();
		} else return null;
	}
}
