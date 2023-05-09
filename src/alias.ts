// alias type function

type FunctionType = number;
const addAliasData = (x: FunctionType, y: FunctionType): FunctionType => x + y;

// alias type object
type aliasTypeObject = {
  name: string;
  age: number;
};

const aliasUser: aliasTypeObject = {
  name: "shakeeb",
  age: 24,
};
