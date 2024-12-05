const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const audio = document.getElementById("rickroll");

// Change text, play sound, and show Rickroll gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Claro que me amas!! Soy increíble! Te amo mucho mas!";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRnbXYycXQ5ZGt2enMzYWRscmp6NDZvdjFtNXpwM29heHFqN2s3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8FbmKNAAw92tW/giphy.gif";
  audio.play();
});

// Move the No button randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to keep button inside wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
