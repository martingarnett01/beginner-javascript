<<<<<<< Updated upstream
=======
function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  const watch = document.querySelector('.watch');
  const button = document.querySelector('.accept');

  if (!terms) {
    return;
  }

  function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      ob.unobserve(terms.lastElementChild);
    }
  }

  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
}

scrollToAccept();
>>>>>>> Stashed changes
