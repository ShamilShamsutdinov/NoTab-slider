const form = document.querySelector(".touch__form");

function validation(form) {
  let result = true;

  form.querySelectorAll("input").forEach((input) => {
    if (input.value === "") {
      input.style.border = "2px solid #FF0000";
      result = false;
    }

    if (input.value) {
      input.style.border = "none";
    }
  });

  return result;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validation(form) === true) {
    console.log("форма отправлена успешно");
  }
});
