type mappedType = {
  name: string;
  age: number;
  address: string;
};
type mappedTypeReadOnly = {
  readonly [mapped in keyof mappedType]: mappedType[mapped];
};

const mappedObj: mappedTypeReadOnly = {
  name: "sh",
  age: 24,
  address: "dds",
};
// mappedObj.address = "jh";
// console.log(mappedObj["name"]);
