export default class Stereo {
	location: string;

	constructor(location: string) {
		this.location = location;
	}

	public on(): void {
		console.log(this.location + " stereo is on");
	}

	public off(): void {
		console.log(this.location + " stereo is off");
	}

	public setCD(): void {
		console.log(this.location + " stereo is set for CD input");
	}

	public setDVD(): void {
		console.log(this.location + " stereo is set for DVD input");
	}

	public setRadio(): void {
		console.log(this.location + " stereo is set for Radio");
	}

	public setVolume(volume: number): void {
		console.log(this.location + " Stereo volume set to " + volume);
	}
}