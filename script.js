function openCloseBurgerMenu(button, menuItems, overlay) {
    document.querySelector(button).addEventListener('click', () => {
        if(document.querySelector(menuItems).classList.contains('hidden')) {
            document.querySelector(menuItems).classList.remove('hidden')
            document.querySelector(overlay).classList.add('overlay')
        } else {
            document.querySelector(menuItems).classList.add('hidden')
            document.querySelector(overlay).classList.remove('overlay')
        }
    })
}

openCloseBurgerMenu('#burger-menu-button', '#burger-menu', '#overlay')

