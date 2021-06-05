import GumballMachine from "./gumballMachine";

class GumballMachineTestDrive {
	private gumballMachine: GumballMachine;
	public main(): void {
		this.gumballMachine = new GumballMachine(5);

		console.log(this.gumballMachine);

		this.gumballMachine.insertQuarter();
		this.gumballMachine.turnCrank();

		console.log(this.gumballMachine);

		this.gumballMachine.insertQuarter();
		this.gumballMachine.ejectQuarter();
		this.gumballMachine.turnCrank();

		console.log(this.gumballMachine);

		this.gumballMachine.insertQuarter();
		this.gumballMachine.turnCrank();
		this.gumballMachine.insertQuarter();
		this.gumballMachine.turnCrank();
		this.gumballMachine.ejectQuarter();

		console.log(this.gumballMachine);

		this.gumballMachine.insertQuarter();
		this.gumballMachine.insertQuarter();
		this.gumballMachine.turnCrank();
		this.gumballMachine.insertQuarter();
		this.gumballMachine.turnCrank();
		this.gumballMachine.insertQuarter();
		this.gumballMachine.turnCrank();

		console.log(this.gumballMachine);
	}
}

let gumballMachine = new GumballMachineTestDrive();
gumballMachine.main();