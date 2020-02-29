import "@babel/polyfill";
import { createPlaylist } from "../playlist/playlist";
import { setPlaylistData } from "../playlistData/playlistdata";

export default async function getResponse() {
  let id = 395844;
  let response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem"
  );
  let content = await response.json();
  // console.log(content);

  setPlaylistData(content);
}

getResponse();
