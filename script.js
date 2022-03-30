function openCloseBurgerMenu(button, menuItems) {
    document.querySelector(button).addEventListener('click', () => {
        document.querySelector(menuItems).classList.remove('hidden')
        console.log('removed hidden')
    })
    document.querySelector(menuItems).addEventListener('click', () => {
        document.querySelector(menuItems).classList.add('hidden')
    })

}

openCloseBurgerMenu('button', 'burger-menu')
