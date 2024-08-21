let contador = 1;

setInterval ( function(){
    document.getElementById('slide' + contador).checked = true
    contador++;

    if(contador > 4){
        contador = 1;
    }

}, 3000);

var form = document.getElementById('form');
var overlay = document.getElementById('modal');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    overlay.style.display = 'block';
});

document.getElementById('close').addEventListener('click', function() {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
});

(() => {
    if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
    }

    const acceptCookies = () => {
        document.querySelector(".box-cookies").classList.add('hide');
        localStorage.setItem("pureJavaScriptCookies", "accept");
    };

    const btnCookies = document.querySelector(".btn-cookies");

    btnCookies.addEventListener('click', acceptCookies);
})();