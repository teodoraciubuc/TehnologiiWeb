const DISCOUNT = 0.15; // 15% reducere

function pretRedus(pretInitial) {
  return pretInitial - pretInitial * DISCOUNT;
}

export { DISCOUNT, pretRedus };
