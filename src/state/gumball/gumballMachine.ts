export enum State {
	SOLD_OUT = 0,
	NO_QUARTER = 1,
	HAS_QUARTER = 2,
	SOLD = 3
}

export default class GumballMachine {
 
	private state: State = State.SOLD_OUT;
	private count: number = 0;
  
	constructor(count: number) {
		this.count = count;
		if (this.count > 0) {
			this.state = State.NO_QUARTER;
		}
	}
  
	public insertQuarter(): void {
		if (this.state == State.HAS_QUARTER) {
			console.log("You can't insert another quarter");
		} else if (this.state == State.NO_QUARTER) {
			this.state = State.HAS_QUARTER;
			console.log("You inserted a quarter");
		} else if (this.state == State.SOLD_OUT) {
			console.log("You can't insert a quarter, the machine is sold out");
		} else if (this.state == State.SOLD) {
        	console.log("Please wait, we're already giving you a gumball");
		}
	}

	public ejectQuarter(): void {
		if (this.state == State.HAS_QUARTER) {
			console.log("Quarter returned");
			this.state = State.NO_QUARTER;
		} else if (this.state == State.NO_QUARTER) {
			console.log("You haven't inserted a quarter");
		} else if (this.state == State.SOLD) {
			console.log("Sorry, you already turned the crank");
		} else if (this.state == State.SOLD_OUT) {
        	console.log("You can't eject, you haven't inserted a quarter yet");
		}
	}
 

 
 
	public turnCrank(): void {
		if (this.state == State.SOLD) {
			console.log("Turning twice doesn't get you another gumball!");
		} else if (this.state == State.NO_QUARTER) {
			console.log("You turned but there's no quarter");
		} else if (this.state == State.SOLD_OUT) {
			console.log("You turned, but there are no gumballs");
		} else if (this.state == State.HAS_QUARTER) {
			console.log("You turned...");
			this.state = State.SOLD;
			this.dispense();
		}
	}
 
	public dispense(): void {
		if (this.state == State.SOLD) {
			console.log("A gumball comes rolling out the slot");
			this.count = this.count - 1;
			if (this.count == 0) {
				console.log("Oops, out of gumballs!");
				this.state = State.SOLD_OUT;
			} else {
				this.state = State.NO_QUARTER;
			}
		} else if (this.state == State.NO_QUARTER) {
			console.log("You need to pay first");
		} else if (this.state == State.SOLD_OUT) {
			console.log("No gumball dispensed");
		} else if (this.state == State.HAS_QUARTER) {
			console.log("No gumball dispensed");
		}
	}
 
	public refill(numGumBalls: number): void {
		this.count = numGumBalls;
		this.state = State.NO_QUARTER;
	}

	public toString(): string {
		let result = "";
		result = result+"\nMighty Gumball, Inc.";
		result = result + "\nJava-enabled Standing Gumball Model #2004\n";
		result = result + "Inventory: " + this.count + " gumball";
		if (this.count != 1) {
			result = result +"s";
		}
		result = result+"\nMachine is ";
		if (this.state == State.SOLD_OUT) {
			result = result+"State.sold out";
		} else if (this.state == State.NO_QUARTER) {
			result = result+"waiting for quarter";
		} else if (this.state == State.HAS_QUARTER) {
			result = result+"waiting for turn of crank";
		} else if (this.state == State.SOLD) {
			result = result+"delivering a gumball";
		}
		result = result+"\n";
		return result.toString();
	}
}


