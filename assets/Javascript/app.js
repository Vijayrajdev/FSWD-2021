const a = document.querySelectorAll("input")[0];
const b = document.querySelectorAll("input")[1];
const add = document.getElementById("add");
const multiply = document.getElementById("multiply");
const subract = document.getElementById("subract");
const result = document.querySelector(".result");

// Calculate
const calculate = (operation) => {
  switch (operation) {
    case "add":
      result.innerHTML = parseInt(a.value) + parseInt(b.value);
      break;
    case "multiply":
      result.innerHTML = parseInt(a.value) * parseInt(b.value);
      break;
    case "subract":
      result.innerHTML = parseInt(a.value) - parseInt(b.value);
      break;
    default:
      result.innerHTML = "Not a valid operation";
  }
};

add.addEventListener("click", () => {
  return calculate("add");
});

multiply.addEventListener("click", () => {
  return calculate("multiply");
});

subract.addEventListener("click", () => {
  return calculate("subract");
});
