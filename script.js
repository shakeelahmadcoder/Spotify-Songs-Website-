// Intitliazing the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let previous = document.getElementById('previous')
let next = document.getElementById('next')
let masterSongName = document.getElementsByClassName('masterSongName')[0];
let songs = [
    {songName: "Salam-e-Ishq ishq me boriyat hy | Beprak", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "O sanam Ishq karan safa asana aa | Unknown Singer", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Arjit sing ki badmashi | full song", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Jhatpat k road me barsat | road na naali jiye Jamali", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Jalala Chandio ki life me love | Love by Jalal ", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "to parhai kar beta tujhy aage jana hy | Sheikh atif", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ghareeb ko ata ni skill do | Rehan Allah wala", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ameer ki madad karo wo b kabhi ghareeb tha | Shakeel Ahmed", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Beta bagh bana lo ye titlian khud tumhare pas aae ge | Shakeel", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "rugo ishq na kayo chora thori mehnat b kaho | Sithoo", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
// Chaning Image and songs Name 
songItem.forEach((element, i)=>{
element.getElementsByTagName('img')[0].src = songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

//Handle Play Pause 
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.src = "pause.png"
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.src = "play.png";
        gif.style.opacity = 0;
    }
})

// Update Progress bar 
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

// Change my progress 
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllaPlays = () =>{
   songItemPlay.forEach((element)=>{
       element.src = "play.png"
   })
}
// acces all songs 
songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(audioElement.paused || audioElement.currentTime <=0){
            makeAllaPlays();
            songIndex = parseInt(e.target.id);
            audioElement.src = `songs/${songIndex + 1}.mp3`
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            e.target.src = "pause.png"
            gif.style.opacity = 1;
            masterPlay.src = "pause.png"
        }
        else{
            audioElement.pause();
            e.target.src = "play.png"
            masterPlay.src = "play.png"
            gif.style.opacity = 0;
        }
    })
});


// Previous and Next 
previous.addEventListener('click', ()=>{
    if (songIndex >=9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = "pause.png"
})

next.addEventListener('click', ()=>{
    if (songIndex <=0){
        songIndex <= 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = "pause.png"
})

