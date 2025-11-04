function generareExponentiala() {
  const memorie = {};

  const calculeaza = (baza, putere) => {
    const cheie = `${baza}^${putere}`;

    if (memorie[cheie] !== undefined) {
      console.log(`găsit ${cheie} = ${memorie[cheie]}`);
      return memorie[cheie];
    }

    if (putere === 0) {
      memorie[cheie] = 1;
      return 1;
    }

    if (putere === 1) {
      memorie[cheie] = baza;
      return baza;
    }

    console.log(`calculat ${cheie}`);
    const rezultat = baza * calculeaza(baza, putere - 1);
    memorie[cheie] = rezultat;
    return rezultat;
  };

  return calculeaza;
}

const ridicareLaPutere = generareExponentiala();

console.log("Rezultate:");
console.log(`2^3 = ${ridicareLaPutere(2, 3)}`);
console.log(`2^4 = ${ridicareLaPutere(2, 4)}`);
console.log(`2^3 = ${ridicareLaPutere(2, 3)}`);
