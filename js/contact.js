/**
 * Contact Form Handler
 * Simulates form submission.
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation visualization
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.style.backgroundColor = 'var(--color-success)';
                btn.style.borderColor = 'var(--color-success)';

                // Reset form
                contactForm.reset();

                // Reset button after delay
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = ''; // Reset to default CSS
                    btn.style.borderColor = '';
                }, 3000);
            }, 1500);
        });
    }
});
