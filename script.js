function openGmailCompose() {
  window.open(
    "https://mail.google.com/mail/?view=cm&to=phaneendra3377@gmail.com","_blank"
  );
} 
// nav bar toggle feature
const togglebtn = document.querySelector(".toggle-button");
const togglebtnIcon = document.querySelector(".toggle-button i");
const dropdownMenu = document.querySelector(".dropdown-menu");
togglebtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  togglebtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
// Text changing aimation
const textElement = document.getElementById("text");
const phrases = ["Developer ", "Programmer", "Self-Learner"];
let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;

function typeText() {
  const currentPhrase = phrases[currentPhraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(
      0,
      currentCharacterIndex - 1
    );
    currentCharacterIndex--;

    if (currentCharacterIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  } else {
    textElement.textContent = currentPhrase.substring(
      0,
      currentCharacterIndex + 1
    );
    currentCharacterIndex++;

    if (currentCharacterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeText, 1500);
      return;
    }
  }

  setTimeout(typeText, 100);
}

typeText();

// theme change conditions

let theme = localStorage.getItem("theme");

let themeDots = document.getElementsByClassName("theme-dot");

if (theme == null) {
  setTheme("blue");
} else {
  setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Mode: ", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "dark") {
    document.getElementById("theme-style").href = "./css/body.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "css/blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "css/green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "css/purple.css";
  }

  localStorage.setItem("theme", mode);
}

src = "https://smtpjs.com/v3/smtp.js" > function sendEmail() {
  
};