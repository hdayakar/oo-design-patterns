import { GumballMachine } from "./gumballMachine";
import { State } from "./state";

export default class SoldOutState implements State {
	private gumballMachine: GumballMachine;
 
	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine;
	}
  
	public insertQuarter(): void {
		console.log("You can't insert a quarter, the machine is sold out");
	}
 
	public ejectQuarter(): void {
		console.log("You can't eject, you haven't inserted a quarter yet");
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}
 
	public turnCrank(): void {
		console.log("You turned, but there are no gumballs");
		this.gumballMachine.setState(this.gumballMachine.getSoldState());
	}

    public dispense(): void {
        console.log("No gumball dispensed");
    }
 
	public toString(): string {
		return "sold out";
	}
}