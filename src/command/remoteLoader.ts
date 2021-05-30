import Light from "./light";
import LightOffCommand from "./lightOffCommand";
import LightOnCommand from "./lightOnCommand";
import RemoteControl from "./remoteControl";
import Stereo from "./stereo";
import StereoOffCommand from "./stereoOffCommand";
import StereoOnWithCDCommand from "./stereoOnWithCDCommand";

export default class RemoteLoader {
	public static main(): void {
		let remoteControl: RemoteControl = new RemoteControl();

		let livingRoomLight: Light = new Light("Living Room");
		let kitchenRoomLight: Light = new Light("Kitchen");

		let stereo: Stereo = new Stereo("Living Room");

		let livingRoomLightOn: LightOnCommand = new LightOnCommand(livingRoomLight);
		let livingRoomLightOff: LightOffCommand = new LightOffCommand(livingRoomLight);
		let kitchenRoomLightOn: LightOnCommand = new LightOnCommand(kitchenRoomLight);
		let kitchenRoomLightOff: LightOffCommand = new LightOffCommand(kitchenRoomLight);

		let stereoOnWithCD: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo);
		let stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

		remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
		remoteControl.setCommand(1, kitchenRoomLightOn, kitchenRoomLightOff);
		remoteControl.setCommand(3, stereoOnWithCD, stereoOff);

		// console.log(remoteControl);

		remoteControl.onButtonWasPushed(0);
		remoteControl.offButtonWasPushed(0);
		remoteControl.onButtonWasPushed(1);
		remoteControl.offButtonWasPushed(1);
		remoteControl.onButtonWasPushed(3);
		remoteControl.offButtonWasPushed(3);
	}
}

RemoteLoader.main();