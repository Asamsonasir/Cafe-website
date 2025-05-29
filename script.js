 const phrases = [
      "Brew-tiful moments at the cafe.",
      "A latte love for this cozy corner.",
      "Savoring the moments, one cup at a time.",
      "Coffee and friends make the perfect blend."
    ];

    let index = 0;
    const textElement = document.getElementById("animatedText");

    setInterval(() => {
      index = (index + 1) % phrases.length;
      textElement.style.animation = "none";
      void textElement.offsetWidth;
      textElement.textContent = phrases[index];
      textElement.style.animation = "fadeIn 1s ease-in-out";
    }, 3000);
// section 6

// 3D Hover Parallax Effect
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('mousemove', (e) => {
    const rect = photo.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    photo.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.05)`;
  });

  photo.addEventListener('mouseleave', () => {
    photo.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
});

// Lightbox Effect
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', () => {
    const imageUrl = photo.style.backgroundImage.slice(5, -2); // Remove url("...")

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'lightbox-image';

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});

   
