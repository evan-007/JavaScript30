const keysWithSounds = [65, 83, 68, 70, 71, 72, 74, 75, 76];

document.addEventListener('keydown', playSound);

function playSound(event) {
  event.preventDefault();
  let key = event.keyCode;
  if (!keysWithSounds.includes(key)) { return; }

  const keyElem = document.querySelector(`[data-key="${key}"]`);
  const audioFile = keyElem.querySelector('span').innerText.toLowerCase();
  new Audio(`./sounds/${audioFile}.wav`).play();

  keyElem.classList.toggle('playing');
  setTimeout(() => {
    keyElem.classList.toggle('playing');
  }, 50);
}
