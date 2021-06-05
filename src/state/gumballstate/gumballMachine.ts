import HasQuarterState from "./hasQuarterState";
import NoQuarterState from "./noQuarterState";
import SoldOutState from "./soldOutState";
import soldState from "./soldState";
import { State } from "./state";

export class GumballMachine {
	private soldOutState: State;
	private noQuarterState: State;
	private hasQuarterState: State;
	private soldState: State;

	private state: State;
	private count: number;
	
	constructor(numberGumballs: number) {
		this.state = this.soldOutState;
		this.count = 0;

		this.soldOutState = new SoldOutState(this);
		this.noQuarterState = new NoQuarterState(this);
		this.hasQuarterState= new HasQuarterState(this);
		this.soldState = new soldState(this);

		this.count = numberGumballs;
		if (numberGumballs > 0) {
			this.state = this.noQuarterState;
		}
	}

	public insertQuarter(): void {
		this.state.insertQuarter();
	}

	public ejectQuarter(): void {
		this.state.ejectQuarter();
	}

	public turnCrank(): void {
		this.state.turnCrank();
		this.state.dispense();
	}

	setState(state: State) {
		this.state = state;
	}

	releaseBall(): void {
		console.log("A gumball comes rolling out the slot...");
		if (this.count != 0) {
			this.count = this.count -1;
		}
	}

	getcount(): number {
		return this.count;
	}

	refill(count: number) {
		this.count = count;
		this.state = this.noQuarterState;
	}

	public getState(): State {
        return this.state;
    }

    public getSoldOutState(): State {
        return this.soldOutState;
    }

    public getNoQuarterState(): State {
        return this.noQuarterState;
    }

    public getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    public getSoldState(): State {
        return this.soldState;
    }
 
	public toString(): string {
		let result = "";
		result = result+ "\nMighty Gumball, Inc.";
		result = result+ "\nJava-enabled Standing Gumball Model #2004";
		result = result+ "\nInventory: " + this.count + " gumball";
		if (this.count != 1) {
			result = result+ "s";
		}
		result = result+ "\n";
		result = result+ "Machine is " + this.state + "\n";
		return result.toString();
	}
}