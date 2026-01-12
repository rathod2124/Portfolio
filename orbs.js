const canvas = document.getElementById("orbs");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#4da3ff", "#00ffd5", "#ff4ecd"];
let orbs = [];

for (let i = 0; i < 15; i++) {
    orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 60 + 20,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    orbs.forEach(o => {
        const gradient = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        gradient.addColorStop(0, o.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
        o.x += o.dx;
        o.y += o.dy;
        if (o.x < 0 || o.x > canvas.width) o.dx *= -1;
        if (o.y < 0 || o.y > canvas.height) o.dy *= -1;
    });
    requestAnimationFrame(animate);
}

animate();
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});