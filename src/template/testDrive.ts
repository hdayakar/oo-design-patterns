import Coffee from "./coffee";
import Tea from "./Tea";

class BeverageTestDrive {
	public static main(): void {
 
		let tea: Tea  = new Tea();
		let coffee: Coffee = new Coffee();
 
		console.log("\nMaking tea...");
		tea.prepareRecipe();
 
		console.log("\nMaking coffee...");
		coffee.prepareRecipe();
	}
}

BeverageTestDrive.main();