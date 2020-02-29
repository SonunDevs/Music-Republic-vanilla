export function createPlaylist(playlistData) {
  let list = document.querySelector(".playlist");

  playlistData.map(element => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let i = document.createElement("i");
    let listBackdrop = document.createElement("div");

    img.alt = element.title;
    img.src = element.album.cover;
    h4.innerHTML = element.title;
    h5.innerHTML = element.artist.name;
    listBackdrop.className = "list_backdrop";
    i.className = "far fa-play-circle";
    div.className = "list_artwork";
    h4.className = "song_name";
    h5.className = "artist_name";
    listBackdrop.setAttribute("data-mp3", element.preview);
    listBackdrop.append(i);
    div.append(listBackdrop, img);
    li.append(div);
    li.append(h4);
    li.append(h5);

    list.append(li);
  });
}
