let menu = document.querySelector(".menu");
let menu_panel = document.querySelector(".menu_panel");
let hamburger = document.querySelector(".hamburger");

let menu_open = false;

menu.addEventListener("click", toggle_menu);

function toggle_menu() {
	menu_open = !menu_open;
	if (menu_open) {
		hamburger.classList.add("x");
		menu_panel.classList.add("show");
	} else {
		hamburger.classList.remove("x");
		menu_panel.classList.remove("show");
	}
}