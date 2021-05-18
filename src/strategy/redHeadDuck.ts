import FlyWithWings from './flyWithWings';
import Quack from './quack';
import Duck from './duck';

export default class RedHeadDuck extends Duck {
	constructor() {
		super();
		this.flyBehavior = new FlyWithWings();
		this.quackBehavior = new Quack();
	}
 
	public display(): void {
		console.log("I'm a real Red Headed duck");
	}
}
