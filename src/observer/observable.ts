import Observer from './observer';

export default interface Observable {
	add(o: Observer): void;
	remove(o: Observer): void;
	notify(): void;
}