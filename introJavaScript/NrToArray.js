function nr(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i]);
  }
  return result;
}

console.log(nr([1, 2, 3, 4, 5]));