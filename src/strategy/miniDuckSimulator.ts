import MallardDuck from './mallardDuck';
import RubberDuck from './rubberDuck';
import DecoyDuck from './decoyDuck';
import ModelDuck from './modelDuck';
import FlyRocketPowered from './flyRocketPowered';
import Duck from './duck';

class MiniDuckSimulator {
	mallard: MallardDuck;
	rubberDuckie: RubberDuck;
	decoy: DecoyDuck;
	model: ModelDuck;

	public main(): void {
		
		this.mallard = new MallardDuck();
		this.rubberDuckie = new RubberDuck();
		this.decoy = new DecoyDuck();
		this.model = new ModelDuck();

		this.mallard.performQuack(); // Quack
		this.rubberDuckie.performQuack(); // Squeak
		this.decoy.performQuack(); // << Silence >>
   
		this.model.performFly(); // I can't fly
		this.model.setFlyBehavior(new FlyRocketPowered());
		this.model.performFly(); // I'm flying with a rocket

	}
}

let miniDuckSimulator: MiniDuckSimulator = new MiniDuckSimulator();
miniDuckSimulator.main();