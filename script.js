// 🎀 Floating hearts animation
document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.querySelector(".hearts");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 4 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 500);
});
