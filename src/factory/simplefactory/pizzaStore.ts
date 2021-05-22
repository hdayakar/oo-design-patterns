import SimplePizzaFactory from "./simplePizzaFactory";
import Pizza from "./pizza";

export default class PizzaStore {
	factory: SimplePizzaFactory;
	
	constructor(factory: SimplePizzaFactory) { 
		this.factory = factory;
	}
	
	public orderPizza(type: string): Pizza {
		let pizza: Pizza;
		
		pizza = this.factory.createPizza(type);
 
		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

}
