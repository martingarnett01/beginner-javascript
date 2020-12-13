const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Build the div once
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
// Put it on the page together so we don't cause unnecessary re-paints
document.body.insertAdjacentElement('afterbegin', myDiv);

const heading = document.createElement('h1');
heading.textContent = 'I am a heading';

// Creating a list!

const myListElement = document.createElement('ul');

const myListItems = {
  0: 'One',
  1: 'Two',
  2: 'Three',
  3: 'Four',
  4: 'Five',
};

(function buildListElements() {
  // Number of items in our list
  const numberOfListItems = Object.keys(myListItems).length;

  // Add appends each item as a new <li> element to our list element
  for (let i = 0; i < numberOfListItems; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = myListItems[i];
    myListElement.appendChild(listItem);
  }
})();

// Add our list before the image

myImage.insertAdjacentElement('beforebegin', myListElement);

// Add out click eventListener to make it rounded!

const allImages = document.querySelectorAll('img');

console.log(allImages);

allImages.forEach(e => {
  e.addEventListener('click', function() {
    e.classList.toggle('round');
  });
});
