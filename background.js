/*
 *  simpel baggeround for 95Windows
 *  i never want to write in js ever again
 *  <3
 */

const chars = ["+", "-", "*", "/", "9", "5", "w", "i", "n", "d", "o", "s", "x", "(", "[", "{", "}", "]", ")"];
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
window.SymbolColor = "#070707";

let dpr = window.devicePixelRatio || 1;

function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resize();
window.addEventListener("resize", resize);

class P {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * innerWidth;
        this.y = Math.random() * innerHeight;
        this.vx = (Math.random() - 0.5) * 100;
        this.vy = (Math.random() - 0.5) * 100;
        this.char = chars[Math.floor(Math.random() * chars.length)];
        this.size = 20 + Math.random() * 10;
        this.a = 0.3 + Math.random() * 0.4;
    }
    update(dt) {
        this.x += this.vx * dt;
        this.y += this.vy * dt;

        this.a -= 0.001 * dt * 60;

        if (
            this.a < 0.1 ||
            this.x < -50 ||
            this.x > innerWidth + 50 ||
            this.y < -50 ||
            this.y > innerHeight + 50
        ) {
            this.reset();
            const e = Math.floor(Math.random() * 4);
            if (e == 0) {
                this.x = -20;
                this.y = Math.random() * innerHeight;
            }
            if (e == 1) {
                this.x = innerWidth + 20;
                this.y = Math.random() * innerHeight;
            }
            if (e == 2) {
                this.y = -20;
                this.x = Math.random() * innerWidth;
            }
            if (e == 3) {
                this.y = innerHeight + 20;
                this.x = Math.random() * innerWidth;
            }
        }
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.a;
        ctx.font = `900 ${this.size}px Inter, monospace`;
        ctx.fillStyle = window.SymbolColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.char, this.x, this.y);
        ctx.restore();
    }
}

const particles = [];
const count = 100;

for (let i = 0; i < count; i++) {
    particles.push(new P());
}

let last = performance.now();

function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    for (const p of particles) {
        p.update(dt);
        p.draw();
    }

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

