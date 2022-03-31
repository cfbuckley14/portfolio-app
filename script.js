function openCloseBurgerMenu(button, menuItems) {
    document.querySelector(button).addEventListener('click', () => {
        if(document.querySelector(menuItems).classList.contains('hidden')) {
            document.querySelector(menuItems).classList.remove('hidden')
        } else {
            document.querySelector(menuItems).classList.add('hidden')
        }
    })
}

openCloseBurgerMenu('#burger-menu-button', '#burger-menu')

