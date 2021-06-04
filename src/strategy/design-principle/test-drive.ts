import Animal from "./Animal";
import Dog from "./dog";
import Cat from "./cat";

// let d: Dog = new Dog();
// d.bark();

// let animal: Animal = new Dog();
// animal.makeSound();
// animal = new Cat();
// animal.makeSound();

let getAnimal = () => {
	return new Cat();
}

let animal: Animal = getAnimal();
animal.makeSound(); // bark sound