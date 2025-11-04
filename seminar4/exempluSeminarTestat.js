// ~~~~ EX. 1 ~~~~
console.log("Exercitiul 1:");
class Stream {
  #value;
  #nextvalue;
  static #count = 0;

  constructor(value, nextValue) {
    this.#value = value;
    this.#nextvalue = nextValue;
    Stream.#count++;
  }

  get value() {
    return this.#value;
  }

  get next() {
    this.#value = this.#nextvalue(this.#value);
    return this.#value;
  }

  static get count() {
    return Stream.#count;
  }
}

class ConstantStream extends Stream {
  constructor(value) {
    super(value, (value) => value);
  }
}

class NextIntegerStream extends Stream {
  constructor() {
    super(0, (value) => value + 1);
  }
}

const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();

for (let i = 0; i < 5; i++) {
  console.log(`constant[${i}] = ${constant.next}`);
  console.log(`nextInteger[${i}] = ${nextInteger.next}`);
}

console.log(`Număr total de streamuri: ${Stream.count}`);

// ~~~~~~~ EX. 2 ~~~~~~~
console.log("Exercitiul 2:");

class Robot {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

class Weapon {
  constructor(description) {
    this.description = description;
  }

  fire() {
    console.log(`${this.description} is firing`);
  }
}

class CombatRobot extends Robot {
  constructor(name) {
    super(name);
    this.weapons = [];
  }

  addWeapons(w) {
    this.weapons.push(w);
  }

  fire() {
    console.log("firing all weapons");
    this.weapons.forEach((element) => element.fire());
  }
}

const w0 = new Weapon("laser");
const r0 = new Robot("basic robot");
const r1 = new CombatRobot("combat robot");

r0.move();
w0.fire();

r1.addWeapons(w0);
r1.move();
r1.fire();

Robot.prototype.fly = function () {
  console.log(`${this.name} is flying`);
};

r1.fly();

//~~~~~~~~~~ EX.3~~~~~~~~~~
console.log("Exercitiul 3:");

function fibGen() {
  const cache = [1, 1];
  const fib = (index) => {
    if (index < cache.length) {
      console.log("found " + index);
      return cache[index];
    } else {
      console.log("calculated " + index);
      cache[index] = fib(index - 1) + fib(index - 2);
      return cache[index];
    }
  };
  return fib;
}

const fib = fibGen();
console.log(fib(1));
console.log(fib(5));
console.log(fib(3));

//~~~~~~~~~~ EX.4 ~~~~~~~~~~
console.log("Exercitiu 4:");

String.prototype.capitalizedWords = function () {
  return this.replace(/\b[a-z]/g, (match) => match.toUpperCase());
};

console.log("these words will be capitalized".capitalizedWords());

//~~~~~~~~~~ EX.5 ~~~~~~~~~~
console.log("Exercitiu 5:");

const orderCoffee = (type) => {
  const types = {
    REGULAR: "REGULAR",
    SPECIAL: "SPECIAL",
  };

  if (Object.values(types).indexOf(type) === -1) {
    throw new Error("coffee error");
  } else {
    console.log(`preparing ${type} coffee`);
  }
};

try {
  orderCoffee("REGULAR");
  orderCoffee("SWEET_COFFEE_NO_SUGAR");
} catch (err) {
  console.log(err);
}

//~~~~~~~~~~ EX.6 ~~~~~~~~~~
console.log("Exercitiu 6:");

Number.prototype.times = function (actiune) {
  for (let i = 0; i < this; i++) {
    actiune(i);
  }
};

console.log("Rezultate test pentru metoda 'times':");
(3).times(() => console.log("Salut, Terry!"));
(5).times(() => console.log("Funcția a fost executată!"));

//~~~~~~~~~~ EX.7 ~~~~~~~~~~
console.log("Exercitiu 7:");

function generareExponentiala() {
  const memorie = {};

  const calculeaza = (baza, putere) => {
    const formula = `${baza}^${putere}`;

    if (memorie[formula] !== undefined) {
      console.log(`găsit ${formula} = ${memorie[formula]}`);
      return memorie[formula];
    }

    if (putere === 0) {
      memorie[formula] = 1;
      return 1;
    }

    if (putere === 1) {
      memorie[formula] = baza;
      return baza;
    }

    console.log(`calculat ${formula}`);
    const rezultat = baza * calculeaza(baza, putere - 1);
    memorie[formula] = rezultat;
    return rezultat;
  };

  return calculeaza;
}

const ridicareLaPutere = generareExponentiala();

console.log("Rezultate:");
console.log(`2^3 = ${ridicareLaPutere(2, 3)}`);
console.log(`2^5 = ${ridicareLaPutere(2, 5)}`);
console.log(`3^4 = ${ridicareLaPutere(3, 4)}`);
console.log(`2^3 (din nou) = ${ridicareLaPutere(2, 3)}`);

//~~~~~~~~~~ EX.8 ~~~~~~~~~~
console.log("Exercitiu 8:");

async function getObjectFromUrl(url) {
  const response = await fetch(url);
  const text = await response.text();
  return JSON.parse(text);
}

async function getCountryBounds(country) {
  const object = await getObjectFromUrl(
    `https://nominatim.openstreetmap.org/search?country=${country}&format=json`
  );
  return {
    minLatitude: object[0].boundingbox[0],
    maxLatitude: object[0].boundingbox[1],
    minLongitude: object[0].boundingbox[2],
    maxLongitude: object[0].boundingbox[3],
  };
}

getCountryBounds("Romania").then((bounds) => console.log("Romania: ", bounds));
getCountryBounds("France").then((bounds) => console.log("France: ", bounds));

//~~~~~~~~~~ EX.9 ~~~~~~~~~~
console.log("Exercitiu 9:");

function getObjectFromUrlPromisiune(url) {
  return new Promise((resolve) => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => resolve(JSON.parse(text)));
  });
}

function getCountryBoundsPromisiune(country) {
  return new Promise((resolve) => {
    getObjectFromUrlPromisiune(
      `https://nominatim.openstreetmap.org/search?country=${country}&format=json`
    ).then((object) =>
      resolve({
        minLatitude: object[0].boundingbox[0],
        maxLatitude: object[0].boundingbox[1],
        minLongitude: object[0].boundingbox[2],
        maxLongitude: object[0].boundingbox[3],
      })
    );
  });
}

getCountryBoundsPromisiune("Romania").then((bounds) =>
  console.log("Romania: ", bounds)
);
getCountryBoundsPromisiune("USA").then((bounds) =>
  console.log("USA: ", bounds)
);
getCountryBoundsPromisiune("Germany").then((bounds) =>
  console.log("Germany: ", bounds)
);
