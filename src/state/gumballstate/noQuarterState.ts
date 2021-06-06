import { GumballMachine } from "./gumballMachine";
import { State } from "./state";

export default class NoQuarterState implements State {
	private gumballMachine: GumballMachine;
 
	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine;
	}
  
	public insertQuarter(): void {
		console.log("You inserted a quarter");
		this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
	}
 
	public ejectQuarter(): void {
		console.log("You haven't inserted a quarter");
	}
 
	public turnCrank(): void {
		console.log("You turned, but there's no quarter");
	}

    public dispense(): void {
        console.log("You need to pay first");
    }
 
	public toString(): string {
		return "waiting for quarter";
	}
}