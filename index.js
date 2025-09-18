// =====================
// Typing Effect for Stacked Subtitle
// =====================

// Roles to display
const roles = [
    "• Frontend Developer",
    "• Full-Stack Developer",
    "• Software Engineer",
    "• UI/UX Designer"
];

// Select each <p> inside .subtitle
const subtitlePs = document.querySelectorAll(".subtitle p");

let roleIndex = 0;
let charIndex = 0;

function type() {
    const currentP = subtitlePs[roleIndex];

    if (charIndex < roles[roleIndex].length) {
        currentP.textContent += roles[roleIndex][charIndex];
        charIndex++;
        setTimeout(type, 100); // typing speed
    } else {
        // Wait a moment before moving to next role
        setTimeout(() => {
            charIndex = 0;
            roleIndex = (roleIndex + 1) % roles.length;

            // Clear next <p> before typing
            subtitlePs[roleIndex].textContent = "";
            type();
        }, 1000); // pause after each role
    }
}

// Start typing
type();



// =====================
// Hero Canvas Particles (Neutral 3D vibe)
// =====================

const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particles = [];
const colors = ["#a67c52", "#d4b59c", "#c8a87c"];

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 20 + 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.2;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x - this.radius > canvas.width) this.x = -this.radius;
        if (this.x + this.radius < 0) this.x = canvas.width + this.radius;
        if (this.y - this.radius > canvas.height) this.y = -this.radius;
        if (this.y + this.radius < 0) this.y = canvas.height + this.radius;
    }
}

// Create 50 particles
for (let i = 0; i < 50; i++) particles.push(new Particle());

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

animate();

