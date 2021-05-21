import Beverage from "./beverage";
import Espresso from "./espresso";
import DarkRoast from "./darkRoast";
import Mocha from "./mocha";
import Whip from "./whip";
import HouseBlend from "./houseBlend";
import Soy from "./soy";

class StarbuzzCoffee {
	public main(): void {
		let beverage: Beverage = new Espresso();
		console.log(beverage.getDescription() 
				+ " $" + beverage.cost()); // Espresso $1.99
 
		let beverage2: Beverage = new DarkRoast();
		beverage2 = new Mocha(beverage2);
		beverage2 = new Mocha(beverage2);
		beverage2 = new Whip(beverage2);
		console.log(beverage2.getDescription() 
				+ " $" + beverage2.cost()); // Dark Roast Coffee, Mocha, Mocha, Whip $1.49
 
		let beverage3: Beverage = new HouseBlend();
		beverage3 = new Soy(beverage3);
		beverage3 = new Mocha(beverage3);
		beverage3 = new Whip(beverage3);
		console.log(beverage3.getDescription() 
				+ " $" + beverage3.cost()); // House Blend Coffee, Soy, Mocha, Whip $1.34
	}
}

let starbuzzCoffee = new StarbuzzCoffee();
starbuzzCoffee.main();