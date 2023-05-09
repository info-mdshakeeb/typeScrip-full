//null :

const nullData = (param: string | null): void => {
  if (param === null) {
    console.log("give a number");
    return;
  } else {
    console.log(param);
  }
};
// nullData(null);
// nullData("iiu");

const unknown = (param: unknown) => console.log(param);
const text1 = unknown("hello");
