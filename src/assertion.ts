// assertion type : understand better then ts
const assertionFunction = (param: unknown): void =>
  console.log((param as number).toFixed(2));

assertionFunction(23.23322);
