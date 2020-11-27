const shareIcon = document.querySelector(".post__share");
const toolTip = document.querySelector(".share__tooltip");

shareIcon.addEventListener("mouseover", () => {
	toolTip.classList.add("active");
	shareIcon.classList.add("active");
});

shareIcon.addEventListener("mouseleave", () => {
	timer = setTimeout(() => {
		toolTip.classList.remove("active");
		shareIcon.classList.remove("active");
	}, 1000);
});

toolTip.addEventListener("mouseover", () => {
	clearTimeout(timer);

	timer = setTimeout(() => {
		toolTip.classList.add("active");
		shareIcon.classList.add("active");
	}, 1000);
});

toolTip.addEventListener("mouseleave", () => {
	clearTimeout(timer);

	timer = setTimeout(() => {
		toolTip.classList.remove("active");
		shareIcon.classList.remove("active");
	}, 1000);
});
