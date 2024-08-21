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
  $(function() {
    var w=$(window);
     var sliderContainer = $("#menu-slider-container");
     var sliderUl = $("#menu-slider");
     var sliderLi = sliderUl.children("li");
     var sliderNext = $("#menu-slider-next");
     var sliderPrev = $("#menu-slider-prev");
    var sliderLiWidth = sliderLi.eq(0).width();
     sliderUl.width(sliderLi.length * sliderLiWidth);
     
     if (sliderUl.width() > sliderContainer.width()) {
       sliderNext.fadeIn();
     }
     
    sliderNext.on("click", function() {
         var x = parseInt(sliderUl.css("marginLeft"));
         var ulWidth = sliderUl.width();
        if (ulWidth + x >= sliderContainer.width()) {
           x -= sliderLiWidth * 3;
           if (ulWidth + x < sliderContainer.width()) { x = sliderContainer.width() - ulWidth - 10; }
           sliderUl.stop().animate({ marginLeft: x }, 800);
          sliderPrev.fadeIn();
          console.log(parseInt(sliderUl.css("marginLeft"))*-1, ulWidth - sliderContainer.width());
         }
      if (parseInt(sliderUl.css("marginLeft"))*-1 >= ulWidth - sliderContainer.width()*2) {
            sliderNext.fadeOut();
          }
       });
        
     sliderPrev.on("click", function() {
         var x = parseInt(sliderUl.css("marginLeft"));
         var ulWidth = sliderUl.width();
        if (x <= 0) { 
           x += sliderLiWidth * 3;
           if (x > 0) { x = 0; }
           sliderUl.stop().animate({ marginLeft: x }, 800);
          sliderNext.fadeIn();
          if (x == 0) {
            sliderPrev.fadeOut();
          }
         }
       });
   });

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
  
  for (let index = 1; index < section.children.length; index++) {
    if(index % 2 == 0){
      // section.children[index].children[1].classList.add("animate__animated");
      // section.children[index].children[1].classList.add("animate__backInLeft");
      // section.children[index].children[1].classList.add("paused"); 
      // section.children[index].children[1].classList.add("display-none"); 
    // } else {
    //   section.children[index].children[1].classList.add("animate__animated");
      // section.children[index].children[1].classList.add("animate__backInRight");
      // section.children[index].children[1].classList.add("paused"); 
      // section.children[index].children[1].classList.add("display-none"); 
    }

  }

  function Animacao(){
    for (let x = 1; x <= section.children.length; x++) {
      var rect = section.children[n].children[1].getBoundingClientRect();
      if (rect.y <= window.innerHeight) {
        n += 1;
        if(n % 2 == 0){
          section.children[n-1].children[1].classList.add("slideIn");
        } else {
          section.children[n-1].children[1].classList.add("slideOut");
        }
    }
  }
}


  ajustarLinha();
  Animacao();
    window.addEventListener("resize", ajustarLinha);

    window.addEventListener('scroll', function() {
      // Verifica se o usuário rolou para baixo
      if (window.scrollY > 0) {
          var rect = section.children[n].children[1].getBoundingClientRect();
          if (rect.y <= window.innerHeight) {
            n += 1;
            if(n % 2 == 0){
              section.children[n-1].children[1].classList.add("slideIn");
            } else {
              section.children[n-1].children[1].classList.add("slideOut");
            }
        }
      }



  });
});