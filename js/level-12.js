const textEl = document.querySelector("#text");
const inputEl = document.querySelector("#font-size-control");

console.log(inputEl.value)

inputEl.addEventListener("change", userChangeRange);

function userChangeRange() { 
    textEl.style.fontSize= `${inputEl.value}px`;
    return textEl;
}