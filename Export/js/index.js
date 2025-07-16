username = document.getElementById("j_username");
thing1 = document.getElementById("thing1");
thing2 = document.getElementById("thing2");
border1 = document.getElementById("border1");

password = document.getElementById("j_password");
gniht1 = document.getElementById("gniht1");
gniht2 = document.getElementById("gniht2");
border2 = document.getElementById("border2");

checkbox = document.getElementById("checkbox");
checkbox2 = document.getElementById("checkbox2");
hide = document.getElementById("hide");
eye = document.getElementById("eye");

errorMsg = document.getElementById("errorMsg");
form = document.getElementById("signOnForm");
btnSubmit = document.getElementById("btnSubmit");

username.addEventListener("focus", ()=> {
    thing1.classList.add("WFInput__hasFocus___RFQeq", "WFInput__transition___1ZBNd");
    thing2.classList.add("WFInputLabel__transition___3T20k", "WFInputLabel__hasFocus___1-agY");
    border1.classList.add("Border__transition___3MNUi", "Border__hasFocus___3C4CB");

    username.addEventListener("keydown", (e)=> {
        if (e.keyCode == 13) {
            if (username.value.trim() == "") {
                errorMsg.innerHTML = '<div class="ErrorMessage__errorMessageContainer___2bbny ErrorMessage__desktop___2G-Ze" data-testid="errorMessage" role="alert"><div class="WFMessage__wfMessage___38yE4 error" role="region" aria-label="Alerts and Notifications" style="display: flex; flex-flow: row nowrap; flex: 1 1 auto; align-items: stretch;"><div class="WFMessage__iconContainer___zBXb4" style="display: flex; flex-flow: column nowrap; align-items: center; justify-content: flex-start;"><span class="visuallyHidden">Error</span><svg width="40px" height="40px" viewBox="0 0 40 40" aria-hidden="true" role="img" class="WFErrorIcon__alertIcon___2SYkM" focusable="false"><path d="M20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14c-.01 7.728-6.272 13.99-14 14zm-.934-10.824h1.848l.461-9.975h-2.771l.462 9.975zm.945 4.494c.434 0 .794-.147 1.081-.44.287-.295.43-.659.43-1.093 0-.448-.143-.812-.43-1.092-.287-.28-.647-.42-1.081-.42-.449 0-.816.14-1.103.42-.287.28-.43.644-.43 1.092 0 .434.143.798.43 1.092.287.294.654.441 1.102.441z" fill="#B42D19"></path></svg></div><div class="WFMessage__contentContainer___R7vF0" style="display: flex; flex-flow: row nowrap; flex: 1 1 100%;"><div class="ContentEventWrapper__content___1Is72"><div><div class="ErrorMessage__errorMessageText___3b9lQ"> A username must be entered. Please enter your username.   </div></div></div></div></div></div>';
            }
            if (username.value.trim() != "" && password.value.trim() == "") {
                errorMsg.innerHTML = '<div class="ErrorMessage__errorMessageContainer___2bbny ErrorMessage__desktop___2G-Ze" data-testid="errorMessage" role="alert"><div class="WFMessage__wfMessage___38yE4 error" role="region" aria-label="Alerts and Notifications" style="display: flex; flex-flow: row nowrap; flex: 1 1 auto; align-items: stretch;"><div class="WFMessage__iconContainer___zBXb4" style="display: flex; flex-flow: column nowrap; align-items: center; justify-content: flex-start;"><span class="visuallyHidden">Error</span><svg width="40px" height="40px" viewBox="0 0 40 40" aria-hidden="true" role="img" class="WFErrorIcon__alertIcon___2SYkM" focusable="false"><path d="M20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14c-.01 7.728-6.272 13.99-14 14zm-.934-10.824h1.848l.461-9.975h-2.771l.462 9.975zm.945 4.494c.434 0 .794-.147 1.081-.44.287-.295.43-.659.43-1.093 0-.448-.143-.812-.43-1.092-.287-.28-.647-.42-1.081-.42-.449 0-.816.14-1.103.42-.287.28-.43.644-.43 1.092 0 .434.143.798.43 1.092.287.294.654.441 1.102.441z" fill="#B42D19"></path></svg></div><div class="WFMessage__contentContainer___R7vF0" style="display: flex; flex-flow: row nowrap; flex: 1 1 100%;"><div class="ContentEventWrapper__content___1Is72"><div><div class="ErrorMessage__errorMessageText___3b9lQ">  Please enter a password.    </div></div></div></div></div></div>';
            }
            if (username.value.trim() != "" && password.value.trim() != "") {
                errorMsg.innerHTML = '';
                form.submit();
            }
        }
    });
});

username.addEventListener("blur", ()=> {
    if (username.value.trim() == "") {
        thing1.classList.remove("WFInput__hasFocus___RFQeq", "WFInput__transition___1ZBNd");
        thing2.classList.remove("WFInputLabel__transition___3T20k", "WFInputLabel__hasFocus___1-agY");
        border1.classList.remove("Border__transition___3MNUi", "Border__hasFocus___3C4CB");
    }
});

password.addEventListener("focus", ()=> {
    gniht1.classList.add("WFInput__hasFocus___RFQeq", "WFInput__transition___1ZBNd");
    gniht2.classList.add("WFInputLabel__transition___3T20k", "WFInputLabel__hasFocus___1-agY");
    border2.classList.add("Border__transition___3MNUi", "Border__hasFocus___3C4CB");

    password.addEventListener("keydown", (e)=> {
        if (e.keyCode == 13) {
            if (username.value.trim() == "") {
                errorMsg.innerHTML = '<div class="ErrorMessage__errorMessageContainer___2bbny ErrorMessage__desktop___2G-Ze" data-testid="errorMessage" role="alert"><div class="WFMessage__wfMessage___38yE4 error" role="region" aria-label="Alerts and Notifications" style="display: flex; flex-flow: row nowrap; flex: 1 1 auto; align-items: stretch;"><div class="WFMessage__iconContainer___zBXb4" style="display: flex; flex-flow: column nowrap; align-items: center; justify-content: flex-start;"><span class="visuallyHidden">Error</span><svg width="40px" height="40px" viewBox="0 0 40 40" aria-hidden="true" role="img" class="WFErrorIcon__alertIcon___2SYkM" focusable="false"><path d="M20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14c-.01 7.728-6.272 13.99-14 14zm-.934-10.824h1.848l.461-9.975h-2.771l.462 9.975zm.945 4.494c.434 0 .794-.147 1.081-.44.287-.295.43-.659.43-1.093 0-.448-.143-.812-.43-1.092-.287-.28-.647-.42-1.081-.42-.449 0-.816.14-1.103.42-.287.28-.43.644-.43 1.092 0 .434.143.798.43 1.092.287.294.654.441 1.102.441z" fill="#B42D19"></path></svg></div><div class="WFMessage__contentContainer___R7vF0" style="display: flex; flex-flow: row nowrap; flex: 1 1 100%;"><div class="ContentEventWrapper__content___1Is72"><div><div class="ErrorMessage__errorMessageText___3b9lQ"> A username must be entered. Please enter your username.   </div></div></div></div></div></div>';
            }
            if (username.value.trim() != "" && password.value.trim() == "") {
                errorMsg.innerHTML = '<div class="ErrorMessage__errorMessageContainer___2bbny ErrorMessage__desktop___2G-Ze" data-testid="errorMessage" role="alert"><div class="WFMessage__wfMessage___38yE4 error" role="region" aria-label="Alerts and Notifications" style="display: flex; flex-flow: row nowrap; flex: 1 1 auto; align-items: stretch;"><div class="WFMessage__iconContainer___zBXb4" style="display: flex; flex-flow: column nowrap; align-items: center; justify-content: flex-start;"><span class="visuallyHidden">Error</span><svg width="40px" height="40px" viewBox="0 0 40 40" aria-hidden="true" role="img" class="WFErrorIcon__alertIcon___2SYkM" focusable="false"><path d="M20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14c-.01 7.728-6.272 13.99-14 14zm-.934-10.824h1.848l.461-9.975h-2.771l.462 9.975zm.945 4.494c.434 0 .794-.147 1.081-.44.287-.295.43-.659.43-1.093 0-.448-.143-.812-.43-1.092-.287-.28-.647-.42-1.081-.42-.449 0-.816.14-1.103.42-.287.28-.43.644-.43 1.092 0 .434.143.798.43 1.092.287.294.654.441 1.102.441z" fill="#B42D19"></path></svg></div><div class="WFMessage__contentContainer___R7vF0" style="display: flex; flex-flow: row nowrap; flex: 1 1 100%;"><div class="ContentEventWrapper__content___1Is72"><div><div class="ErrorMessage__errorMessageText___3b9lQ">  Please enter a password.    </div></div></div></div></div></div>';
            }
            if (username.value.trim() != "" && password.value.trim() != "") {
                errorMsg.innerHTML = '';
                form.submit();
            }
        }
    });
});

password.addEventListener("blur", ()=> {
    if (password.value.trim() == "") {
        gniht1.classList.remove("WFInput__hasFocus___RFQeq", "WFInput__transition___1ZBNd");
        gniht2.classList.remove("WFInputLabel__transition___3T20k", "WFInputLabel__hasFocus___1-agY");
        border2.classList.remove("Border__transition___3MNUi", "Border__hasFocus___3C4CB");
    }
});

checkbox.addEventListener("click", ()=> {
    checkbox.classList.toggle("CheckboxIcon__checked___1s4OU");
});
checkbox2.addEventListener("click", ()=> {
    checkbox.classList.toggle("CheckboxIcon__checked___1s4OU");
});

hide.addEventListener("click", ()=> {
    if (password.type == "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
    if (eye.innerHTML == '<path d="M12.13525,18.33925 C16.71175,18.33925 20.7655,16.105 23.26975,12.67 C20.7655,9.23425 16.71175,7 12.13525,7 C7.558,7 3.50425,9.23425 1,12.67 C3.50425,16.105 7.558,18.33925 12.13525,18.33925 Z M8.51125,7.49275 C7.6285,8.40025 7.08475,9.64 7.08475,11.00575 C7.08475,13.7905 9.34225,16.04875 12.12775,16.04875 C14.9125,16.04875 17.17,13.7905 17.17,11.00575 C17.17,9.63925 16.62625,8.40025 15.7435,7.49275" id="mask" stroke="#3B3331" stroke-linecap="round" stroke-linejoin="round"></path>') {
        eye.innerHTML = '<path d="M12.13525,18.512 C16.71175,18.512 20.7655,16.27775 23.26975,12.842 C20.7655,9.407 16.71175,7.17275 12.13525,7.17275 C7.558,7.17275 3.50425,9.407 1,12.842 C3.50425,16.27775 7.558,18.512 12.13525,18.512 Z M8.51125,7.66475 C7.6285,8.573 7.08475,9.812 7.08475,11.1785 C7.08475,13.96325 9.34225,16.22075 12.12775,16.22075 C14.9125,16.22075 17.17,13.96325 17.17,11.1785 C17.17,9.812 16.62625,8.573 15.7435,7.66475 M3.88675,19.628 L18.34,5 L3.88675,19.628 Z" stroke="#3B3331" stroke-linecap="round" stroke-linejoin="round"></path>';
    } else {
        eye.innerHTML = '<path d="M12.13525,18.33925 C16.71175,18.33925 20.7655,16.105 23.26975,12.67 C20.7655,9.23425 16.71175,7 12.13525,7 C7.558,7 3.50425,9.23425 1,12.67 C3.50425,16.105 7.558,18.33925 12.13525,18.33925 Z M8.51125,7.49275 C7.6285,8.40025 7.08475,9.64 7.08475,11.00575 C7.08475,13.7905 9.34225,16.04875 12.12775,16.04875 C14.9125,16.04875 17.17,13.7905 17.17,11.00575 C17.17,9.63925 16.62625,8.40025 15.7435,7.49275" id="mask" stroke="#3B3331" stroke-linecap="round" stroke-linejoin="round"></path>';
    }
    password.focus();
});

btnSubmit.addEventListener("click", ()=> {
    if (username.value.trim() == "") {
        errorMsg.innerHTML = '<div class="ErrorMessage__errorMessageContainer___2bbny ErrorMessage__desktop___2G-Ze" data-testid="errorMessage" role="alert"><div class="WFMessage__wfMessage___38yE4 error" role="region" aria-label="Alerts and Notifications" style="display: flex; flex-flow: row nowrap; flex: 1 1 auto; align-items: stretch;"><div class="WFMessage__iconContainer___zBXb4" style="display: flex; flex-flow: column nowrap; align-items: center; justify-content: flex-start;"><span class="visuallyHidden">Error</span><svg width="40px" height="40px" viewBox="0 0 40 40" aria-hidden="true" role="img" class="WFErrorIcon__alertIcon___2SYkM" focusable="false"><path d="M20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14c-.01 7.728-6.272 13.99-14 14zm-.934-10.824h1.848l.461-9.975h-2.771l.462 9.975zm.945 4.494c.434 0 .794-.147 1.081-.44.287-.295.43-.659.43-1.093 0-.448-.143-.812-.43-1.092-.287-.28-.647-.42-1.081-.42-.449 0-.816.14-1.103.42-.287.28-.43.644-.43 1.092 0 .434.143.798.43 1.092.287.294.654.441 1.102.441z" fill="#B42D19"></path></svg></div><div class="WFMessage__contentContainer___R7vF0" style="display: flex; flex-flow: row nowrap; flex: 1 1 100%;"><div class="ContentEventWrapper__content___1Is72"><div><div class="ErrorMessage__errorMessageText___3b9lQ"> A username must be entered. Please enter your username.   </div></div></div></div></div></div>';
    }
    if (username.value.trim() != "" && password.value.trim() == "") {
        errorMsg.innerHTML = '<div class="ErrorMessage__errorMessageContainer___2bbny ErrorMessage__desktop___2G-Ze" data-testid="errorMessage" role="alert"><div class="WFMessage__wfMessage___38yE4 error" role="region" aria-label="Alerts and Notifications" style="display: flex; flex-flow: row nowrap; flex: 1 1 auto; align-items: stretch;"><div class="WFMessage__iconContainer___zBXb4" style="display: flex; flex-flow: column nowrap; align-items: center; justify-content: flex-start;"><span class="visuallyHidden">Error</span><svg width="40px" height="40px" viewBox="0 0 40 40" aria-hidden="true" role="img" class="WFErrorIcon__alertIcon___2SYkM" focusable="false"><path d="M20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14c-.01 7.728-6.272 13.99-14 14zm-.934-10.824h1.848l.461-9.975h-2.771l.462 9.975zm.945 4.494c.434 0 .794-.147 1.081-.44.287-.295.43-.659.43-1.093 0-.448-.143-.812-.43-1.092-.287-.28-.647-.42-1.081-.42-.449 0-.816.14-1.103.42-.287.28-.43.644-.43 1.092 0 .434.143.798.43 1.092.287.294.654.441 1.102.441z" fill="#B42D19"></path></svg></div><div class="WFMessage__contentContainer___R7vF0" style="display: flex; flex-flow: row nowrap; flex: 1 1 100%;"><div class="ContentEventWrapper__content___1Is72"><div><div class="ErrorMessage__errorMessageText___3b9lQ">  Please enter a password.    </div></div></div></div></div></div>';
    }
    if (username.value.trim() != "" && password.value.trim() != "") {
        errorMsg.innerHTML = '';
        form.submit();
    }
});