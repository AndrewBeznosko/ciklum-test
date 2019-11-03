import '../styles/index.scss';

// ===================================================================
// modal
// ===================================================================
const modalTriggers = document.querySelectorAll('.popup-trigger');
const modalCloseTrigger = document.querySelector('[data-dismiss="modal"]');
const bodyBlackout = document.querySelector('.modal-backdrop');

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const {
            popupTrigger
        } = trigger.dataset;
        const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

        popupModal.classList.add('show');
        bodyBlackout.classList.add('show');

        popupModal.querySelectorAll('[data-dismiss="modal"]').forEach(e => {
            e.addEventListener('click', () => {
                popupModal.classList.remove('show');
                bodyBlackout.classList.remove('show');
            });
        });

        bodyBlackout.addEventListener('click', () => {
            popupModal.classList.remove('show');
            bodyBlackout.classList.remove('show');
        });
    });
});

// ===================================================================
// todo Form
// ===================================================================
document.getElementById('todoForm').onsubmit = function(e) {
    e.target.getElementsByClassName('close')[0].click();
    return false;
};
// ===================================================================
// 
// ===================================================================
// ===================================================================
// 
// ===================================================================
// ===================================================================
// 
// ===================================================================
// ===================================================================
// 
// ===================================================================
// ===================================================================
// 
// ===================================================================