// interface use in objects

interface IUser {
  name: string;
  age: number;
}
interface IUser2 extends IUser {
  position: string;
  local?: boolean;
}
const interfaceUsers: IUser = {
  name: "shakeeb",
  age: 24,
};

const interfaceUsers2: IUser2 = {
  name: "shakeeb",
  age: 24,
  position: "deb",
};
