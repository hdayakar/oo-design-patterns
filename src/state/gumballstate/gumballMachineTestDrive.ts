import { GumballMachine } from "./gumballMachine";

class GumballMachineTestDrive {

	public main(): void {
		let gumballMachine: GumballMachine = new GumballMachine(3);

		console.log(gumballMachine.toString());

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();

		console.log(gumballMachine.toString());

		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();
		gumballMachine.insertQuarter();
		gumballMachine.turnCrank();

		console.log(gumballMachine.toString());

		gumballMachine.insertQuarter();
		gumballMachine.ejectQuarter();
		gumballMachine.turnCrank();
	}
}
let gumballMachineTestDrive = new GumballMachineTestDrive();
gumballMachineTestDrive.main();