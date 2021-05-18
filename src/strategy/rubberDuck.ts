import Duck from './duck';
import Squeak from './squeak';
import FlyNoWay from './flyNoWay';


export default class RubberDuck extends Duck {
 
	constructor() {
		super();
		this.flyBehavior = new FlyNoWay();
		this.quackBehavior = new Squeak();
	}
 
	public display(): void {
		console.log("I'm a rubber duckie");
	}
}
