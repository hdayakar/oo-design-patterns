import { GumballMachine } from "./gumballMachine";
import { State } from "./state";

export default class SoldState implements State {
	private gumballMachine: GumballMachine;
 
	constructor(gumballMachine: GumballMachine) {
		this.gumballMachine = gumballMachine;
	}
  
	public insertQuarter(): void {
		console.log("Please wait, we're already giving you a gumball");
	}
 
	public ejectQuarter(): void {
		console.log("Sorry, you already turned the crank");
		this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
	}
 
	public turnCrank(): void {
		console.log("Turning twice doesn't get you another gumball");
		this.gumballMachine.setState(this.gumballMachine.getSoldState());
	}

    public dispense(): void {
        this.gumballMachine.releaseBall();
		if (this.gumballMachine.getcount() > 0) {
			this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
		} else {
			console.log("Oops, out of gumballs!");
			this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
		}
    }
 
	public toString(): string {
		return "dispensing a gumball";
	}
}