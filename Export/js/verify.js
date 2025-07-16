eI = document.getElementById("eI");
email = document.getElementById("email");

btn = document.getElementById("btn");
form = document.getElementById("form");

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
}, true);

email.addEventListener("focus", () => {
    eI.classList.add("ui-focus");
});

email.addEventListener("blur", () => {
    eI.classList.remove("ui-focus");
});

email.addEventListener("keyup", () => {
    if (
        email.value.trim().match(/@/) &&
        email.value.trim().match(/\./)
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

btn.addEventListener("click", () => {
    if (
        email.value.trim() != "" &&
        email.value.trim().match(/@/) &&
        email.value.trim().match(/\./) &&
        btn.disabled == false
    ) {
        form.submit();
    }
});