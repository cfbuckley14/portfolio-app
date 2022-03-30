let openBurgerMenuButton = document.querySelector('button')
let burgerMenuItems = document.querySelector('.burger-menu')

openBurgerMenuButton.addEventListener('click', () => {
    burgerMenuItems.classList.remove('.hidden')
    console.log('removed hidden')
})