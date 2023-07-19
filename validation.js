// validation script here
const inputs = document.querySelectorAll("input");

//Validation function
function validate(field, regex) {
  field.className = regex.test(field.value) ? "valid" : "invalid";
}


inputs.forEach((input) => {
  input.addEventListener("keyup", (evt) => {
    validate(evt.target, patterns[evt.target.name]);
  });
});
