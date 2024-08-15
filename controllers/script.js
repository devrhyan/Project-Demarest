
// Extraindo as classes do HTML
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".menu");
const imgSocial = document.querySelector(".logo");
const faker = document.querySelector(".fakerCnj");
const block = document.querySelector('.block');
// const teste = document.querySelector('.teste')


// Evento de click, no menu hamburguer
hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    imgSocial.classList.toggle('active')
    block.classList.toggle('active')
    // teste.classList.toggle('active')
});

