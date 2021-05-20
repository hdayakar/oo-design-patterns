import PhoneDisplay from "./phoneDisplay";
import WeatherStation from "./weatherStation";

class Simulate {
	weatherStation: WeatherStation;
	display: PhoneDisplay;

	public main(): void {
		this.weatherStation = new WeatherStation();
		this.display = new PhoneDisplay(this.weatherStation);
		this.weatherStation.add(this.display);
		this.weatherStation.notify(); // temperature 100
		this.weatherStation.setTemperature(150);
		this.weatherStation.notify(); // temperature 150
	}
}

let simulate: Simulate = new Simulate();
simulate.main();