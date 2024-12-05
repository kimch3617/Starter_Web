function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });

  const a = { first: "Alice", last: "Alisson", a: "" }
  printName(a);