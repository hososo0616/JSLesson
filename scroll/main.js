const child = document.querySelector('.child');

const cb = function(entries, observer) {
  // alert('hello');
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('in view');
      entry.target.classList.add('inview');
      // observer.unobserve(entry.target);
    }
    else{
      console.log('out view');
      entry.target.classList.remove('inivew');
    }
  });
}

const options = {
  root: null,
  rootMargin: "-300px 0px 0px 0px",
  threshold: 0
}

const io = new IntersectionObserver(cb, options);
io.observe(child);