$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

})

document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector("section");
  const line = document.querySelector(".line");

  function ajustarLinha() {
      const posicaoSection = section.getBoundingClientRect();
      const alturaTotal = section.scrollHeight;
      line.style.height = `${alturaTotal}px`;
      // line.style.top = `${posicaoSection.top + window.scrollY}px`;

  }

  var n = 1;
  var teste = document.getElementById("teste");

  for (let index = 1; index < section.children.length; index++) {
    if(index % 2 == 0){
      section.children[index].children[1].classList.add("animate__animated");
      // section.children[index].children[1].classList.add("animate__backInLeft");
      // section.children[index].children[1].classList.add("paused"); 
      // section.children[index].children[1].classList.add("display-none"); 
    } else {
      section.children[index].children[1].classList.add("animate__animated");
      // section.children[index].children[1].classList.add("animate__backInRight");
      // section.children[index].children[1].classList.add("paused"); 
      // section.children[index].children[1].classList.add("display-none"); 
    }

  }

  ajustarLinha();
    window.addEventListener("resize", ajustarLinha);

    window.addEventListener('scroll', function() {
      // Verifica se o usuário rolou para baixo
      console.log(window.scrollY);
      console.log(window.innerHeight);
      if (window.scrollY > 0) {
          var rect = section.children[n].children[1].getBoundingClientRect();
          console.log(rect)
          if (rect.y <= window.innerHeight) {
            n += 1;
            teste.innerHTML = (rect.y) + " : " + this.window.innerHeight;
            console.log(rect.top)
            console.log(rect.bottom)
            if(n % 2 == 0){
              section.children[n-1].children[1].classList.remove("paused");
              section.children[n-1].children[1].classList.remove("display-none");
              section.children[n-1].children[1].classList.add("animate__backInRight");
            } else {
              section.children[n-1].children[1].classList.remove("paused");
              section.children[n-1].children[1].classList.remove("display-none");
              section.children[n-1].children[1].classList.add("animate__backInLeft");

            }
        }

      }
  });
});