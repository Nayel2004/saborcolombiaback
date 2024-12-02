const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

// Aqui se va agregar un evento

form.addEventListener('submit', e=>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const usuarioValue = usuario.value.trim(); // Aqui trim() elimina cualquier caracter vacio que este al final o al principio del texto
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usuarioValue === ''){
        setErrorFor(usuario, "No puede dejar el espacio en blanco.");
    }else{
        setSuccessFor(usuario);
    }

    if(emailValue === ''){
        setErrorFor(email, 'No puede dejar el email en blanco.');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'No ingreso un email válido.');
    }else{
        setSuccessFor(email);
    }

    
    if(passwordValue === ''){
        setErrorFor(password, "No puede dejar la contraseña en blanco.");
    }else{
        setSuccessFor(password);
    }

    if(password2Value === ''){
        setErrorFor(password2, "No puede dejar la contraseña en blanco.");
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'El password que ingreso no coincide.');

    }else{
        setSuccessFor(password2);
    }
 

    
    

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;

}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    return emailRegex.test(email)
}


