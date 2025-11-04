import { DISCOUNT, pretRedus } from "./modul.js";

console.log(`Reducerea actuală este de ${(DISCOUNT * 100).toFixed(0)}%`);

const produse = [
  { nume: "Tricou", pret: 100 },
  { nume: "Blugi", pret: 200 },
  { nume: "Geacă", pret: 350 },
];

produse.forEach((p) => {
  console.log(
    `${p.nume}: preț vechi ${p.pret} lei → preț redus ${pretRedus(
      p.pret
    ).toFixed(2)} lei`
  );
});
