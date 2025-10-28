Number.prototype.times = function (actiune) {
  for (let i = 0; i < this; i++) {
    actiune(i);
  }
};
console.log("Rezultate test pentru metoda 'times':");

(3).times(() => console.log("Buna Buna!"));
(5).times(() => console.log("A mers!"));
