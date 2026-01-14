document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ALL PAGES
    const pages = {
        1: document.getElementById('page1'),
        2: document.getElementById('page2'),
        3: document.getElementById('page3'),
        4: document.getElementById('page4')
    };

    // 2. SELECT ALL BUTTONS
    const seeMessageBtn = document.getElementById('seeMessageBtn');
    const nextBtnPage2 = document.querySelector('#next-container .next-btn');
    const toPage4Btn = document.getElementById('toPage4');

    // 3. AUDIO & TYPEWRITER ASSETS
    const music = document.getElementById('birthday-music');
    const textElement = document.getElementById('typewriter-text');
    const nextBtnContainer = document.getElementById('next-container');
    const message = "Hieeee,\n\nHappiest Birthday Tanu ✨ May this year bring you happiness, good health, and everything your heart wishes for.\n\nKeep shining, smiling, and laughing the way you always do!!❤️. Happy 21!";

    let index = 0;

    // 4. TYPEWRITER FUNCTION
    function typeEffect() {
        if (index < message.length) {
            if (message.charAt(index) === "\n") {
                textElement.innerHTML += "<br>";
            } else {
                textElement.innerHTML += message.charAt(index);
            }
            index++;
            setTimeout(typeEffect, 50);
        } else {
            // Reveal button once typing is done
            nextBtnContainer.classList.remove('hidden');
        }
    }

    // 5. NAVIGATION: PAGE 1 -> PAGE 2
    seeMessageBtn.addEventListener('click', () => {
        if (music) music.play().catch(e => console.log("Audio Error:", e));
        pages[1].classList.add('hidden');
        setTimeout(() => {
            pages[1].style.display = 'none';
            pages[2].classList.remove('hidden');
            pages[2].style.display = 'block';
            typeEffect();
        }, 800);
    });

    // 6. NAVIGATION: PAGE 2 -> PAGE 3 (Photos)
    if (nextBtnPage2) {
        nextBtnPage2.addEventListener('click', () => {
            pages[2].classList.add('hidden');
            setTimeout(() => {
                pages[2].style.display = 'none';
                pages[3].classList.remove('hidden');
                pages[3].style.display = 'block';
            }, 500);
        });
    }

    // 7. NAVIGATION: PAGE 3 -> PAGE 4 (Confetti)
    if (toPage4Btn) {
        toPage4Btn.addEventListener('click', () => {
            pages[3].classList.add('hidden');
            setTimeout(() => {
                pages[3].style.display = 'none';
                pages[4].classList.remove('hidden');
                pages[4].style.display = 'block';
                triggerConfetti(); 
            }, 500);
        });
    }

    // 8. CONFETTI FUNCTION
    function triggerConfetti() {
        var end = Date.now() + (5 * 1000);
        var interval = setInterval(function() {
            if (Date.now() > end) return clearInterval(interval);
            confetti({ 
                startVelocity: 30, 
                spread: 360, 
                ticks: 60, 
                zIndex: 1000, 
                origin: { x: Math.random(), y: Math.random() - 0.2 } 
            });
        }, 200);
    }
});