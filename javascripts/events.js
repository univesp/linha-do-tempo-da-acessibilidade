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
  // 
// Seu código abaixo
});

var n = 1;

// function Animacao(){
//     for (let x = 1; x <= 191; x++) {
//       if(section.children[n]){
//         var rect = section.children[n].children[1].getBoundingClientRect();
//         if (rect.y <= window.innerHeight) {
//           n += 1;
//           if(n % 2 == 0){
//             section.children[n-1].children[1].classList.add("slideIn");
//           } else {
//             section.children[n-1].children[1].classList.add("slideOut");
//           }
//       }
//       } else{
//         console.log("não existe tambem '-'");
//       }

//   }
// }

function ajustarLinha() {
  const section = document.querySelector("section");
  const line = document.querySelector(".line");
  const posicaoSection = section.getBoundingClientRect();
  const alturaTotal = section.scrollHeight;
  line.style.height = `${alturaTotal}px`;
  // line.style.top = `${posicaoSection.top + window.scrollY}px`;

}

// window.addEventListener('scroll', Animacao);
document.addEventListener("scroll", function() {



  // 
  // 


  //   window.addEventListener('scroll', function() {
  //     // Verifica se o usuário rolou para baixo
  //     if (window.scrollY > 0) {
  //       if(section.children[n]){
  //         console.log("isso existe")
  //         var rect = section.children[n].children[1].getBoundingClientRect();
  //         if (rect.y <= window.innerHeight) {
  //           n += 1;
  //           if(n % 2 == 0){
  //             section.children[n-1].children[1].classList.add("slideIn");
  //           } else {
  //             section.children[n-1].children[1].classList.add("slideOut");
  //           }
  //       }
  //       } else {
  //         console.log("não existe :/")
  //       }

  //     }
  // });
  // 
  /////////////////////////////////////////////
  /////////////////////////////////////////////

  /////////////////////////////////////////////
  /////////////////////////////////////////////
});


 // JSON 
 fetch('data.json')
 .then(response => response.json())
 .then(data => {
   obj = data; 
   displayData(obj);
 })
 .catch(error => {
   console.error('Erro ao carregar o JSON:', error);
 });
 // JSON 
 
 function displayData(obj){
   
 
   const ContentMain = document.getElementsByClassName("content-main")[0];
 
           function ateOndeEuVou(inicio, fim){
            let quantasDivTem = document.querySelectorAll("article")
            if(quantasDivTem.length == 0){
 
           for(let x = inicio; x <= fim; x++){ console.log(x)
                 const Article = createElements("article");
                 Article.className = `${greenOrYellow(x)}`;
                 // 
                 const CircleLeft = createElements("div");
                 CircleLeft.className = `circle-${leftOrRigth(x)}`;
                 // 
                 const DivLeft = createElements("div");
                 DivLeft.className = `white-${leftOrRigth(x)} timeline-content js--fadeInLeft`;
                 // 
                 const AgeLeft = createElements("div");
                 AgeLeft.className = `age-${leftOrRigth(x)}`;
                 AgeLeft.innerText = obj.texto[x].titulo;
                 // Adicionar elementos filhos ao Article
                 Article.appendChild(CircleLeft);
                 Article.appendChild(DivLeft);
             for(let y = 0; y < obj.texto[x].paragrafo.length; y++){
               const DivMarker = createElements("div");
               DivMarker.classList = "marker";
               DivMarker.innerText = "⧫";
               const Paragrafo = createElements("p");
               Paragrafo.innerText = obj.texto[x].paragrafo[y].paragrafo;
               // Adicionar elementos filhos ao DivLeft
               DivLeft.appendChild(AgeLeft);
               DivLeft.appendChild(DivMarker);
               DivLeft.appendChild(Paragrafo);
             }
             
           ContentMain.appendChild(Article);
           }
 
           function leftOrRigth(x){
             if(x%2==0){
               return "left";
             } else {
               return"right";
             }
           }
           function greenOrYellow(x){
             if(x%2==0){
               return "green";
             } else {
               return "yellow";
             }
           }
           function createElements(tagName){
             return document.createElement(tagName);
           }
          }
         }
 
         let liGeral = document.querySelectorAll(".nav-li");
 
         liGeral[0].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(0,38);
          ajustarLinha();
          // Animacao();
        });
        
        liGeral[1].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(39,77);
          ajustarLinha();
          // Animacao();
        });        
        liGeral[2].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(78,116);
          ajustarLinha();
          // Animacao();
        });        
        liGeral[3].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(117,155);
          ajustarLinha();
          // Animacao();
        });        
        liGeral[4].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(156,190);
          ajustarLinha();
          // Animacao();
        });

        function removeArticle(){
          let quantasDivTem = document.querySelectorAll("article");


          if(quantasDivTem.length > 0){
            quantasDivTem.forEach(element => {
              element.remove();
            })
          }
        }


         
 
 }

ajustarLinha();

window.addEventListener("resize", ajustarLinha);
                            


    // Criar um novo elemento de estilo
    const style = document.createElement('style');
    document.head.appendChild(style);

    // Obter a folha de estilo do novo elemento
    const styleSheet = style.sheet;
    // 
    // 
    // 
    // 
    const section = document.querySelector("section");
    // 
    // 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // 
        // Obter o elemento alvo
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        // 
        // Verificar se o elemento alvo existe
        if (targetElement) {
          // Calcular a posição desejada para centralizar o topo do elemento na tela
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = targetPosition - 92;
          // Rolagem suave até a posição onde o topo do elemento fica centralizado
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    // 
   // ===============================================================
  // 




