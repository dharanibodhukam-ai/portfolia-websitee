// Header animation
gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 1
});

// Typing effect
const text = "Hi, I'm Dharani 👋";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1
      });
    }
  });
});

// Initial hidden state
gsap.set(".reveal", {
  opacity: 0,
  y: 50
});
