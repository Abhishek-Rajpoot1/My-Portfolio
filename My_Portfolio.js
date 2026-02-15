// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Contact Form Alert
// const form = document.getElementById('contact-form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Thank you for contacting me!');
//     form.reset();
// });

// Email Selectionon
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_3048',
        'template_3048',
        this
    ).then(() => {
        alert("✅ Email sent successfully!");
        form.reset();
    }, (error) => {
        alert("❌ Failed to send email");
        console.log(error);
    });
});

// Vedio section

function openVideo(btn) {
  const videoUrl = btn.getAttribute("data-video");
  const frame = document.getElementById("videoFrame");

  frame.src = videoUrl;
  document.getElementById("videoModal").style.display = "block";
}

function closeVideo() {
  const frame = document.getElementById("videoFrame");
  frame.src = ""; // stop video
  document.getElementById("videoModal").style.display = "none";
}



