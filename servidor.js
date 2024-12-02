

const formulario = document.getElementById('form');

form.addEventListener('submit', function(e) {
    // Crea une evento
    e.preventDefault();
    // se genera un objeto:
    const formData = new FormData(formulario);
    // crea formData:
    const payload = new URLSearchParams(formData);
    // ingresamos el post para que ejecute el evento target:
    fetch('https://httpbin.org/post', {
    method: 'POST',
    body: payload,
    })
    let usuario= document.getElementById('username').value
    console.log(usuario)
    let email = document.getElementById('email').value
    console.log(email)
    let password = document.getElementById('password').value
    console.log(password)
    let password2 = document.getElementById('password2').value
    console.log(password2)
})