"use strict";

/* =================== CODE FOR STICKY NAVBAR ==================== */
window.addEventListener('scroll',
    function() {
        const navBar = this.document.getElementById('navBar');
        const stickyOffset = navBar.offsetTop;
        if(this.window.pageYOffset > stickyOffset) {
            navBar.classList.add('sticky');
        } else {
            navBar.classList.remove('sticky');
        }
    }
);

// =================== CODE FOR HAMBURGER MENU ====================
document.querySelector('.hamburger').addEventListener('click', toggleMenu);
function toggleMenu() {
  document.querySelector('.nav__content').classList.toggle('active');
}


/* =========== CONTACT FORM LIVE VALIDATION WITH CUSTOM ERROR MESSAGES ============ */

const regexPattrens = {
    name: /^[A-Za-z\s]{2,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/, 
    message: /^.{10,}$/
};

const formInputs = document.querySelectorAll('.form__input, .form__message');
const sendBtn = document.querySelector('.form__send');

const form = document.querySelector('.form');
form.addEventListener('submit', e => e.preventDefault());

const errorMessages = {
    name: "Please enter a valid name (min 2 letters.)",
    email: "Enter a valid email address(must contain @ and .)",
    phone: "Phone number must be exactly 10 digits.",
    message: "Message should be atleast 10 characters."
};

/* ---------- SEND BUTTON IS DISABLE INITIALLY.------------*/
sendBtn.disabled = true;

/* ----------- CREATING ERROOR SPANS VIA JS --------------*/
formInputs.forEach(input => {
    const span = document.createElement('span');
    span.className = 'error-message';
    span.style.color = 'crimson';
    span.style.fontSize = '0.85rem';
    input.parentElement.appendChild(span);
});

/* ------------ FOR REAL-TIME VALIDATION ---------------*/
formInputs.forEach(input => {
    input.addEventListener('input' , () => {
        const field = input.placeholder.toLowerCase().replace(/\s/g, '');
        const pattern = regexPattrens[field];
        const value = input.value.trim();
        const span = input.parentElement.querySelector('.error-message');

        input.addEventListener('input', () => {
        if (field === 'phone') {
        input.value = input.value.replace(/[^\d]/g, '').slice(0,10);
  }
});


        if(!pattern.test(value)) {
            span.textContent = errorMessages[field];
            input.setAttribute('data-valid', 'false');
        } else {
            span.textContent = "";
            input.setAttribute('data-valid', 'true');
        }

        /* ----------- ENABLING SEND BUTTON -----------*/
        const allValid = Array.from(formInputs).every(inp => inp.getAttribute('data-valid') === 'true');
        sendBtn.disabled = !allValid;
        sendBtn.style.opacity = allValid ? "1" : "0.5";
    });
});















