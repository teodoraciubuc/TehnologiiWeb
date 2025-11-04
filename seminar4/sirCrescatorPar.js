class Stream {
  #value;
  #nextvalue;
  static count = 0;

  constructor(value, nextValue) {
    this.#value = value;
    this.#nextvalue = nextValue;
    Stream.count++;
  }
  get value() {
    return this.#value;
  }
  get next() {
    this.#value = this.#nextvalue(this.#value);
    return this.#value;
  }
  static get count() {
    return Stream.count;
  }
}

class sirCrescatorPar extends Stream {
  constructor(startValue) {
    const initialValue = startValue % 2 === 0 ? startValue : startValue + 1;
    super(initialValue, (value) => value + 2);
  }
}

const even = new sirCrescatorPar(3);

for (let i = 0; i < 10; i++) {
  console.log(`even[${i}] = ${even.next}`);
}
console.log(`Nr streamuri create: ${Stream.count}`);
