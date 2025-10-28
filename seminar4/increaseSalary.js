function increaseSalary(salarii, procent) {
  if (!Array.isArray(salarii)) {
    throw new Error("Err:Primul parametru trebuie să fie un array!");
  }

  if (typeof procent !== "number") {
    throw new Error("Err:al doilea parametru trebuie să fie un număr!");
  }
  return salarii.map((sal) => sal + (sal * procent) / 100);
}

try {
  console.log("Salarii actualizate corect:");
  console.log(increaseSalary([1000, 2000, 3000], 10));

  console.log(increaseSalary("3000,4000,5000", "zece"));
} catch (err) {
  console.log("A apărut o eroare la creșterea salariilor:");
  console.log(err.message);
}
