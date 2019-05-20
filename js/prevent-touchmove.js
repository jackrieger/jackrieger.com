// Prevent scrolling or zooming on iOS.

// Wrapper must have size set in CSS. This becomes a bit 
// complicated by the viewport problem in mobile Safari. 
// Make sure the wrapper is >= 100 vw and vh or you will 
// still come across some areas that scroll.

const prevent = function (e) {
  e.preventDefault();
}

document.body.addEventListener('touchmove', prevent, {passive: false});

// If `wrapper` exists as a variable already and I made 
// the program, it is safe to assume it is a declared DOM
// element. Otherwise, check if a 'wrapper' div exists in 
// the HTML. If if does, declare it and add the listener.
// If no 'wrapper' div exists, do nothing.

if (typeof wrapper !== 'undefined') {
  wrapper.addEventListener('touchmove', prevent, {passive: false});
} else if (document.body.contains(document.getElementById('wrapper'))) {
  const wrapper = document.getElementById('wrapper');
  wrapper.addEventListener('touchmove', prevent, {passive: false});
}