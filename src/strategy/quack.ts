import QuackBehavior from './quackBehavior';

export default class Quack implements QuackBehavior {
	public quack(): void {
		console.log("Quack");
	}
}
