// validation script here
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keyup", (evt) => {
    validate(evt.target, patterns[evt.target.name]);
  });
});
