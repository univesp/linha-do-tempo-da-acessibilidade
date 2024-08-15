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

  console.log("_____________________________________________________");
  console.log(section.children.length);
  console.log(section.children[0]);
  console.log(section.children[1].children[1]);
  console.log(section.children[2]);
  console.log(section.children[3]);
  
  var n = 1;

  for (let index = 1; index < section.children.length; index++) {
    if(index % 2 == 0){
      section.children[index].children[1].classList.add("animate__animated");
      // section.children[index].children[1].classList.add("animate__backInRight");
      section.children[index].children[1].classList.add("animate__backInLeft");
      section.children[index].children[1].classList.add("paused"); 
    } else {
      section.children[index].children[1].classList.add("animate__animated");
      // section.children[index].children[1].classList.add("animate__backInLeft");
      section.children[index].children[1].classList.add("animate__backInRight");
      section.children[index].children[1].classList.add("paused"); 
    }

  }

  ajustarLinha();
    window.addEventListener("resize", ajustarLinha);

    window.addEventListener('scroll', function() {
      // Verifica se o usuário rolou para baixo
      if (window.scrollY > 0) {
          // Atualiza a página
          // location.reload();
          
          // console.log(section.children[1].children[1].getBoundingClientRect());
          var rect = section.children[n].children[1].getBoundingClientRect();
          if ((rect.top+100) <= window.innerHeight) {
            console.log("deu certo" + n);
            n += 1;
            if(n % 2 == 0){
              console.log("par");
              section.children[n-1].children[1].classList.remove("paused");
            } else {
              console.log("impar");
              section.children[n-1].children[1].classList.remove("paused");

              // section.children[n-1].children[1].classList.add("animate__animated");
              // section.children[n-1].children[1].classList.add("animate__rubberBand");
            }
        }

      }
  });
});