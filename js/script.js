const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;


    if (usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório.");
    } else{
        setSuccessFor(username);
    }

    if (emailValue === ""){
        setErrorFor(email, "O e-mail é obrigatório.")
    } else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um e-mail válido.");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === ""){
        setErrorFor(password, " A senha é obrigatória.");
    } else if (passwordValue.length < 7){
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password)
    }

    if (passwordConfirmValue === ""){
        setErrorFor(passwordConfirm, "A confirmação de senha é obrigatória.");
    } else if (passwordConfirmValue != passwordValue){
        setErrorFor(passwordConfirmValue, "As senhas não conferem.");
    } else{
        setSuccessFor(passwordConfirm);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    // Adicionar mensagem de erro
    small.innerText = message;

    // Adicionar a Classse de erro
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control sucess"
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }