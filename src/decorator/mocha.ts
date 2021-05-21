import CondimentDecorator from "./condimentDecorator";
import Beverage from "./beverage";

export default class Mocha extends CondimentDecorator {
	beverage: Beverage;

	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	public getDescription(): string {
		return this.beverage.getDescription() + ", Mocha";
	}

	public cost(): number {
		return .20 + this.beverage.cost();
	}
}