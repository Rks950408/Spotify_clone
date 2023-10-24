console.log('Welcome to Spotify')
let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
let play = document.getElementById('play');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');
let masterPlayTitle = document.getElementById('masterPlayTitle');

let songItem =Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName:"MoneyTrees",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"All the Stars",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"LOVE",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"HUMBLE",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"N95",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Swimming Pools",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Alright",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Loyalty",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
];
   //ASSGNING  COVER IMAGE  AND SONG NAME
    songItem.forEach((element,i)=> {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
})
 
play.addEventListener('click',()=>{
     
    if(audioElement.paused || audioElement<=0){
         audioElement.play();
        
         gif.style.opacity=1;
         play.classList.remove('fa-play-circle');
         play.classList.add('fa-pause-circle');
    }
    else {
          audioElement.pause();
          gif.style.opacity=0;
          play.classList.remove('fa-pause-circle');
          play.classList.add('fa-play-circle');    
    }
});

audioElement.addEventListener('timeupdate',()=>{ 
         //Update SeekBar
         progress = parseFloat((audioElement.currentTime/audioElement.duration)*100);
         myProgressBar.value=progress;
});
   myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime = (myProgressBar.value/100)*audioElement.duration;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songButton')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songButton')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        makeAllPlays();
          
            songIndex =parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src ='songs/'+songIndex+'.mp3';
            masterPlayTitle.innerText = songs[songIndex-1].songName+ "-Kendrick Lamar";
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            play.classList.remove('fa-play-circle');
            play.classList.add('fa-pause-circle');    
     })    
}) 
document.getElementById('previous').addEventListener('click',(f)=>{
       
         if(songIndex <1){
            songIndex = 8;      
         }
         else{
            songIndex--;
         }    
         audioElement.src ='songs/'+songIndex+'.mp3';
         masterPlayTitle.innerText = songs[songIndex-1].songName+ "-Kendrick Lamar";
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity=1;
         makeAllPlays();
})
document.getElementById('next').addEventListener('click',(f)=>{
  
    if(songIndex >=8){
       songIndex = 0;
    }
    else{
        songIndex++;
    }
    audioElement.src ='songs/'+songIndex+'.mp3';
    masterPlayTitle.innerText = songs[songIndex-1].songName+ "-Kendrick Lamar";
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    makeAllPlays();  
})
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
document.getElementById('shuffle').addEventListener('click',(f)=>{
  
     var arr = [1,2,3,4,5,6,7,8];
     const randomIndex = Math.floor(Math.random() * arr.length);
     const result = arr[randomIndex]
    audioElement.src ='songs/'+result+'.mp3';
    masterPlayTitle.innerText = songs[result-1].songName+ "-Kendrick Lamar";
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    makeAllPlays();  
})




