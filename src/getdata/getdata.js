import "@babel/polyfill";

export default async function getResponse() {
  const CORS = "https://cors-anywhere.herokuapp.com/";
const endpoint = CORS + "https://api.deezer.com/playlist/1274663331/tracks";
const songsList = [];
//const searchInput = document.querySelector('.search');
const musicList = document.querySelector("ul.playlist");
//const emojiPattern = Array.from(document.querySelectorAll('.emoji-pattern'));
Fetch();
function Fetch() {
  fetch(endpoint, {
    method: "GET",

    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(resp => resp.json())
    .then(list => {
      songsList.push(...list.data);
      console.log(list);
    })
    .then(data => {
      renderMatches(songsList);
      addListeners(songsList);
      //console.log(...songsList);
    });
}
function convertSecondsToMinutosAndSeconds(value) {
  return (
    Math.floor(value / 60) +
    ":" +
    (value % 60 <= 9 ? "0" : "") +
    (value % 60 ? value % 60 : "00")
  );
}
function findMatches(wordToMatch, songsList) {
  return songsList.filter(emoji =>
    emoji.aliases.some(alias => alias.indexOf(wordToMatch) !== -1)
  );
}
function renderMatches(arr) {
  //console.log('=> '+arr2[1]);
  musicList.innerHTML = `
  <li><div class="list_artwork">
  <div class="list_backdrop">
  <i class="far fa-play-circle" aria-hidden="false">
  </i></div>
  <img alt="Forever" src="#">
  </div>
  <h4 class="song_name">song name</h4>
  <h5 class="artist_name">artist name</h5></li>`;
  let i = 0;
  const html = arr
    .map(song => {
      const { title, duration } = song;
      //console.log(song);
      i++;
      song.duration = convertSecondsToMinutosAndSeconds(song.duration);
      
      return `
      <li><div class="list_artwork">
      <div class="list_backdrop" data-mp3="${song.link}">
      <i class="far fa-play-circle"></i>
      </div>
      <img alt="Forever" src="${song.album.cover_big}">
      </div>
      <h4 class="song_name">${song.title}</h4>
      <h5 class="artist_name">${song.artist.name}</h5></li>`
    })
    .join("");
  musicList.innerHTML += html;
}

function updateMatches() {
  const matchArray = findMatches(this.value, songsList);
  renderMatches(matchArray);
}

function changeBackground(e) {
  if (!e.target.matches("abbr")) return;
  const emoj = e.target.innerText;
  emojiPattern.map(pattern => (pattern.textContent = emoj));
}
/*
searchInput.addEventListener('change', updateMatches);
searchInput.addEventListener('keyup', updateMatches);
suggestions.addEventListener('click', changeBackground);*/
let songLi = document.getElementsByClassName('li');
function activeCurrentSong(){
  let music = document.querySelectorAll("ul.music-list .li");
  music=[...music];
  /*$('ul li').click(function(){
        $('li').removeClass("active");
        $(this).addClass("active");
      });*/
  for(let i =0 ; i<music.length;i++){
    //music[i].style.color="#666666";
    
    
    music[i].addEventListener("click", function() {
      //this.style.color="rgba(255, 127, 20, 0.6)";
      this.classList.add("active");
      
    });
    //music[i].fontWeight="normal";
    music[i].classList.remove("active");
    
  }
}
function addListeners(songs) {
  //console.log(songs[0]);
  let audio = document.querySelector("#player");
  let play = document.querySelector("#playPause");
  
  for (let i = 0; i < songs.length; i++) {
    play.addEventListener("click", function() {
       
      if (!audio.paused) {
       // audio.pause();

        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
      } else {
        audio.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
      }
    });
   
    
    //songLi.style.color="red";
    document.getElementById(songs[i].id).addEventListener("click", function() {
      //console.log(this.getAttribute('data-title'));
      
      //songLi.style.color="red";
      const poster = document.querySelector("#poster");
      const posterD = document.querySelector("#posterD");
      const songD = document.querySelector("#songD");
      audio.src = this.getAttribute("data-songmp3");
      
      //activeCurrentSong();
      //this.style.color='rgba(255, 127, 20, 0.6)';
      //this.style.fontWeight='bold';
      const artistD = document.querySelector("#artistD");
      poster.src = this.getAttribute("data-image");
      posterD.src = this.getAttribute("data-image");
      songD.innerHTML = this.getAttribute("data-title");
      artistD.innerHTML = this.getAttribute("data-artist");

      //audio.play();
    });
    
  }
  
  
}
}

getResponse()