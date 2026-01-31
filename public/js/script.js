// --- CONFIG ---
const answersNo = [
  "No",
  "Are you sure?",
  "Are you really sure??",
  "Are you really really sure???",
  "Think again?",
  "Don't believe in second chances?",
  "Why are you being so cold?",
  "Maybe we can talk about it?",
  "I am not going to ask again!",
  "Ok now this is hurting my feelings!",
  "You are now just being mean!",
  "Why are you doing this to me?",
  "Please give me a chance!",
  "I am begging you to stop!",
  "Ok, let's just start over.."
];

const YES_TEXT = "Yes";

// --- STATE ---
let noClickIndex = 1;
let yesButtonSize = 50;
let noClickCount = 0;

// --- ELEMENTS ---
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const banner = document.getElementById("banner");
const buttonsContainer = document.getElementsByClassName("buttons")[0];
const messageContainer = document.getElementsByClassName("message")[0];

// --- HELPERS ---
function refreshBanner() {
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}

// --- NO BUTTON LOGIC ---
noButton.addEventListener("click", () => {
  // First click: switch banner
  if (noClickCount === 0) {
    banner.src = "public/images/no.gif";
    refreshBanner();
  }

  noClickCount++;

  // Grow YES button
  const increments = [30, 40, 50];
  yesButtonSize += increments[Math.floor(Math.random() * increments.length)];
  yesButton.style.height = `${yesButtonSize}px`;
  yesButton.style.width = `${yesButtonSize}px`;

  // Cycle NO text
  if (noClickIndex < answersNo.length) {
    noButton.innerText = answersNo[noClickIndex];
    noClickIndex++;
  } else {
    // Reset cycle
    alert(answersNo[answersNo.length - 1]);
    noClickIndex = 1;
    noButton.innerText = answersNo[0];
    yesButton.innerText = YES_TEXT;
    yesButtonSize = 50;
    yesButton.style.height = "50px";
    yesButton.style.width = "50px";
  }
});

// --- YES BUTTON LOGIC ---
yesButton.addEventListener("click", () => {
  banner.src = "public/images/yes.gif";
  refreshBanner();

  buttonsContainer.style.display = "none";
  messageContainer.style.display = "block";
});
