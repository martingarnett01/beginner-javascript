const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('It got clicked!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);
coolButton.removeEventListener('click', hooray);

// Listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('Buying item...');
}

buyButtons.forEach(buyButton => {
  //   console.log(buyButton);
  buyButton.addEventListener('click', buyItem);
});
