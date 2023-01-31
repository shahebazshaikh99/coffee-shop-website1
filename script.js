let search_btn = document.querySelector('#search-btn');
search_btn.addEventListener('click',()=>{
    console.log('clicked on search btan')
    document.querySelector('.search-form').classList.toggle('active');
    document.querySelector('.cart-items-container').classList.remove('active');
    document.querySelector('.navbar').classList.remove('active');
})


let cart_btn = document.querySelector('#cart-btn');
cart_btn.addEventListener('click' , ()=>{
    console.log('clicked on cart  btan')
    document.querySelector('.cart-items-container').classList.toggle('active');
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');

})


let menu_btn = document.querySelector('#menu-btn');
menu_btn.addEventListener('click' , ()=>{
    console.log('clicked on menu  btan')
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector('.cart-items-container').classList.remove('active');
})

window.onscroll=()=>{
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector('.cart-items-container').classList.remove('active');
    document.querySelector('.navbar').classList.remove('active');
}