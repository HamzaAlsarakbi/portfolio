/**
 * Creates a realistic typing animation
 * @param { HTMLElement } e element to be animated
 * @param { String } text final text in the element
 */
function animate(e, text) {
  let subText = "";
  let curIndex = 0;
  let interval;
  // Animate the characters being typed into the browser
  interval = setInterval(() => {
    if (curIndex < text.length) {
      subText += text.charAt(curIndex++);
      e.textContent = subText;
    } else {
      clearInterval(interval);
      // Animate all the paragraphs
      setTimeout(() => {
        drawInElements.push(
          {
            time: 150,
            elements: [
              document.querySelector("h1#name"),
              document.querySelector("p.indented#s1-p1"),
              document.querySelector("p.indented#s1-p2"),
              document.querySelector("p.indented#s1-p3"),
              document.querySelector("p.indented#s1-p4"),
              document.querySelector("p.indented#s1-p5"),
              document.querySelector("img.iconography#ball")
            ]
          }
        );
        animateIfInView();
      }, 200);
    }
  }, Math.max(Math.random() * 200, 100));
}
/**
 * Checks if an element is in the viewport.
 * @param { HTMLElement } element element to be checked
 * @returns true if the element is in the viewport, false otherwise
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}