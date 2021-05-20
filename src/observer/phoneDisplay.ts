import Observer from "./observer";
import WeatherStation from "./weatherStation";

export default class PhoneDisplay implements Observer {
	private station: WeatherStation;
	constructor(station: WeatherStation) {
		this.station = station;
	}

	public update(): void {
		console.log("temperature "+this.station.getTemperature());
	}
}