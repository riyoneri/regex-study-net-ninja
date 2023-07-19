// validation script here
const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

//Validation function
function validate(field, regex) {
  field.className = regex.test(field.value) ? "valid" : "invalid";
}


inputs.forEach((input) => {
  input.addEventListener("keyup", (evt) => {
    validate(evt.target, patterns[evt.target.name]);
  });
});
