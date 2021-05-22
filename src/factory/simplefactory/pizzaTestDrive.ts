import PizzaStore from "./pizzaStore";
import SimplePizaaFactory from "./simplePizzaFactory";
import Pizza from "./pizza";

class PizzaTestDrive {
	private factory: SimplePizaaFactory;
	private store: PizzaStore;
	private pizza: Pizza;

	public main(): void {
		this.factory = new SimplePizaaFactory();
		this.store = new PizzaStore(this.factory);

		this.pizza = this.store.orderPizza("cheese");
		console.log("We ordered a "+ this.pizza.getName() + "\n");
		// Preparing Cheese Pizza
		// Baking Cheese Pizza
		// Cutting Cheese Pizza
		// Boxing Cheese Pizza
		// We ordered a Cheese Pizza

		this.pizza = this.store.orderPizza("veggie");
		console.log("We ordered a "+ this.pizza.getName() + "\n");
		// Preparing Veggie Pizza
		// Baking Veggie Pizza
		// Cutting Veggie Pizza
		// Boxing Veggie Pizza
		// We ordered a Veggie Pizza

	}
}

let pizzaTestDrive = new PizzaTestDrive();
pizzaTestDrive.main();