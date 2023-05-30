const cardAuthor = document.querySelector('.card-author');
const cardFooter = document.querySelector('.card-footer');
const cardShareBtn = document.querySelector('.card-share-btn');
const cardShareBackBtn = document.querySelector('.card-share-back-btn');
const minWidth = 1000;

function updateOpacity () {
    if (window.innerWidth >= minWidth) {
        cardAuthor.style.opacity = '1';
        cardShareBtn.style.opacity = '0';
        cardShareBackBtn.style.transition = 'none';
    }else{
        cardAuthor.style.opacity = '0';
    }
}

cardShareBtn.addEventListener('click', () => {
    updateOpacity();
    cardFooter.classList.add('visible');
});

cardShareBackBtn.addEventListener('click', () => {
    cardAuthor.style.opacity = '1';
    cardShareBtn.style.opacity = '1';
    cardFooter.classList.remove('visible');
});

window.addEventListener('resize', function(){
    updateOpacity();
    if (window.innerWidth >= minWidth) {
        cardShareBtn.style.opacity = '1';
    }else {
        cardAuthor.style.opacity = '1';
    }
});