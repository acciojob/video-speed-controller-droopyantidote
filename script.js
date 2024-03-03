const player = document.querySelector('.player__video');
const progress = document.querySelector('.progress__filled');
const toggle = document.querySelector('.player__button');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

function togglePlay() {
  if (player.paused) {
    player.play();
    toggle.textContent = '❚ ❚';
  } else {
    player.pause();
    toggle.textContent = '►';
  }
}

function skip() {
  player.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  player[this.name] = this.value;
}

function handleProgress() {
  const percent = (player.currentTime / player.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
  player.currentTime = scrubTime;
}

toggle.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
