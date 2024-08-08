// Hamburger button for header
document.getElementById('hamburger').addEventListener('click', function() {
    const headerMenu = document.querySelector('.header-nav ul');
    const icons = document.querySelector('.icons');
    headerMenu.classList.toggle('show');
    icons.classList.toggle('show');
    console.log('Header Menu Display:', window.getComputedStyle(headerMenu).display);
    console.log('Icons Display:', window.getComputedStyle(icons).display);
});

// Form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    var form = e.target;
    var formData = new FormData(form);

    fetch('form-handler.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        var formResponse = document.getElementById('form-response');
        formResponse.style.display = 'block';
        formResponse.textContent = data.message;

        if (data.status === 'success') {
            form.style.display = 'none'; // Hide the form if submission is successful
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// reCAPTCHA responsiveness
document.addEventListener("DOMContentLoaded", function() {
    function scaleRecaptcha() {
        var recaptchaContainer = document.querySelector('.recaptcha-container');
        var recaptcha = recaptchaContainer.querySelector('.g-recaptcha');
        var containerWidth = recaptchaContainer.offsetWidth;
        var recaptchaWidth = 304; // Default width of reCAPTCHA
        var defaultHeight = 78; // Default height of reCAPTCHA

        if (containerWidth < recaptchaWidth) {
            var scale = containerWidth / recaptchaWidth;
            recaptcha.style.transform = 'scale(' + scale + ')';
            recaptcha.style.transformOrigin = '0 0';
            recaptchaContainer.style.height = (scale * defaultHeight + 8) + 'px'; // Adjust height to include padding
        } else {
            recaptcha.style.transform = 'scale(1)';
            recaptchaContainer.style.height = (defaultHeight + 8) + 'px'; // Adjust height to include padding
        }
    }

    scaleRecaptcha(); // Initial scaling
    window.addEventListener('resize', scaleRecaptcha); // Scale on window resize
});
