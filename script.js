const slider = document.querySelector('.slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const images = document.querySelectorAll('.slider img');

let currentImg = 0; 

function showSlide() {
    images.forEach((image, index) => {
        if(index === currentImg){
            image.classList.remove('hidden');
        } else {
            image.classList.add('hidden');
        }
    });
    checkBtn()
}


next.addEventListener('click', function() {
    if(currentImg < images.length - 1){
        currentImg++;
        showSlide();
    }
});

prev.addEventListener('click', function() {
    if(currentImg > 0){
        currentImg--;
        showSlide()
    }
});

function checkBtn(){
    if(currentImg === 0){
        prev.style.display = 'none';
    } else {
        prev.style.display = 'block';
    }
    if(currentImg === images.length - 1){
        next.style.display = 'none';
    } else {
        next.style.display = 'block'; 
    }
}

showSlide();