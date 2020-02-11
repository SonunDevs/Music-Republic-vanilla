import "./styles.css";
import "./player/player";
import axios from "./axios/axios";

document.documentElement.addEventListener("click", () => {
  axios
    .get("/playlist.json")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});
