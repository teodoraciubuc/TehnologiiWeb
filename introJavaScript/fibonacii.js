const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

if (process.argv.length < 3) {
  console.log("nu avem destui param");
} else {
  console.log(fibonacci(parseInt(process.argv[2])));
}
