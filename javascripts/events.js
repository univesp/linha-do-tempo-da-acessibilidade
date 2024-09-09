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

function ajustarLinha() {
  const section = document.querySelector("section");
  const line = document.querySelector(".line");
  const posicaoSection = section.getBoundingClientRect();
  const alturaTotal = section.scrollHeight;
  line.style.height = `${alturaTotal}px`;

}

document.addEventListener("scroll", function() {

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

  let tamanhoTelaVertical = window.innerHeight;
  console.log(tamanhoTelaVertical);

  if(tamanhoTelaVertical < 735){
    let pegaSeta = document.getElementsByClassName("content-img");
    pegaSeta[0].remove();
  }
   
 
   const ContentMain = document.getElementsByClassName("content-main")[0];
 
           function ateOndeEuVou(inicio, fim){
            let quantasDivTem = document.querySelectorAll("article")
            if(quantasDivTem.length == 0){
 
           for(let x = inicio; x <= fim; x++){
                 const Article = createElements("article");
                 Article.className = `${greenOrYellow(x)}`;
                 // 
                 const CircleLeft = createElements("div");
                 CircleLeft.className = `circle-${leftOrRigth(x)}`;
                 // 
                 const DivLeft = createElements("div");
                 DivLeft.className = `white-${leftOrRigth(x)} timeline-content`;
                 // 
                 DivLeft.setAttribute('data-id', x);
                 //
                 const AgeLeft = createElements("div");
                 AgeLeft.className = `age-${leftOrRigth(x)}`;
                 AgeLeft.innerText = obj.texto[x].titulo;
                 //
                 const linkElement = document.createElement('a');
                 // Adicionar elementos filhos ao Article
                 Article.appendChild(CircleLeft);
                 Article.appendChild(DivLeft);
             for(let y = 0; y < obj.texto[x].paragrafo.length; y++){
               const DivMarker = createElements("div");
               DivMarker.classList = "marker";
               DivMarker.innerText = "⧫";
               const Paragrafo = createElements("p");

                if(x == 189){
                  Paragrafo.innerHTML = `Objetivos do Desenvolvimento Sustentável (<b><a href="https://brasil.un.org/pt-br/sdgs" target="_blank">https://brasil.un.org/pt-br/sdgs</a></b>): originada da Declaração de Incheon (2015), o documento da Unesco traz 17 objetivos que devem ser implementados até 2030. No 4º item, propõe como objetivo: assegurar a Educação Inclusiva, equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.`;
                } else{
                  Paragrafo.innerText = obj.texto[x].paragrafo[y].paragrafo;
                }
 
               // Adicionar elementos filhos ao DivLeft
               DivLeft.appendChild(AgeLeft);
               DivLeft.appendChild(DivMarker);
               DivLeft.appendChild(Paragrafo);               
             
              if(obj.texto[x].link){
                linkElement.href = obj.texto[x].link;
                linkElement.classList.add("link-font");
                linkElement.textContent = `(Fonte: ${obj.texto[x].link})`;
                linkElement.target = "__blank";
                DivLeft.appendChild(linkElement);
              }

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

         ateOndeEuVou(0,16);
         ajustarLinha();
         Anima();
 
         liGeral[0].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(0,16);
          ajustarLinha();
          AddActive(0);
          velocidadeAnima();

          });
        // });
        
        liGeral[1].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(17,27);
          ajustarLinha();
          AddActive(1);
          velocidadeAnima();

        });        
        liGeral[2].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(28,77);
          ajustarLinha();
          AddActive(2);
          velocidadeAnima();

        });        
        liGeral[3].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(78,163);
          ajustarLinha();
          AddActive(3);
          velocidadeAnima();

        });        
        liGeral[4].addEventListener("click", function(){
          removeArticle();
          ateOndeEuVou(164,190);
          ajustarLinha();
          AddActive(4);
          velocidadeAnima();


        });

        function removeArticle(){
          let quantasDivTem = document.querySelectorAll("article");

          if(quantasDivTem.length > 0){
            quantasDivTem.forEach(element => {
              element.remove();
            })
          }
        }

        function AddActive(x){
          liGeral.forEach(element =>{
            element.classList.remove("active");
          })
          liGeral[x].classList.add("active");
        }

        function Anima(){
            const elements = document.querySelectorAll('.timeline-content');  
            //  
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  if(entry.target.classList.length != 3){
                    if(entry.target.getAttribute("data-id")%2==0){
                      entry.target.classList.add("slideIn");
                    } else {
                      entry.target.classList.add("slideOut");
                    }
                  }
                }
              });
            }, {
              threshold: 0.1  // Define o percentual do elemento visível para acionar a animação
            });
      
            // Comece a observar todos os elementos selecionados
            elements.forEach(element => {
              observer.observe(element);
            });
        }

        function velocidadeAnima(){
          let x = window.scrollY
          if(x > 1200 && x < 2900){
            setTimeout(() => {
              console.log("500")
              Anima();
            }, 500);
          } else if(window.scrollY > 3000 && x < 15000) {
            setTimeout(() => {
              console.log("700")
              Anima();
            }, 700);
          } else if(window.scrollY > 15000) {
            setTimeout(() => {
              console.log("1000000000")
              Anima();
            }, 900);
          } else {
            console.log("se foi")
            Anima();
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
   //
  // 