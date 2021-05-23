import Command from "./command";
import Stereo from "./stereo";

export default class StereoOnWithCDCommand implements Command {
	private stereo: Stereo;
	
	constructor(stereo: Stereo) {
		this.stereo = stereo;
	}

	public execute(): void {
		this.stereo.on();
		this.stereo.setCD();
		this.stereo.setVolume(11);
	}
}