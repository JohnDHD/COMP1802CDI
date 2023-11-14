let audioPlayer = document.getElementById('audioPlayer');
let musicList = document.getElementById('musicList');

function playMusic() {
    audioPlayer.play();
}

function pauseMusic() {
    audioPlayer.pause();
}

function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

function changeMusic() {
    let selectedSong = musicList.options[musicList.selectedIndex].value;
    audioPlayer.src = selectedSong;
}