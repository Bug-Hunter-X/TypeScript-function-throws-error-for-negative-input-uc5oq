function printNumbers(n: number): void {
  if (n < 1) {
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // prints 1 to 5
printNumbers(-5); // does nothing