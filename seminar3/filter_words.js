const birthYears = [2005, 1998, 2012, 1987, 2000, 2010, 1990];
const currentYear = new Date().getFullYear();

const ages = birthYears.map(year => currentYear - year);
const adults = ages.filter(age => age >= 18);

console.log("Ani:", birthYears);
console.log("Vârsta:", ages);
console.log("Vârste>18 ani:", adults);