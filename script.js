const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuToggle.classList.toggle('open');
});

menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        menu.classList.remove('open');
        menuToggle.classList.remove('open');
    }
});

const links = document.querySelectorAll('.menu a'); 

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Faz rolagem suave
    });
});

window.addEventListener('DOMContentLoaded', () => {
    // Garante que a página começa na seção Home ao ser recarregada
    if (window.location.hash !== "#home") {
        window.location.hash = "#home"; // Força a rolagem para Home
    }
});

const tagHtml = document.querySelector("h2");
const texto = "Este é meu espaço criativo...";
let index = 0;
let isReverse = false;

const efeitoDigitacao = () => {
    
  if(!isReverse && index <= texto.length) { 
    tagHtml.textContent = texto.substring(0, index + 1);
    index++
    if(index > texto.length) {
      setTimeout(efeitoDigitacao, 1000);
      isReverse = true;
    } else {
      setTimeout(efeitoDigitacao, 200)
    }
  } else if(isReverse && index >= 0) {
    
    tagHtml.textContent = texto.substring(0, index);
    index--
    
    if(index === 0){
      
      isReverse = false
      setTimeout(efeitoDigitacao, 100)
      
    } else {
      setTimeout(efeitoDigitacao, 50)
    }

  }
  
}

efeitoDigitacao();

let currentIndex = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

function showNextItem() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
}

function showPrevItem() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.add('active');
}

// Inicializar o carrossel
items[currentIndex].classList.add('active');
