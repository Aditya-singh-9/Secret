// Changing gif while hovering on a button
const img = document.getElementById('image');

const images = {
    depressed: '../Assets/attitude.gif',
    ori: "../Assets/angry.gif"
};

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
}

// Background class on hover
var body = document.body;

function bg() {
    body.className = 'noo';
}

function resetBG() {
    body.className = '';
}

// Rising bubbles background
function lines() {
    let sizeW = Math.random() * 12;
    let duration = Math.random() * 3;
    let e = document.createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2 * sizeW + 'px';
    e.style.left = Math.random() * window.innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';
    setTimeout(function() {
        if (e.parentNode) {
            document.body.removeChild(e);
        }
    }, 4000);
}

setInterval(lines, 200);

// Escaping Button Logic
window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('yes');

    function moveButton(event) {
        if (event) {
            event.preventDefault();
        }
        
        // Calculate max boundaries based on viewport size minus button dimensions
        const margin = 20;
        const maxWidth = window.innerWidth - button.offsetWidth - margin;
        const maxHeight = window.innerHeight - button.offsetHeight - margin;

        // Generate random coordinates within viewport bounds
        const randomX = Math.max(margin, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(margin, Math.floor(Math.random() * maxHeight));

        // Use fixed positioning to bypass parent containers
        button.style.position = 'fixed';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    }

    // Attach listeners for mouse hover, clicks, and touches
    button.addEventListener('mouseover', moveButton);
    button.addEventListener('click', moveButton);
    button.addEventListener('touchstart', moveButton);
});

// Linking to the success page
function noFunction() {
    window.location.href = "../Page 5/yes.html";
}