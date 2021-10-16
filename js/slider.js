const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const web = $('.web')

function slider () {
    const sliderItem = $$('.slider_item')
    const sliderList = $('.slider_list')
    const sliderBtnLeft = $('.slider_list-btn.left')
    const sliderBtnRight = $('.slider_list-btn.right')

    var currentPosition = 0
    var marginLeft = 0
    var sliderPerPage = 0
    const sliderItemLength = sliderItem.length
    var itemWidth = 57.2
    var mql = window.matchMedia('(max-width : 1167px)')

    window.addEventListener('resize', () => {
        if(mql.matches) {
            itemWidth = 46
        }
    })

    window.addEventListener('load', () => {
        if(mql.matches) {
            itemWidth = 46
        }
    })

    // eye icon animation
   sliderItem.forEach((item) => {
        item.addEventListener('mouseleave', () => {
            let eyeIcon = item.querySelector('.slider_item-icon')
            eyeIcon.style.display = "flex";
            eyeIcon.animate(
                [
                    {transform : "translate(-50%,-50%) scale(1)"},
                    {transform : "translate(-50%,-50%) scale(0)"}
                ], {
                    duration : 200,
                }
            )
            setTimeout( () => {
                eyeIcon.style.display = "none";
            }, 190)
        })
    });
   sliderItem.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        let eyeIcon = item.querySelector('.slider_item-icon')
        eyeIcon.style.display = "flex";
        eyeIcon.animate(
            [
                {transform : "translate(-50%,-50%) scale(0)"},
                {transform : "translate(-50%,-50%) scale(1)"}
            ], {
                duration : 200,
            }
        )
    })
    });

    // transition slider item

    function sliderLeft() {
        if( currentPosition != 0) {
            sliderList.style.marginLeft = marginLeft + itemWidth + 'rem'
            marginLeft += itemWidth
            currentPosition--;
        }

        if (currentPosition == 0 ) {
            sliderBtnLeft.classList.add('disable')
        }
    }

    function sliderRight() {
        if( currentPosition < sliderItemLength - 2 ) {
            sliderList.style.marginLeft = marginLeft - itemWidth + 'rem'
            marginLeft -= itemWidth
            currentPosition++;
        }
        if(currentPosition > 0) {
            sliderBtnLeft.classList.remove('disable')
        }
    }

    sliderBtnLeft.addEventListener('click', sliderLeft)
    sliderBtnRight.addEventListener('click', sliderRight)

    
}

export default slider;