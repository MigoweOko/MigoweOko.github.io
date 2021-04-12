let container = document.querySelector(".menubar");
let hamburger_menu = document.querySelector(".hamburger");
let menu = document.createElement("div");
// menu.classList.add("menu");

// container.appendChild(menu);

const reveal_menu = () => {
	hamburger_menu.classList.add("x");
	
}

hamburger_menu.addEventListener("click", reveal_menu);