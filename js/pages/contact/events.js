import { showWarning, clearWarnings, isValidEmail, isFieldFilled } from '../../lib/formValidation.js';

/**
 * Attaches submit event listener to the contact form for validation.
 */
export function attachContactFormListeners() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const successMessage = document.getElementById('contact-success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearWarnings(form);

        const name = document.getElementById('contact-name');
        const email = document.getElementById('contact-email');
        const message = document.getElementById('contact-message');
        
        let isValid = true;
        if (!isFieldFilled(name.value)) {
            showWarning(name, 'Please enter your name.');
            isValid = false;
        }
        if (!isFieldFilled(email.value)) {
            showWarning(email, 'Please enter your email.');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showWarning(email, 'Please enter a valid email address.');
            isValid = false;
        }
        if (!isFieldFilled(message.value)) {
            showWarning(message, 'Please enter your message.');
            isValid = false;
        }

        if (isValid) {
            form.hidden = true;
            successMessage.hidden = false;
        }
    });
}