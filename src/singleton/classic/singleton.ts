// Note: This is not thread safe!

class Singleton {
	private static uniqueInstance: Singleton;

	// other useful instance variables here
	private constructor() {}

	public static getInstance(): Singleton {
		if (this.uniqueInstance == null) {
			this.uniqueInstance = new Singleton();
		}
		return this.uniqueInstance;
	}

	// other useful methods here
}
