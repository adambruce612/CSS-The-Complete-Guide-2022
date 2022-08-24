let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');


//console.dir(backdrop);
// console.dir(selectPlanButtons);

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

for(let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);

