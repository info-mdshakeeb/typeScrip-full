//spread operators :

const friends: string[] = ["sa", "as", "df", "fg"];
const friendsNew: string[] = ["a", "s", "d", "f"];

friends.push(...friendsNew);
// console.log(friends);

//rest operators :

const scores = (...runs: number[]) => {
  const numbers = runs;
  let sum: number = 0;
  //   const totalNumber = numbers.reduce(
  //     (initial: number, current: number): number => initial + current,
  //     0
  //   );
  const totalNumber = numbers.map((e) => (sum += e));
  return sum;
};

console.log(scores(2, 4, 4, 45));
