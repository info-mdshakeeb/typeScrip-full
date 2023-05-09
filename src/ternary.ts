// normal function Check
const isAvailableTernary: boolean = false;

const checkType = (isAvailableTernary: boolean): void => {
  if (isAvailableTernary) {
    console.log("coming");
  } else {
    console.log("try late");
  }
};
// checkType(isAvailableTernary);

// user ternary operator :
const checkTypeWithTernary = isAvailableTernary ? "coming" : "lost";
// console.log(checkTypeWithTernary);

// nullish type (??): basically it give all the value without null and undefine

const checkNullishType = 4;
const checkNullishTypeF = checkNullishType ?? "undefine / null";
// console.log(checkNullishTypeF);
