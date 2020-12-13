// Get our elements on the page
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Some settings
const MOVE_AMOUNT = 16;

// Setup our canvas for drawing
// Make a variable called width and another called height from the same properties on our canvas.
const { width, height } = canvas;

// Create random X and Y starting points on the canvas.
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
  console.log(key);
  // Start the path
  hue += 5;
  ctx.beginPath();
  ctx.moveTo(x, y);
  // Move our X and Y position based on what the user pressed...
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys
function handleKeys(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// Clear the screen with a shake!
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath(); // Start the drawing
  ctx.moveTo(x, y);
  ctx.lineTo(x, y);
  ctx.stroke();
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// Write our event listeners
window.addEventListener('keydown', handleKeys);
shakeButton.addEventListener('click', clearCanvas);
