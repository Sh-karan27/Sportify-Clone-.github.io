console.log("welcome to sportify");

//Initializing the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songs = [
    { songName: "Tu Hi Meri Shab Hai", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Labon Ko", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Mat Azama Re", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Kya Mujhe Pyaar Hai", filePath: "song/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Zara Sa", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Dil Ibaadat", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Beete lamhein", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Dil Kyu Ye Mera", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "Zindaigi Do Pal Ki", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
]
let audioElemeent = new Audio('1.mp3');

// audioElemeent.play();
// Handel play/pause click
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    //Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pasue-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay ')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0
    } else {

        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {

        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})