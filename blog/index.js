const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const circle = document.querySelector(".circle-cont")

open.addEventListener('click',function(){
    container.classList.add('rotate');
})

close.addEventListener('click',function(){
    container.classList.remove('rotate');
})