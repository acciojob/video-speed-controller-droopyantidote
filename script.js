const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');
const progressBar = document.getElementById('progressBar');
const volume = document.getElementById('volume');
const playbackSpeed = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');

// Update progress bar
video.addEventListener('timeupdate', () => {
  progressBar.value = video.currentTime / video.duration;
});

// Play/pause toggle
playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = '►';
  } else {
    video.pause();
    playButton.textContent = '❚ ❚';
  }
});

// Volume control
volume.addEventListener('change', () => {
  video.volume = volume.value;
});

// Playback speed control
playbackSpeed.addEventListener('change', () => {
  video.playbackRate = playbackSpeed.value;
});

// Rewind button
rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
});

// Forward button
forwardButton.addEventListener('click', () => {
  video.currentTime += 25;
});