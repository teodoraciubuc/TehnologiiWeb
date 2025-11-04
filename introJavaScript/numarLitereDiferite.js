function dif(str1, str2) {
  if (str1.length !== str2.length) {
    return -1;
  } else {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }
    return count;
  }
}

console.log(dif("test", "tent"));
console.log(dif("abcd", "abcd"));
console.log(dif("aaa", "aaac"));
