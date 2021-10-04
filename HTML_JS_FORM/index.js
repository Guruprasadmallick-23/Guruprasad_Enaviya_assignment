const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex =RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Name is incorrect";
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex =RegExp("^([a-zA-Z0-9][+._-][a-zA-Z0-9]+@[a-zA-Z]+.{3}[a-zA-z.]*[a-zA-z]{2})+$");
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else emailError.textContent = "Email is incorrect";
});

const ph = document.querySelector('#ph');
const phError = document.querySelector('.ph-error');
ph.addEventListener('input', function () {
    let phRegex = RegExp("^[1-9]{2}\\s[0-9]{10}$");
    if (phRegex.test(ph.value))
        phError.textContent = "";
    else phError.textContent = "Phone number is Incorrect";
});

const address = document.querySelector('#add');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let addRegex =RegExp('^[A-Z][,.][a-z]{2,}$');
    if (addRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "Address is incorrect";
});