export default abstract class CaffeineBeverage {
	public prepareRecipe(): void {
		this.boilWater();
		this.brew();
		this.pourInCup();
		this.addCondiments();
	}

	abstract brew(): void;
	abstract addCondiments(): void;

	boilWater(): void {
		console.log("Boiling water");
	}

	pourInCup(): void {
		console.log("Pouring into cup");
	}
}