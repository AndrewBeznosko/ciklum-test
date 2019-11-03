import '../styles/index.scss';
import Todo from './Todo';


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
// dropdown
// ===================================================================
//toggle dropdown menu open/close
var toClose = false;

function toggle(e) {
    e.stopPropagation();
    var btn = this;
    var menu = btn.nextSibling;

    while (menu && menu.nodeType != 1) {
        menu = menu.nextSibling;
    }
    if (!menu) return;
    if (menu.style.display !== 'block') {
        menu.style.display = 'block';
        if (toClose) toClose.style.display = "none";
        toClose = menu;
    } else {
        menu.style.display = 'none';
        toClose = false;
    }

};

function closeAll() {
    toClose.style.display = 'none';
};

window.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".dropdown-toggle").forEach(function(btn) {
        btn.addEventListener("click", toggle, true);
    });
});

window.onclick = function(event) {
    if (toClose) {
        closeAll.call(event.target);
    }
};
// ===================================================================
// 
// ===================================================================
let todo = new Todo();
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