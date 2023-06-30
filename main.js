

/* input-fields */
const billInputField = document.getElementById("bill-input-field")
const numberOfPeopleInputField = document.getElementById("number-of-ppl-input-field")
const billInputFieldBorder = document.querySelector(".bill")
const numberOfPeopleInputFieldBorder = document.querySelector(".number-of-people")

/* buttons */
const fivePercent = document.getElementById("five-percent")
const tenPercent = document.getElementById("ten-percent")
const fifteenPercent = document.getElementById("fifteen-percent")
const twentyfivePercent = document.getElementById("twenty-five-percent")
const fiftyPercent = document.getElementById("fifty-percent")
const custom = document.getElementById("custom")
const reset = document.getElementById("reset")

/* displays */
const tipAmountPerPerson = document.getElementById("tip-amount")
const totalPerPerson = document.getElementById("total")
const displayTipAmount = document.getElementById("display-tip-amount")
const displayTotal = document.getElementById("display-total")

const errorMessage = document.querySelector(".error-message")

function calculateTip(tipPercentage) {
    let billPerPerson
    let tipAmountPerPerson
    let totalPerPerson

    
    let billValue = Number(billInputField.value)
    let numberOfPeopleValue = Number(numberOfPeopleInputField.value)

    if(Boolean(numberOfPeopleValue) === false ) {
        numberOfPeopleValue = 1
        numberOfPeopleInputField.value = 1
    }

    billPerPerson = billValue / numberOfPeopleValue

    tipAmountPerPerson = (billPerPerson / 100) * tipPercentage

    if(tipPercentage === "custom") {
        tipPercentage = Number(custom.value)
    }

    totalPerPerson = billPerPerson + tipAmountPerPerson

    tipAmountPerPerson = tipAmountPerPerson.toFixed(2)
    totalPerPerson = totalPerPerson.toFixed(2)

    displayTipAmount.textContent = `$${tipAmountPerPerson}`
    displayTotal.textContent = `$${totalPerPerson}`

    reset.style.backgroundColor = `hsl(172, 67%, 45%)`
}

fivePercent.addEventListener("click", function () {
    calculateTip(5)
    resetTipButtons()
    selectTipBtnActive(fivePercent)
})

tenPercent.addEventListener("click", function () {
    calculateTip(10)
    resetTipButtons()
    selectTipBtnActive(tenPercent)
})

fifteenPercent.addEventListener("click", function () {
    calculateTip(15)
    resetTipButtons()
    selectTipBtnActive(fifteenPercent)
})

twentyfivePercent.addEventListener("click", function () {
    calculateTip(25)
    resetTipButtons()
    selectTipBtnActive(twentyfivePercent)
})

fiftyPercent.addEventListener("click", function () {
    calculateTip(50)
    resetTipButtons()
    selectTipBtnActive(fiftyPercent)
})

custom.addEventListener("input", function () {
    const customTipPercentage = Number(custom.value);
    
    custom.style.color = `hsl(183, 100%, 15%)`
    calculateTip(customTipPercentage);
    resetTipButtons();
  });

reset.addEventListener("click", function () {
    billInputField.value = ""
    numberOfPeopleInputField.value = ""
    displayTipAmount.textContent = `$0.00`
    displayTotal.textContent = `$0.00`
    reset.style.backgroundColor = `hsl(183, 98%, 20%)`
    custom.value = ""
    resetTipButtons()
})

function selectTipBtnActive(tipPercentage) {
    tipPercentage.style.backgroundColor = `hsl(172, 67%, 45%)`
    tipPercentage.style.color = `hsl(183, 100%, 15%)`
}

function selectTipBtnInactive(tipPercentage) {
    tipPercentage.style.backgroundColor = `hsl(183, 100%, 15%)`
    tipPercentage.style.color = `#fff`
}

function resetTipButtons() {
    const tipButtons = [fivePercent, tenPercent, fifteenPercent, twentyfivePercent, fiftyPercent];

    tipButtons.forEach(button => selectTipBtnInactive(button));
}