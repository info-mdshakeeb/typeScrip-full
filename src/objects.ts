//simple object :
const randomObject = {
  name: "shakeeb",
  age: 24,
  address: "melandha",
};

//simple object with type :
const randomObject2: object = {
  name: "shakeeb",
  age: 24,
  address: "melandha",
};

// specific patten :

type randomObject3Type = {
  name: string;
  readonly age: number; // readonly is used for fixed the number
  address: string;
  isMarried?: false; // for the ? symbols
};
const randomObject3: randomObject3Type = {
  name: "shakeeb",
  age: 24,
  address: "melandha",
};
const randomObject4: randomObject3Type = {
  name: "shakeeb",
  age: 24,
  address: "melandha",
  isMarried: false,
};
