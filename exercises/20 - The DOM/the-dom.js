// // const p = document.querySelector('p');
// // const div = document.querySelectorAll('div');
// // console.log(div);

// const heading = document.querySelector('h2');

// // heading.textContent = 'Marting Rocks';

// // console.log(heading.textContent);
// // console.log(heading.innerText);
// // console.log(heading.innerHTML);
// // console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// function addPizzas(numberOfPizzas = 1) {
//   let pizzas = '';
//   for (i = 0; i < numberOfPizzas; i++) {
//     pizzas = `${pizzas} 🍕`;
//   }
//   return pizzas;
// }

// // pizzaList.textContent = `${pizzaList.textContent} ${addPizzas()}`;

// function insertExtraPizzas(numberOfPizzas) {
//   pizzaList.insertAdjacentText('beforeend', addPizzas(numberOfPizzas));
// }

// Classes!

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('open');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'A random image';
pic.width = 200;

console.log(pic.src);
pic.addEventListener('load', function() {
  console.log(pic.title);
});

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name}`);
});
