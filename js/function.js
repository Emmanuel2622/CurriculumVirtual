addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const section1 = document.querySelector('#section1')
            section1.classList.toggle('show')
        })
    }
});

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}
function showVentana(){
    const ventana = document.querySelector('#ventana')
    ventana.classList.toggle('show2')
};

document.getElementById('contact-button').addEventListener('click', function(){
    disableScroll()
    showVentana();
});

document.getElementById('close').addEventListener('click', function() {
    enableScroll()
    showVentana();
});

var nombre_apellido;
var email;
var numero;

function datos(){
    nombre_apellido=document.getElementById('nombre').value;
    email=document.getElementById('email').value;
    numero=document.getElementById('numero').value;
    console.log("Nombre y Apellido: " + nombre_apellido);
    console.log("Email: " + email);
    console.log("Número: " + numero);
};

document.getElementById('submit').addEventListener('click', function() {
    datos();
    document.getElementById("text").innerHTML = 'Gracias ' + nombre_apellido + ' sus datos ya fueron enviados correctamente';
});
    
