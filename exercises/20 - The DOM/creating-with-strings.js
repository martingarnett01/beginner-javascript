const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const description = 'Random Photo';
const myHTML = `
    <div class="wrapper">
        <h2>${description}</h2>
        <img src="${src}" alt="${description}">
    </div>
`;

// turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
