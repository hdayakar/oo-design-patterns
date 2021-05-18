import FlyBehavior from './flyBehavior';

export default class FlyRocketPowered implements FlyBehavior {
	public fly(): void {
		console.log("I'm flying with a rocket");
	}
}
