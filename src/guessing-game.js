class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.offset = Math.ceil( (this.max - this.min) /2 );
    	this.val = this.min + this.offset;
    	return this.val;
    }

    lower() {
    	this.max = this.val;
    }

    greater() {
		this.min = this.val;
    }
}

module.exports = GuessingGame;
