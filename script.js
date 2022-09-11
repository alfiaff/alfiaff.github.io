const menuToggleButton = document.querySelector('#check');
const navMenu = document.querySelector('.menu');

menuToggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-action');
})

document.addEventListener('scroll', () => {
    const getLinkMenu = document.querySelectorAll('.link-menu');
    const navBar = document.querySelector('#header-content')
    const logoText = document.querySelector('#logo-link')
    const photoProfile = document.getElementById('pp');
    const CARD_ONE = document.querySelector('.card-1');
    const CARD_TWO = document.querySelector('.card-2');
    const CARD_THREE = document.querySelector('.card-3');
    const CARD_FOUR = document.querySelector('.card-4');
    const CARD_FIVE = document.querySelector('.card-5');
    const CARD_SIX = document.querySelector('.card-6');

    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        getLinkMenu[0].classList.remove('active');
        getLinkMenu[1].classList.add('active');
        photoProfile.classList.add('pp')
    } else {
        getLinkMenu[0].classList.add('active');
        getLinkMenu[1].classList.remove('active');
        photoProfile.classList.remove('pp')
    } 
    
    if(document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        getLinkMenu[0].classList.remove('active');
        getLinkMenu[1].classList.remove('active');
        getLinkMenu[2].classList.add('active');
    } else {
        getLinkMenu[2].classList.remove('active');
    } 

      
    if(document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        getLinkMenu[0].classList.remove('active');
        getLinkMenu[1].classList.remove('active');
        getLinkMenu[2].classList.remove('active');
        getLinkMenu[3].classList.add('active');
        CARD_ONE.classList.add('action-card-1');
        CARD_TWO.classList.add('action-card-2');
        CARD_THREE.classList.add('action-card-3');
        CARD_FOUR.classList.add('action-card-4');
        CARD_FIVE.classList.add('action-card-5');
        CARD_SIX.classList.add('action-card-6');

    } else {
        getLinkMenu[3].classList.remove('active');
        CARD_ONE.classList.remove('action-card-1');
        CARD_TWO.classList.remove('action-card-2');
        CARD_THREE.classList.remove('action-card-3');
        CARD_FOUR.classList.remove('action-card-4');
        CARD_FIVE.classList.remove('action-card-5');
        CARD_SIX.classList.remove('action-card-6');
    } 


    
 
    

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navBar.style.background = '#000'
        logoText.style.color = '#fff'
        for(let i = 0; i < getLinkMenu.length; i++) {
            getLinkMenu[i].style.color = '#fff'
        } 
        const lineToggleForMenuToggleBtn = document.querySelectorAll('.line-toggle'); 
        lineToggleForMenuToggleBtn.forEach(lineToggleForMenuToggleBtn => {
            lineToggleForMenuToggleBtn.style.backgroundColor = '#fff' 
        })
       
       

    } else {
        navBar.style.background = 'transparent'
        navBar.style.transition = '0.2s'
        logoText.style.color = '#000'
        for(let i = 0; i < getLinkMenu.length; i++) {
            getLinkMenu[i].style.color = '#000'
        } 
        const lineToggleForMenuToggleBtn = document.querySelectorAll('.line-toggle'); 
        lineToggleForMenuToggleBtn.forEach(lineToggleForMenuToggleBtn => {
            lineToggleForMenuToggleBtn.style.backgroundColor = '#000' 
        })  
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const alertCustomBox = document.querySelector('.alert-box-custom');
    alertCustomBox.classList.add('action-alert-box-custom');

    setTimeout(() => {
        alertCustomBox.classList.add('action-alert-box-custom-2')
    }, 2000);
})
 

  





