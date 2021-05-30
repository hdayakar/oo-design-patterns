import CaffeineBeverage from "./caffeineBeverage";

export default class Coffee extends CaffeineBeverage {
	public brew(): void {
		console.log("Dripping coffee through the filter");
	}
	public addCondiments(): void {
		console.log("Adding Sugar and Milk");
	}
}