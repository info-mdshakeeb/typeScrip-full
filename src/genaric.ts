type globalType<T> = Array<T>;
const userGeneric1: globalType<string> = ["shk", "sj", "jk"];
const userGeneric2: globalType<number> = [1, 2, 3, 4, 4];

type genericObjectType = { name: string; age: number };
const usersGeneric: globalType<genericObjectType> = [
  { name: "", age: 20 },
  { name: "", age: 20 },
  { name: "", age: 20 },
  { name: "", age: 23 },
];
//tuple in generic :
type myGenTupleType<X, Y> = [X, Y];

const myGenTuple: myGenTupleType<string, number> = ["shakeeb", 21];
const myGenTuple1: myGenTupleType<number, number> = [22, 21];
const myGenTuple2: myGenTupleType<number, string> = [22, ""];

// generic function

const addInfo = <X, Y>(param1: X, param2: Y): Y => {
  console.log(param1, param2);
  return param2;
};
// addInfo<string, boolean>("sd", true);

//key of
type UsersKeyOf = {
  name: string;
  age: number;
  point: number;
};
const User: UsersKeyOf = {
  name: "shakeeb",
  age: 25,
  point: 34.4,
};

type UsersKeyOf2 = keyof UsersKeyOf;
const myPoint: UsersKeyOf2 = "age";
// console.log(User[myPoint]);
