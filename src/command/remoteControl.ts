import Command from "./command";
import NoCommand from "./noCommand";

export default class RemoteControl {
	private onCommands: Command[];
	private offCommands: Command[];

	constructor() {
		this.offCommands = [];
		this.onCommands = [];

		let noCommand: Command = new NoCommand();
		for (var i = 0; i < 7; i++) {
			this.onCommands[i] = noCommand;
			this.offCommands[i] = noCommand;
		}
	}

	public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
		this.onCommands[slot] = onCommand;
		this.offCommands[slot] = offCommand;
	}

	public onButtonWasPushed(slot: number): void {
		this.onCommands[slot].execute();
	}

	public offButtonWasPushed(slot: number): void {
		this.offCommands[slot].execute();
	}

}