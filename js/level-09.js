const counter = {
    counterValue: 0,
    decrement() {
        this.counterValue -=1;
    },
    increment() {
        this.counterValue +=1;
    }
}
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementButton.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
})

incrementButton.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.counterValue;
})
