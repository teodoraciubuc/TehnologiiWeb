function intercalate(...args) {
  let result = [];
  for (let i = 0; i < args[0].length; i++) {
    result.push(args[0][i]);
    result.push(args[1][i]);
  }
  return result;
}

console.log(intercalate([1, 2, 3], ["a", "b", "c"]));
