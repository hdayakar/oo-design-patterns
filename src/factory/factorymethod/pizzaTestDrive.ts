import PizzaStore from "./pizzaStore";
import NYPizzaStore from "./nyPizzaStore";
import ChicagoPizzaStore from "./chicagoPizzaStore";
import Pizza from "./pizza";

class PizzaTestDrive {
 
	public main(): void {
		let nyStore: PizzaStore = new NYPizzaStore();
		let chicagoStore: PizzaStore = new ChicagoPizzaStore();
 
		let pizza: Pizza = nyStore.orderPizza("cheese");
		console.log("Ethan ordered a " + pizza.getName() + "\n");
 
		pizza = chicagoStore.orderPizza("cheese");
		console.log("Joel ordered a " + pizza.getName() + "\n");

		/*
		--- Making a NY Style Sauce and Cheese Pizza ---
		Preparing NY Style Sauce and Cheese Pizza
		Tossing dough...
		Adding sauce...
		Adding toppings:
		Grated Reggiano Cheese
		Bake for 25 minutes at 350
		Cutting the pizza into diagonal slices
		Place pizza in official PizzaStore box
		Ethan ordered a NY Style Sauce and Cheese Pizza

		--- Making a Chicago Style Deep Dish Cheese Pizza ---
		Preparing Chicago Style Deep Dish Cheese Pizza
		Tossing dough...
		Adding sauce...
		Adding toppings:
		Shredded Mozzarella Cheese
		Bake for 25 minutes at 350
		Cutting the pizza into square slices
		Place pizza in official PizzaStore box
		Joel ordered a Chicago Style Deep Dish Cheese Pizza
		*/
	}
}

let pizzaTestDrive = new PizzaTestDrive();
pizzaTestDrive.main();