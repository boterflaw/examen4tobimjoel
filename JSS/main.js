let isPlaying = false;
let audioPlayer = document.getElementById('audioPlayer');
let circleElement = document.getElementById('circle');

function togglePlayback() {
  if (isPlaying) {
    stopAudio();
  } else {
    playAudio();
  }
}

function playAudio() {
  audioPlayer.play();
  isPlaying = true;
  circleElement.classList.add('playing');
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  isPlaying = false;
  circleElement.classList.remove('playing');
}
