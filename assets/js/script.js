let drawInElements = [
  {
    time: 150,
    elements: [
      document.querySelector(".box#software-development"),
      document.querySelector(".box#project-management"),
      document.querySelector(".box#data-structures"),
      document.querySelector(".box#algorithms"),
      document.querySelector(".box#design"),
    ]
  },
  {
    time: 200,
    elements: [
      // Timeline 1
      document.querySelector(".vertex#timeline-1"),
      document.querySelector(".vertex-edge#timeline-1"),
      document.querySelector(".description#timeline-1"),
      // document.querySelector(".timeline-1#list-1"),
      // document.querySelector(".timeline-1#list-2"),
      // document.querySelector(".timeline-1#list-3"),
      // document.querySelector(".timeline-1#list-4"),
      // document.querySelector(".timeline-1#list-5"),
      // document.querySelector(".timeline-1#list-6"),

      // Timeline 2
      document.querySelector(".vertex#timeline-2"),
      document.querySelector(".vertex-edge#timeline-2"),
      document.querySelector(".description#timeline-2"),
      // document.querySelector(".timeline-2#list-1"),
      // document.querySelector(".timeline-2#list-2"),
      // document.querySelector(".timeline-2#list-3"),

      // Timeline 3
      document.querySelector(".vertex#timeline-3"),
      document.querySelector(".vertex-edge#timeline-3"),
      document.querySelector(".description#timeline-3"),
      // document.querySelector(".timeline-3#list-1"),
      // document.querySelector(".timeline-3#list-2"),
      // document.querySelector(".timeline-3#list-3"),

      // Timeline 4
      // Timeline 3
      document.querySelector(".vertex#timeline-4"),
      document.querySelector(".description#timeline-4"),
    ]
  },
  {
    time: 150,
    elements: [
      document.querySelector(".icon#github"),
      document.querySelector(".icon#linkedin"),
      // document.querySelector(".icon#blog")
    ]
  }
]

function init() {
  animate(document.querySelector('.animatable'), 'Hi, I am')

  document.onscroll = animateIfInView;

  animateIfInView();
}

function animateIfInView() {
  let time = 0;
  for (let elementsObj of drawInElements) {
    if (isInViewport(elementsObj.elements[0])) {
      // remove elements collection
      delete drawInElements.elementsObj;
      let elements = elementsObj.elements;
      // console.log(elementsObj);
      // animate each child element
      for (let i = 0; i < elements.length; i++) {
        setTimeout(() => {
          let element = elements[i];
          element.classList.add("draw-in");
        }, time);
        time += elementsObj.time;
      }
    }
  }
}