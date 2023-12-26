let modal = document.getElementById("modal")
document.getElementById("show-modal").addEventListener("click", () => {
    modal.style.pointerEvents = "all";
    modal.style.opacity = 1;

})

document.getElementById("hide-modal").addEventListener("click", () => {
    modal.style.pointerEvents = "none";
    modal.style.opacity = 0;
})

let passwordInput = document.getElementById("password");
let emailInput = document.getElementById("email");

document.getElementById("password-showhide").addEventListener("click", () => {
    if (passwordInput.type == 'password') {
        passwordInput.type = "text"
    } else {
        passwordInput.type = 'password'
    }
})


const EMAIL_ERORR = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function isEmailValid(value) {
    return EMAIL_ERORR.test(value);
}

emailInput.addEventListener("change", () => {
console.log(emailInput.value);
if (!isEmailValid(emailInput.value)) {emailInput.classList.add("error")} else {emailInput.classList.remove("error")}
})