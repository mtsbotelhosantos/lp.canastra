document.addEventListener('DOMContentLoaded', ()=>{

    new TypeIt(".animated", {
        speed: 220,
       
        loop:true
    }).type("modernas! ",{delay: 1200}).delete(10)
      .type("resistentes! ",{delay: 1200}).delete(13)
      .type("ecológicas! ",{delay: 1200})

    .go()
})


// ---------------carrossel imagens-------------




let slides = document.querySelectorAll('.slideshow');
        let dots = document.querySelectorAll('.dot');
        let slideIndex = 1;
        let timeoutID;

        const showSlides = (n) => {
            let i;

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }


            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            clearTimeout(timeoutID);
            timeoutID = setTimeout(autoSlides, 4000);
        };

        const plusSlides = (n) => {
            showSlides(slideIndex += n);
        };

        const currentSlide = (n) => {
            showSlides(slideIndex = n);
        };

        function autoSlides() {
            let i;

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            for (i = 0; i < slides.length; i++) {
                dots[i].setAttribute('class', 'dot');
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].setAttribute('class', 'dot ativo');
            timeoutID = setTimeout(autoSlides, 4000);
        }

        autoSlides();


//-------------------------------------------------


//MASCARA CNPJ

document.getElementById('produto-1-cnpj').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
  e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
});

//MASCARA TELEFONE

function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('telefone').onkeyup = function(){
  mascara( this, mtel );
}
}


//CONTACT FORM
const scriptURL = hidden //CONST OCULTA

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Obrigado! Entraremos em contato." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
