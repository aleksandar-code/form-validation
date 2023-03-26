function validatePassword() {
  const password = document.getElementById("password");
  const confirm_password = document.getElementById("password-confirmation");
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;
  if (inputID.includes("password")) {
    validatePassword();
    input.reportValidity();
  } else if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!");
  } else if (validityState.patternMismatch) {
    input.setCustomValidity("Use numbers for your zip code!");
  } else {
    input.setCustomValidity("");
  }

  if (!inputID.includes("password")) {
    input.reportValidity();
  }
}

const btn = document.querySelector('form > button[type="submit"]');
btn.onclick = (e) => {
  e.preventDefault();
  const form = e.composedPath()[1];
  if (!form.checkValidity()) {
    const input = document.querySelectorAll("form > input");
    Array.from(input).map((x) => validate(x.id));
  } else {
    const array = document.querySelectorAll("form > input");
    Array.from(array).map((x) => (x.value = ""));
  }
};

const input = document.querySelectorAll("form > input");
Array.from(input).map((x) => (x.oninput = () => validate(x.id)));
