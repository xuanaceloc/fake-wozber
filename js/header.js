const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const web = $('.web')

function header () {
    const header = $('.header')
    const languageBtn = $('.header_nav-submenu-language')
    const languageBox = $('.header_nav-submenu-language-box')
    const subMenuBtn = $('.header_nav-submenu-btn')
    const subMenuBtnText = $('.header_nav-submenu-btn-link')
    const menuItems = $$('.header_nav-item')
    const menuOpen = $('.header_nav-submenu-menu-btn-open')
    const menuClose = $('.header_nav-submenu-menu-btn-close')
    const headerNavMenu = $('.header_nav-menu')
    // language box
    languageBtn.addEventListener('click', () => {
        languageBox.classList.add('show')
    })

    web.addEventListener('click', (e) => {
        if( !e.target.closest('.header_nav-submenu-language') || e.target.closest('.header_nav-submenu-menu-btn-open')) {
            languageBox.classList.remove('show')
        }
    })

    // scroll down show nav

    window.addEventListener('scroll', () => {
        var match = window.matchMedia("(max-width : 1024px)")
        if(match.matches) {
            return;
        } else {
            if( scrollY > 60) {
                header.style.boxShadow = "0 0.2rem 0.2rem rgba(0, 0, 0, 0.05)"
                subMenuBtn.style.backgroundColor = "#0c66ff"
                subMenuBtnText.style.color = "#fff"
            } else {
                header.style.boxShadow = "unset"
                subMenuBtn.style.backgroundColor = "#ebebeb"
                subMenuBtnText.style.color = "#222"
            }
        }
    })

    // active menu item

    function clearActive(list) {
        list.forEach((item) => {
            item.classList.remove('active')
        })
    }

    menuItems.forEach( (item) => {
        item.addEventListener('click', () => {
            clearActive(menuItems)
            item.classList.add('active')
        })
    })

    // open menu btn 
    menuOpen.addEventListener('click', () => {
        header.classList.add('tablet_overflow')
        menuOpen.classList.add('hidden')
        menuClose.classList.remove('hidden')
        // tablet
        headerNavMenu.classList.remove('tablet_hidden')
        languageBtn.classList.remove('tablet_hidden')
        subMenuBtn.classList.remove('tablet_hidden')
        // mobile
        subMenuBtn.classList.remove('mobile_hidden')
        headerNavMenu.classList.remove('mobile_hidden')
        languageBtn.classList.remove('mobile_hidden')
    })

    // close menu btn 
    menuClose.addEventListener('click', () => {
        header.classList.remove('tablet_overflow')
        menuOpen.classList.remove('hidden')
        menuClose.classList.add('hidden')
        // tablet
        headerNavMenu.classList.add('tablet_hidden')
        languageBtn.classList.add('tablet_hidden')
        subMenuBtn.classList.add('tablet_hidden')
        // mobile
        subMenuBtn.classList.add('mobile_hidden')
        headerNavMenu.classList.add('mobile_hidden')
        languageBtn.classList.add('mobile_hidden')
    })



}

export default header;