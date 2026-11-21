/* =====================================================
   whoami — Chogea Xavier
   Boot typing + matrix rain + misc
   ===================================================== */

/* ---------- Boot typing sequence ---------- */
const bootText = 'chogea@whoami:~$ whoami --init';
const typedEl = document.getElementById('typed');
const bootEl = document.getElementById('boot');
const mainEl = document.getElementById('main');
const enterBtn = document.getElementById('enter');

let i = 0;
function typeBoot() {
  if (i < bootText.length) {
    typedEl.textContent += bootText.charAt(i);
    i++;
    setTimeout(typeBoot, 55);
  } else {
    enterBtn.hidden = false;
  }
}
typeBoot();

function enterSite() {
  bootEl.classList.add('hide');
  mainEl.classList.remove('hidden');
  setTimeout(() => bootEl.remove(), 700);
}

enterBtn.addEventListener('click', enterSite);
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && !enterBtn.hidden) {
    e.preventDefault();
    enterSite();
  }
});

/* ---------- Matrix rain ---------- */
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]/\\$#@!';
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

window.addEventListener('resize', () => {
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

function drawMatrix() {
  ctx.fillStyle = 'rgba(5, 8, 12, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ff9c';
  ctx.font = fontSize + 'px monospace';

  for (let k = 0; k < drops.length; k++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, k * fontSize, drops[k] * fontSize);
    if (drops[k] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[k] = 0;
    }
    drops[k]++;
  }
}
setInterval(drawMatrix, 50);

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
