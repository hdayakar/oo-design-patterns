import Beverage from './beverage';

export default class DarkRoast extends Beverage {
	constructor() {
		super();
		this.description = "Dark Roast Coffee";
	}

	public cost(): number {
		return .99;
	}
}