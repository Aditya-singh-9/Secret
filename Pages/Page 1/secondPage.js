// Floating hearts background animation
function hearts() {
    const container = document.body;
    const heart = document.createElement('div');
    heart.classList.add('hearts');
    
    const heartEmojis = ['💓', '💖', '❤️', '💕', '💗'];
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;

    container.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(hearts, 250);

// Typewriter script
const letterText = `Komal,

From the day I met you, life started feeling different.
Your smile, your kindness, your presence — everything about you makes my world brighter.

I don't know what the future holds, but I know one thing for sure...
I want you to be part of my journey.`;

function openLetter() {
    document.getElementById('sealed-content').style.display = 'none';
    document.getElementById('revealed-content').style.display = 'block';
    
    const textContainer = document.getElementById('typewriter-text');
    let index = 0;
    
    function type() {
        if (index < letterText.length) {
            const char = letterText.charAt(index);
            if (char === '\n') {
                textContainer.innerHTML += '<br>';
            } else {
                textContainer.innerHTML += char;
            }
            index++;
            setTimeout(type, 35);
        } else {
            const btnWrapper = document.getElementById('continue-wrapper');
            btnWrapper.style.display = 'block';
            btnWrapper.classList.add('fade-in');
        }
    }
    
    type();
}

// Linking to the next page
function myFunction() {
    window.location.href = "../Page 2/thirdPage.html";
}