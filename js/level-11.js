const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});

inputEl.addEventListener("blur", () => {
  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
});

<input id="input" value="Привет"></input>;
input.value = "Пока";
