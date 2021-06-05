import { GumballMachine } from "./gumballMachine";
import { State } from "./state";

export default class HasQuarterState implements State {
	private gumballMachine: GumballMachine;
 
	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine;
	}
  
	public insertQuarter(): void {
		console.log("You can't insert another quarter");
	}
 
	public ejectQuarter(): void {
		console.log("Quarter returned");
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}
 
	public turnCrank(): void {
		console.log("You turned...");
		this.gumballMachine.setState(this.gumballMachine.getSoldState());
	}

    public dispense(): void {
        console.log("No gumball dispensed");
    }
 
	public toString(): string {
		return "waiting for turn of crank";
	}
}