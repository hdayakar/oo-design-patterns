import ChocolateBoiler from "./chocolateBoiler";

export default class ChocolateController {
	public main(): void {
		let boiler: ChocolateBoiler;
		boiler = ChocolateBoiler.getInstance();
		boiler.fill();
		boiler.boil();
		boiler.drain();

		// will return the existing instance
		let boiler2: ChocolateBoiler = ChocolateBoiler.getInstance();
	}
}

let chocolateController = new ChocolateController();
chocolateController.main();

// Creating unique instance of Chocolate Boiler
// Returning instance of Chocolate Boiler
// Returning instance of Chocolate Boiler