const close = document.getElementById('close');
const popUp = document.getElementById('popUp');
const modal = document.getElementById('modal');
const submit = document.getElementById('submit');
const faq = document.querySelectorAll('.faq');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

document.addEventListener('scroll', scrollPage);

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

// OPEN (FAQ)
faq.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});


// Modal
popUp.addEventListener('click', () => modal.classList.add('show-modal'));
close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);


// submit.addEventListener('click', () => {
//    
// })