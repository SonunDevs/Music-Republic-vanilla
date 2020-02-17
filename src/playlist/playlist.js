import { playlist } from "../player/playlistdata";

let list = document.querySelector(".playlist");

window.addEventListener("load", () => createPlaylist(playlist));

function createPlaylist(data) {
  data.forEach(element => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let i = document.createElement("i");
    let div2 = document.createElement("div");

    img.alt = element.song;
    img.src = element.artwork;
    h4.innerHTML = element.song;
    h5.innerHTML = element.artist;
    div2.className = "backdrop";
    i.className = "far fa-play-circle";
    div.className = "list_artwork";
    h4.className = "song_name";
    h5.className = "artist_name";
    li.setAttribute("data-mp3", element.mp3);
    div2.append(i);
    div.append(div2, img);
    li.append(div);
    li.append(h4);
    li.append(h5);

    list.append(li);
  });
}

{
  /* <li>
<div class="artwork"></div>
<h4 class="song_name"></h4>
<h5 class="artist_name"></h5>
<p class="music_duration"></p>
</li> */
}
