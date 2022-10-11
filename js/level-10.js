const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', anonymousVision)

function anonymousVision (event) {
    if (event.currentTarget.value.length > 0) { 
        outputEl.textContent = event.currentTarget.value;
    } else {
        outputEl.textContent = "Anonymous";
    }
    return outputEl.textContent
}
