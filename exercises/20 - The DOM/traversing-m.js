const martin = document.querySelector('.martin');

// console.log(martin.children);
// console.log(martin.firstElementChild);
// console.log(martin.lastElementChild);
// console.log(martin.previousElementSibling);
// console.log(martin.nextElementSibling);
// console.log(martin.parentElement);
// console.log(martin.childNodes);

const p = document.createElement('p');
p.textContent = 'I will be removed';

document.body.appendChild(p);

p.remove();

console.log(p);
