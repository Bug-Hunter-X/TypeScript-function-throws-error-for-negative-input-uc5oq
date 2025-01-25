function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this works fine
printNumbers(-5); // this throws an error, but it should not. It should just not print anything.