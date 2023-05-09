type UserA = {
  name: string;
  age: number;
};
type UserB = UserA & {
  position: string;
  type: string;
};
const usersInterface: UserB = {
  name: "shakeeb",
  age: 12,
  position: "developer",
  type: "sd",
};
const userUnion: UserA | UserB = {
  name: "shakeeb",
  age: 23,
  position: "de",
};
console.log(userUnion);
