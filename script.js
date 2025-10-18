const themeSwitch = document.getElementById("themeToggle");
const body = document.body;
const modal = document.getElementById('rulesModal');
const showRules = document.getElementById('showRules');
const closeModal = document.getElementById('closeModal');
const closeRulesBtn = document.getElementById('closeRulesBtn');
themeSwitch.addEventListener("change", () => {
  body.setAttribute("data-theme", themeSwitch.checked ? "dark" : "light");
});

// Active nav highlight
const links = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 120;
  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop)
      link.classList.add("active");
    else
      link.classList.remove("active");
  });
});

// Fade-in animation
const fadeEls = document.querySelectorAll(".fade-in");
function revealOnScroll() {
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Tic Tac Toe
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");
let currentPlayer = "X";
let board = Array(9).fill("");
let running = true;
const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function checkWin() {
  for (const [a, b, c] of winPatterns) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusText.textContent = `🎉 Player ${currentPlayer} Wins!`;
      running = false;
      return true;
    }
  }
  if (!board.includes("")) {
    statusText.textContent = "It's a Draw!";
    running = false;
  }
  return false;
}
cells.forEach((cell, i) => {
  cell.addEventListener("click", () => {
    if (!running || board[i]) return;
    board[i] = currentPlayer;
    cell.textContent = currentPlayer;
    if (!checkWin()) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
  });
});
resetBtn.addEventListener("click", () => {
  board.fill("");
  cells.forEach(c => c.textContent = "");
  currentPlayer = "X";
  running = true;
  statusText.textContent = "Player X's turn";
});

showRules.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
closeRulesBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});


const carousel = document.querySelector('.experience-carousel');
document.querySelector('.next').onclick = () =>
  carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
document.querySelector('.prev').onclick = () =>
  carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });


function getRandomPastelColor() {
  const r = Math.floor((Math.random() * 127) + 128); // 128-255
  const g = Math.floor((Math.random() * 127) + 128);
  const b = Math.floor((Math.random() * 127) + 128);
  return `rgba(${r}, ${g}, ${b}, 0.2)`; // background color
}

function getRandomBorderColor() {
  const r = Math.floor((Math.random() * 127) + 128);
  const g = Math.floor((Math.random() * 127) + 128);
  const b = Math.floor((Math.random() * 127) + 128);
  return `rgba(${r}, ${g}, ${b}, 0.4)`; // border color
}

// Apply random colors to each skill card
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

// Toggle menu open/close on hamburger click
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event from bubbling to document
  if (mobileNav.style.display === "flex") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "flex";
  }
});

// Close the menu when a nav link is clicked
document.querySelectorAll("#mobileNav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.style.display = "none";
  });
});

// Close the menu if clicked outside of the menu and hamburger
document.addEventListener("click", (e) => {
  const isClickInsideNav = mobileNav.contains(e.target);
  const isClickOnHamburger = menuToggle.contains(e.target);

  if (!isClickInsideNav && !isClickOnHamburger) {
    mobileNav.style.display = "none";
  }
});

