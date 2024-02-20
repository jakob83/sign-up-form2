const ageInp = document.querySelector("#age");
const outputAge = document.querySelector(".output-age");
outputAge.textContent = ageInp.value;
ageInp.addEventListener("input", () => {
    outputAge.textContent = ageInp.value;
})



const formErrors = (function () {
    function nameError() {
        const nameInp = document.getElementById("fullName").value;
        if (nameInp == "" || nameInp == null) {
            return "Pleas enter your full name";
        }
        else if (/\d/.test(nameInp)) {
            return "The name cannot contain numbers"
        }
        return "";
    }
    function emailError() {
        const emailInp = document.getElementById("email").value;
        if (emailInp == "" || emailInp == null) {
            return "Please enter an email"

        }
        else if (!emailInp.includes("@")) {
            return "Please enter a valid email, containing \"@\""
        }
        return ""

    }
    function passwordError() {
        const password1Inp = document.getElementById("password").value;
        const password2Inp = document.getElementById("password2").value;
        if (password1Inp.length < 8 || password1Inp.length > 25) {
            return "Password must be 8-25 characters"
        }
        else if (password1Inp != password2Inp) {
            return "Passwords don't match"
        }
        return "";

    }
    return {
        errors: [nameError, emailError, passwordError],
    }
})();

const formUI = (function () {
    const form = document.getElementById("form");
    form.noValidate = true;
    const outputName = document.getElementById("outputFullName");
    const outputEmail = document.getElementById("outputEmail");
    const outputPassword = document.getElementById("outputPassword");
    const inputs = document.querySelectorAll(".inp");
    function applyErrorMsg(e) {
        outputName.textContent = formErrors.errors[0]();
        outputEmail.textContent = formErrors.errors[1]();
        outputPassword.textContent = formErrors.errors[2]();
        outputPassword.textContent = formErrors.errors[2]();
    }
    inputs.forEach(input => {
        input.addEventListener("focusout", function (e) {
            const elementID = e.target.getAttribute("id");
            if (elementID == "fullName") outputName.textContent = formErrors.errors[0]();
            else if (elementID == "email") outputEmail.textContent = formErrors.errors[1]();
            else if (elementID == "password") outputPassword.textContent = formErrors.errors[2]();
            else if (elementID == "password2") outputPassword.textContent = formErrors.errors[2]();
        })
    });
    form.addEventListener("submit", function (e) {
        formErrors.errors.forEach((error) => {
            if (error()) e.preventDefault();
            applyErrorMsg();
        })
    })
})();