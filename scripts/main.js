let menuBtn = document.querySelector("#header__menu button");
menuBtn.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	let el = document.querySelector("#header__menu nav");
	let style = window.getComputedStyle(el);
	if (style.getPropertyValue("display") == "none")
		el.style.display = "block";
	else
		el.style.display = "none";
}

let prevBtn = document.querySelector(".gallery__controls__prev");
prevBtn.addEventListener("click", galleryPrev, false);

function galleryPrev() {
	let el = document.querySelector(".gallery__slides");
	let stepSize = el.offsetWidth
	el.scrollLeft = el.scrollLeft - stepSize;
}

let nextBtn = document.querySelector(".gallery__controls__next");
nextBtn.addEventListener("click", galleryNext, false);

function galleryNext() {
	console.log("now");
	let el = document.querySelector(".gallery__slides");
	let stepSize = el.offsetWidth
	el.scrollLeft = el.scrollLeft + stepSize;
}