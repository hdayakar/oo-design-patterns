import MuteQuack from './muteQuack';
import FlyNoWay from './flyNoWay';
import Duck from './duck';
export default class DecoyDuck extends Duck {
	constructor() {
		super();
		this.setFlyBehavior(new FlyNoWay());
		this.setQuackBehavior(new MuteQuack());
	}
	public display(): void {
		console.log("I'm a duck Decoy");
	}
}
