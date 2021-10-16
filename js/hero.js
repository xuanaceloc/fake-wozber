const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const web = $('.web')

function hero() {
    const icons = $$('.hero-right-background-icon')
    const squareIcon = $$('.square')
    const squareSmallIcon = $$('.square--small')
    const circleIcon = $$('.circle')
    const circleSmallIcon = $$('.circle--small')
    const triangleIcon = $$('.triangle')
    const list = [
        {
            id : 0,
            cv : '../img/hero-img/cv-1.png',
            avatar : '../img/hero-img/img-1.jpg'
        },
        {
            id : 1,
            cv : '../img/hero-img/cv-2.png',
            avatar : '../img/hero-img/img-2.jpg'
        },
        {
            id : 2,
            cv : '../img/hero-img/cv-3.png',
            avatar : '../img/hero-img/img-3.jpg'
        },
        {
            id : 3,
            cv : '../img/hero-img/cv-4.png',
            avatar : '../img/hero-img/img-4.jpg'
        },
        {
            id : 4,
            cv : '../img/hero-img/cv-5.png',
            avatar : '../img/hero-img/img-5.jpg'
        },
    ]
    const cv = $('.hero-right-img-cv')
    const cvAvatar = $('.hero-right-img-avatar')

    // animation icon
    squareIcon.forEach( (icon) => {
        icon.animate(
            [
                {transform: "translateY(0)" },
                {transform: "translateY(150%)"},
                {transform: "translateY(0)" },
            ], {
                duration: 4000,
                iterations: Infinity,
            }
        )
    });

    squareSmallIcon.forEach( (icon) => {
        icon.animate(
            [
                {transform: "translateY(0)" },
                {transform: "translateY(140%)"},
                {transform: "translateY(0)" },
            ], {
                duration: 4000,
                iterations: Infinity,
            }
        )
    });
    circleSmallIcon.forEach( (icon) => {
        icon.animate(
            [
                {transform: "translateY(0)" },
                {transform: "translateY(250%)"},
                {transform: "translateY(0)" },
            ], {
                duration: 6000,
                iterations: Infinity,
            }
        )
    });
    circleIcon.forEach( (icon) => {
        icon.animate(
            [
                {transform: "translateY(0)" },
                {transform: "translateY(150%)"},
                {transform: "translateY(0)" },
            ], {
                duration: 4000,
                iterations: Infinity,
            }
        )
    });
    triangleIcon.forEach( (icon) => {
        icon.animate(
            [
                {transform: "translateY(0)" },
                {transform: "translateY(150%)"},
                {transform: "translateY(0)" },
            ], {
                duration: 6000,
                iterations: Infinity,
            }
        )
    });


    // render background
    var i = 0
    var endIndex = 0
    var len = list.length
    function renderBackground() {
        if( i === len) {
            i = 0
            endIndex++
        }
        if(endIndex === 40) {
            cvAvatar.classList.add('hidden')
            return
        }

        cv.style.backgroundImage = `url(${list[i].cv})`
        cvAvatar.style.backgroundImage = `url(${list[i].avatar})`
        i++;
        setTimeout(renderBackground, 4000)
    }

    // window.addEventListener('load', renderBackground)
    renderBackground()
}

export default hero
