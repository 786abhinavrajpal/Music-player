
let songName=document.querySelector("#song-name")
let songSinger=document.querySelector("#song-singer")
let songImg=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause")
let volumerange=document.querySelector("#volume-range")
let songrange=document.querySelector("#song-duration")
let volSvg=document.querySelector("#vol-svg")
let musicAnim=document.querySelector("#musicanim")
let playlistImg=document.querySelector("#playlsit-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")
let index=0;
let palyingSong=false;
let track=document.createElement("audio");
let songs=[
    {
        name:"Mortals",
        path:"songs/1.mp3",
        image:"covers/1.jpg",
        singer:"Warriyo"
    },
    {
        name:" wgft feat. ",
        path:"songs/2.mp3",
        image:"covers/2.jpg",
        singer:" Burna boy"
    },
    {
        name:"Invincible",
        path:"songs/3.mp3",
        image:"covers/3.jpg",
        singer:"Deaf kev"
    },
    {
        name:"My Heart",
        path:"songs/4.mp3",
        image:"covers/4.jpg",
        singer:"Different Heaven & Eh!de"
    },
    {
        name:"Heroes Tonight",
        path:"songs/songs/5.mp3",
        image:"covers/5.jpg",
        singer:"Janji & Johning"
    },
    {
        name:"Kalyani",
        path:"songs/6.mp3",
        image:"6.jpg",
        singer:"ARJN, KDS,"
    },
    {
        name:"Beedi",
        path:"songs/7.mp3",
        image:"covers/7.jpg",
        singer:"Vishal Bhardwai"
    },
    {
        name:"Naal Nachna",
        path:"songs/8.mp3",
        image:"covers/8.jpg",
        singer:"Afsana khan,Reble"
    },
    {
        name:"AZUL",
        path:"songs/9.mp3",
        image:"covers/9.jpg",
        singer:"Guru Randhawa"
    },
    {
        name:"Bairi",
        path:"songs/10.mp3",
        image:"covers/10.jpg",
        singer:"Virat , Pradeepm Solanki"
    },
    {
        name:"Bairi-2",
        path:"songs/11.mp3",
        image:"covers/11.jpg",
        singer:"Virat , Pradeepm Solanki"
    }
]
track.load()
volume()
duration()

setInterval(()=>{
songrange.max=track.duration
songrange.value=track.currentTime
},1000)
track.loop=true
loadTrack(index);
function loadTrack(index) {
    track.src = songs[index].path;
    songName.innerHTML = songs[index].name;
    songSinger.innerHTML = songs[index].singer;
    songImg.style = `background-image: url("${songs[index].image}");`;
}


function playPause(){
    if(palyingSong==false){
        playSong()
        
    }else{
        pauseSong()
        
    }
}
function playSong(){
    track.play();
    palyingSong=true;
    playPauseImg.src="icon/pause.svg";
    musicAnim.style.display="block"
}
function pauseSong(){
    track.pause();
    palyingSong=false;
    playPauseImg.src="icon/play.svg";
    musicAnim.style.display="none"
}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index);
        playSOng()
    }else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index);
        playSong()
    }else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}
function volume(){
    track.volume=volumerange.value/100
    if(volumerange.value==0){
        volSvg.src="icon/mute.svg"

    }else{
        volSvg.scr="icon/volume.svg"
    }

}
function duration(){
    track.currentTime=songrange.value

}
playlistImg.addEventListener("click",()=>{
    playlist.classList.toggle("playlist-active")
    if(playlist.classList.contains("playlist-active")){
        playlistImg.src="icon/cross.svg"
    }else{
        playlistImg.src="icon/playlist.svg"

    }
})
playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        loadTrack(index);
        playSong()
        playlist.classList.remove("playlist-active")
        playlistImg.src="icon/playlist.svg"


    })
})