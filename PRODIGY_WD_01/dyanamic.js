const ham = document.querySelector('.ham');
const nav_links = document.querySelector('.nav-links');
ham.addEventListener('click',()=>{
    console.log('Clicked');
    nav_links.classList.toggle('active');
});