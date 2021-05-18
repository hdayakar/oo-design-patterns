import FlyBehavior from './flyBehavior';
import QuackBehavior from './quackBehavior';

export default abstract class Duck {
	flyBehavior: FlyBehavior;
	quackBehavior: QuackBehavior;
 
	public setFlyBehavior (fb: FlyBehavior): void {
		this.flyBehavior = fb;
	}
 
	public setQuackBehavior(qb: QuackBehavior): void {
		this.quackBehavior = qb;
	}
 
	abstract display(): void;
 
	public performFly(): void {
		this.flyBehavior.fly();
	}
 
	public performQuack(): void {
		this.quackBehavior.quack();
	}
 
	public swim(): void {
		console.log("All ducks float, even decoys!");
	}
}
