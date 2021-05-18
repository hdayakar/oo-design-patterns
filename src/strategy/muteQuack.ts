import QuackBehavior from './quackBehavior';

export default class MuteQuack implements QuackBehavior {
	public quack(): void {
		console.log("<< Silence >>");
	}
}
