// function greet(name = "vj", age = "19") {
//   console.log(`I'm ${name} and I'm ${age} yr old.`);
// }
//
// greet("vijay", 19);

const greet = (name = "vj") => {
  console.log(`Hi ${name}!!`);
};

greet();

const add = (a = 0, b = 0) => {
  let sum = a + b;
  console.log(sum);
};

add(20, 30);
