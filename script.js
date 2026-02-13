const yesBtn = document.getElementById('yesbutton');
const noBtn = document.getElementById('nobutton');
const heartContainer = document.getElementById('heart-container');

// YES BUTTON LOGIC
yesBtn.addEventListener('click', () => {
    
    // 1. Launch Hearts
    for (let i = 0; i < 50; i++) {
        createHeart(yesBtn);
    }

    // 2. Wait 2 seconds (2000ms), then redirect
    // This gives her time to see the hearts!
    setTimeout(() => {
        window.location.href = "next-page.html"; // <--- CHANGE THIS to your page name
    }, 2000); 
});

function createHeart(element) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; 

    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    const tx = (Math.random() - 0.5) * 400;
    const ty = (Math.random() - 0.5) * 400;

    heart.style.setProperty('--tx', `${tx}px`);
    heart.style.setProperty('--ty', `${ty}px`);

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// NO BUTTON LOGIC (Run Away)
noBtn.addEventListener('mouseover', () => {
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    noBtn.style.position = 'fixed'; 
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});