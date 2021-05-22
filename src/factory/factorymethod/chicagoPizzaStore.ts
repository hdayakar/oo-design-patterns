import PizzaStore from "./pizzaStore";
import Pizza from "./pizza";
import ChicagoStyleCheesePizza from "./chicagoStyleCheesePizza";
import ChicagoStyleVeggiePizza from "./chicagoStyleVeggiePizza";
import ChicagoStylePepperoniPizza from "./chicagoStylePepperoniPizza";

export default class ChicagoPizzaStore extends PizzaStore {

	public createPizza(item: string): Pizza {
		if (item == "cheese") {
			return new ChicagoStyleCheesePizza();
		} else if (item == "veggie") {
			return new ChicagoStyleVeggiePizza();
		} else if (item == "clam") {
			return new ChicagoStyleCheesePizza();
		} else if (item == "pepperoni") {
			return new ChicagoStylePepperoniPizza();
		} else return null;
	}
}
