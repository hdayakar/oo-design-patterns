import CondimentDecorator from "./condimentDecorator";
import Beverage from "./beverage";

export default class Whip extends CondimentDecorator {
	beverage: Beverage;
	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	public getDescription(): string {
		return this.beverage.getDescription() + ", Whip";
	}

	public cost(): number {
		return .10 + this.beverage.cost();
	}
}