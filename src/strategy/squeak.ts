import QuackBehavior from './quackBehavior';

export default class Squeak implements QuackBehavior {
	public quack(): void {
		console.log("Squeak");
	}
}
