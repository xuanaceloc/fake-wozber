const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const web = $('.web')

function animationSection() {
    const imgTags = $$('.body .design_animation-img-item')
    const imgTagLength = imgTags.length
    var index = 0
    var maxTimes = 0


    function hiddenAllItem() {
        imgTags.forEach( (item) => {
            item.classList.add('hidden')
        })
    }

    function showItem() {
        if(index >= imgTagLength) {
            index = 0
            maxTimes += 1
        }
        
        if(maxTimes == 40) {
            return;
        }

        hiddenAllItem()
        imgTags[index].classList.remove('hidden')
        index++;
        setTimeout(showItem, 4000)
    }

    showItem()
}

export default animationSection;