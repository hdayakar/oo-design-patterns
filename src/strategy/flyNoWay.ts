import FlyBehavior from "./flyBehavior";

export default class FlyNoWay implements FlyBehavior {
	public fly(): void {
		console.log("I can't fly");
	}
}
