// Make a div
const wrapper = document.createElement('div');

// add a class of wrapper to it

wrapper.classList.add('wrapper');

// put it into the body

const body = document.querySelector('body');
body.appendChild(wrapper);

// make an unordered list
const myList = document.createElement('ul');

<<<<<<< Updated upstream
// add three list items with the words "one, two, three" in them
=======
// add three list items with the words "one, two three" in them
const myListItems = {
  0: 'One',
  1: 'Two',
  2: 'Three',
};

(function createListElement() {
  const numberOfListItems = Object.keys(myListItems).length;
  for (let i = 0; i < numberOfListItems; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = myListItems[i];
    myList.appendChild(listItem);
  }
})();

>>>>>>> Stashed changes
// put that list into the above wrapper
wrapper.appendChild(myList);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://picsum.photos/500';

// set the width to 250
myImage.width = 250;

// add a class of cute
myImage.classList.add('cute');

// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';

// Append that image to the wrapper
wrapper.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const secondDiv = `
  <div class="myDiv">
    <p>This is my first paragraph.</p>
    <p>This is my second paragraph.</p>
  </div>
`;

// put this div before the unordered list from above
const ulElement = wrapper.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin', secondDiv);

// add a class to the second paragraph called warning
const secondP = wrapper.querySelector('.myDiv').children[1];
secondP.classList.add('warning');

// remove the first paragraph
const firstP = wrapper.querySelector('.myDiv').firstElementChild;
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function convertToDogYears(age) {
  return age * 7;
}

function generatePlayerCard(name, age, height) {
  return `
        <div class="playerCard">
            <h2>${name} – ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years, this person would be ${convertToDogYears(
    age
  )}. That would be a tall dog!</p>
  <button class="remove-button" type="button">Remove</button>
        </div>
    `;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

<<<<<<< Updated upstream
// make 4 player cards using generatePlayerCard

=======
// Have that function make 4 cards
>>>>>>> Stashed changes
// append those cards to the div
(function createAllCards() {
  cards.insertAdjacentHTML(
    'beforeend',
    generatePlayerCard('Martin1', 17, '5 ft 7')
  );
  cards.insertAdjacentHTML(
    'beforeend',
    generatePlayerCard('Martin2', 28, '6 ft 8')
  );
  cards.insertAdjacentHTML(
    'beforeend',
    generatePlayerCard('Martin3', 38, '7 ft 9')
  );
  cards.insertAdjacentHTML(
    'beforeend',
    generatePlayerCard('Martin4', 48, '8 ft 10')
  );
})();

// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const removeButtons = document.querySelectorAll('.remove-button');

// make out delete function
function removeCard() {
  this.closest('.playerCard').remove();
}
// loop over them and attach a listener

for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', removeCard);
}
