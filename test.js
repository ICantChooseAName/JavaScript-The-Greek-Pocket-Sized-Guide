class iterableRange {
    constructor(lower, upper) {
        this.value = lower;
        this.upper = upper;
        this.lower = lower;
    }

    [Symbol.iterator] () {
        return this;
    }

    next() {
        if (this.value < this.upper)
            return { value: this.value++, done: false }
        else {
            this.value = this.lower;
            return { done: true };
        }
    }
}

let ran = new iterableRange(0, 10);
for (const x of ran)
    console.log(x);

for (const x of ran)
    console.log(x);
