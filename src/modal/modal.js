let backdropState = false;
let btnLogin = document.querySelector("#login");
let btnSignup = document.querySelector("#signup");
let linkLogin = document.querySelector(".link_login");
let linkSignup = document.querySelector(".link_signup");
let backdrop = document.querySelector(".backdrop");
let login = document.querySelector(".modal_win_login");
let signup = document.querySelector(".modal_win_signup");
let modalWinsLogin = document.querySelector(".modal_win_login");
let modalWinsSignup = document.querySelector(".modal_win_signup");

btnLogin.addEventListener("click", function() {
  showingBackdrop();
  showingModals("login");
});

btnSignup.addEventListener("click", function() {
  showingBackdrop();
  showingModals("signup");
});

linkLogin.addEventListener("click", function() {
  showingModals("signup", true);
});

linkSignup.addEventListener("click", function() {
  showingModals("login", true);
});

backdrop.addEventListener("click", event => {
  if (event.target.className == "scroll-win") {
    showingBackdrop();
  }
});

function showingBackdrop() {
  backdropState = !backdropState;

  if (backdropState) {
    backdrop.className = "backdrop active";
  } else {
    backdrop.className = "backdrop";
  }
}

function showingModals(modalWindow, linkClicked) {
  if (backdropState || linkClicked) {
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
