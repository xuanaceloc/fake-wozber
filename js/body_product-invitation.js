const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const web = $('.web')

function productInvitation() {
    const template1 = $('.body .product-invitation_background-template:first-child')
    const template2 = $('.body .product-invitation_background-template:nth-child(2)')
    const template3 = $('.body .product-invitation_background-template:nth-child(3)')
    const template4 = $('.body .product-invitation_background-template:nth-child(4)')
    const template5 = $('.body .product-invitation_background-template:nth-child(5)')

    function translateY(template,time) {
        template.animate([
            {transform : 'translateY(150%)'},
            {transform : 'translateY(0)'},
            {transform : 'translateY(-150%)'},
        ],{
            duration : time,
            iterations : Infinity,
        })
    }

    translateY(template1,21000)
    translateY(template2,29000)
    translateY(template3,40000)
    translateY(template4,24000)
    translateY(template5,31000)


}

export default productInvitation;