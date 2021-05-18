import FlyBehavior from "./flyBehavior";

export default class FlyWithWings implements FlyBehavior {
	public fly(): void {
		console.log("I'm flying!!");
	}
}
