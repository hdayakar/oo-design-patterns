import Command from "./command";
import Stereo from "./stereo";

export default class StereoOffCommand implements Command {
	private stereo: Stereo;

	constructor(stereo: Stereo) {
		this.stereo = stereo;
	}

	public execute(): void {
		this.stereo.off();
	}
}