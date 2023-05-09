type typeA = string;
type typeB = number;
type typeC = boolean;

type typeD = typeA extends number
  ? number
  : typeB extends number
  ? number
  : null;
