let backdropState = false;
let btnLogin = document.querySelector("#login");
let btnSignup = document.querySelector("#signup");
let backdrop = document.querySelector(".backdrop");
let login = document.querySelector(".modal_win_login");
let signup = document.querySelector(".modal_win_signup");
let modalWinsLogin = document.querySelector(".modal_win_login");
let modalWinsSignup = document.querySelector(".modal_win_signup");

btnLogin.addEventListener("click", function() {
  showingBackdrop();
  showingModals("signup");
});

btnSignup.addEventListener("click", function() {
  showingBackdrop();
  showingModals("login");
});

backdrop.addEventListener("mousedown", showingBackdrop);

function showingBackdrop() {
  backdropState = !backdropState;

  if (backdropState) {
    backdrop.className = "backdrop active";
  } else {
    backdrop.className = "backdrop";
  }
}

function showingModals(modalWindow) {
  if (backdropState) {
    if (modalWindow == "signup") {
      signup.className = "modal_win modal_win_signup active";
      login.className = "modal_win modal_win_login";
    } else if (modalWindow == "login") {
      login.className = "modal_win modal_win_login active";
      signup.className = "modal_win modal_win_signup";
    } else {
      signup.className = "modal_win modal_win_signup";
      login.className = "modal_win modal_win_login";
    }
  }
}
