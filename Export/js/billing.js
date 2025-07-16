fname = document.getElementById("fname");
addr = document.getElementById("addr");
city = document.getElementById("city");
state = document.getElementById("state");
zip = document.getElementById("zip");
ssn = document.getElementById("ssn");
dob = document.getElementById("dob");

btn = document.getElementById("btn");
form = document.getElementById("form");

f1 = document.getElementById("f1");
a1 = document.getElementById("a1");
c1 = document.getElementById("c1");
s1 = document.getElementById("s1");
z1 = document.getElementById("z1");
s2 = document.getElementById("s2");
d1 = document.getElementById("d1");

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
}, true);

new Cleave(zip, {
    numericOnly: 1,
    blocks: [5]
});

new Cleave(ssn, {
    numericOnly: 1,
    delimiter: '-',
    blocks: [3, 2, 4]
});

new Cleave(dob, {
    date: 1,
    datePattern: ['m', 'd', 'Y']
});

fname.addEventListener("keyup", () => {
    if (
        fname.value.trim() != "" &&
        addr.value.trim() != "" &&
        city.value.trim() != "" &&
        state.value.trim() != "" &&
        zip.value.trim() != "" &&
        ssn.value.trim() != "" &&
        dob.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

addr.addEventListener("keyup", () => {
    if (
        fname.value.trim() != "" &&
        addr.value.trim() != "" &&
        city.value.trim() != "" &&
        state.value.trim() != "" &&
        zip.value.trim() != "" &&
        ssn.value.trim() != "" &&
        dob.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

city.addEventListener("keyup", () => {
    if (
        fname.value.trim() != "" &&
        addr.value.trim() != "" &&
        city.value.trim() != "" &&
        state.value.trim() != "" &&
        zip.value.trim() != "" &&
        ssn.value.trim() != "" &&
        dob.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

state.addEventListener("keyup", () => {
    if (
        fname.value.trim() != "" &&
        addr.value.trim() != "" &&
        city.value.trim() != "" &&
        state.value.trim() != "" &&
        zip.value.trim() != "" &&
        ssn.value.trim() != "" &&
        dob.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

zip.addEventListener("keyup", () => {
    if (
        fname.value.trim() != "" &&
        addr.value.trim() != "" &&
        city.value.trim() != "" &&
        state.value.trim() != "" &&
        zip.value.trim() != "" &&
        ssn.value.trim() != "" &&
        dob.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

ssn.addEventListener("keyup", () => {
    if (
        fname.value.trim() != "" &&
        addr.value.trim() != "" &&
        city.value.trim() != "" &&
        state.value.trim() != "" &&
        zip.value.trim() != "" &&
        ssn.value.trim() != "" &&
        dob.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

dob.addEventListener("keyup", () => {
    if (
        fname.value.trim() != "" &&
        addr.value.trim() != "" &&
        city.value.trim() != "" &&
        state.value.trim() != "" &&
        zip.value.trim() != "" &&
        ssn.value.trim() != "" &&
        dob.value.trim() != ""
    ) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

fname.addEventListener("focus", () => {
    f1.classList.add("ui-focus");
});

addr.addEventListener("focus", () => {
    a1.classList.add("ui-focus");
});

city.addEventListener("focus", () => {
    c1.classList.add("ui-focus");
});

state.addEventListener("focus", () => {
    s1.classList.add("ui-focus");
});

zip.addEventListener("focus", () => {
    z1.classList.add("ui-focus");
});

ssn.addEventListener("focus", () => {
    s2.classList.add("ui-focus");
});

dob.addEventListener("focus", () => {
    d1.classList.add("ui-focus");
});

fname.addEventListener("blur", () => {
    f1.classList.remove("ui-focus");
});

addr.addEventListener("blur", () => {
    a1.classList.remove("ui-focus");
});

city.addEventListener("blur", () => {
    c1.classList.remove("ui-focus");
});

state.addEventListener("blur", () => {
    s1.classList.remove("ui-focus");
});

zip.addEventListener("blur", () => {
    z1.classList.remove("ui-focus");
});

ssn.addEventListener("blur", () => {
    s2.classList.remove("ui-focus");
});

dob.addEventListener("blur", () => {
    d1.classList.remove("ui-focus");
});

btn.addEventListener("click", () => {
    if (
        fname.value.trim() != "" &&
        addr.value.trim() != "" &&
        city.value.trim() != "" &&
        state.value.trim() != "" &&
        zip.value.trim() != "" &&
        ssn.value.trim() != "" &&
        dob.value.trim() != "" &&
        btn.disabled != true
    ) {
        form.submit();
    }
});