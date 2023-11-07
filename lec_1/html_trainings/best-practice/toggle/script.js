document.querySelector('.toggler__button')
    .addEventListener('click', function() {
        this.nextElementSibling
            .classList.toggle('toggler__content--on');
});