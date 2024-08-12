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
      line.style.top = `${posicaoSection.top + window.scrollY}px`;
  }

  ajustarLinha();
  window.addEventListener("resize", ajustarLinha);
});