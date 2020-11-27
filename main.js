const shareIcon = document.querySelector(".post__share");
const toolTip = document.querySelector(".share__tooltip");

let viewportWidth;
let setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
};

shareIcon.addEventListener("click", () => {
	toolTip.classList.toggle("active");
	shareIcon.classList.toggle("active");
});

let logWidth = function () {
	if (viewportWidth > 500) {
		toolTip.classList.remove("mobile");
	} else {
		toolTip.classList.add("mobile");
	}
};

setViewportWidth();
logWidth();

window.addEventListener(
	"resize",
	function () {
		setViewportWidth();
		logWidth();
	},
	false
);
