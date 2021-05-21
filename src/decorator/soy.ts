import CondimentDecorator from "./condimentDecorator";
import Beverage from "./beverage";

export default class Soy extends CondimentDecorator {
	beverage: Beverage;
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	public getDescription(): string {
		return this.beverage.getDescription() + ", Soy";
	}

	public cost(): number {
		return .15 + this.beverage.cost();
	}
}