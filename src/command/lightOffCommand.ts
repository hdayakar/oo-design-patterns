import Command from "./command";
import Light from "./light";

export default class LightOffCommand implements Command {
	light: Light;

	constructor(light: Light) {
		this.light = light;
	}

	public execute(): void {
		this.light.off();
	}
}