const textElement = document.getElementById("text");
const phrases = ["Developer ", "Programmer","Self-learner"];
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
