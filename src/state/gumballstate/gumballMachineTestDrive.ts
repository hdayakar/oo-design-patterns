import { GumballMachine } from "./gumballMachine";

class GumballMachineTestDrive {

	public main(): void {
		let gumballMachine: GumballMachine = new GumballMachine(5);

		console.log(gumballMachine);

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();

		console.log(gumballMachine);

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();

		console.log(gumballMachine);
	}
}
let gumballMachineTestDrive = new GumballMachineTestDrive();
gumballMachineTestDrive.main();