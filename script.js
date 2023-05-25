const cardAuthor = document.querySelector('.card-author');
const cardFooter = document.querySelector('.card-footer');
const cardShareBtn = document.querySelector('.card-share-btn');
const cardShareBackBtn = document.querySelector('.card-share-back-btn');

cardShareBtn.addEventListener('click', () => {
    cardAuthor.style.opacity = '0';
    cardFooter.classList.add('visible');
});

cardShareBackBtn.addEventListener('click', () => {
    cardAuthor.style.opacity = '1';
    cardFooter.classList.remove('visible');
});