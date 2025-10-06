const nrLitere = (text) => {
  text = text.toLowerCase();
  const counts = {};
  let total = 0;
  for (let ch of text) {
    if (ch === ' ') continue;
    total++;
    counts[ch] = (counts[ch] || 0) + 1;
  }
  const result = {};
  for (let ch in counts) {
    result[ch] = counts[ch] / total;
  }
  return result;
};
console.log(nrLitere("JavaScript is a powerful programming language used for web development"));