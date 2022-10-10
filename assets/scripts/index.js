const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})


// const botaoMenuInicio = document.querySelector('.menu-lateral__link, .menu-lateral__link--inicio, .menu-lateral__link--videos')

// botaoMenuInicio.addEventListener('click', () => {
//     botaoMenuInicio.classList.toggle('menu-lateral__link--ativo')
// })