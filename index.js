(function () {
	const images = document.querySelectorAll('.img');
	const prevBtn = document.querySelector('.prev');
	const nextBtn = document.querySelector('.next');

	let currentImage = 0;

	for (let i = 0; i < images.length; i++) {
		images[i].style.zIndex = images.length - i;
	}

	images[currentImage].style.transform = 'scale(1)';
	images[currentImage].style.right = '0';

	prevBtn.addEventListener('click', () => {
		if (currentImage <= 0) return;

		images[currentImage].style.zIndex = images.length - currentImage;
		images[currentImage].style.transform = 'scale(0.8)';
		images[currentImage].style.right = '-100%';

		currentImage -= 1;

		images[currentImage].style.transform = 'scale(1)';
		images[currentImage].style.right = '0';
	});

	nextBtn.addEventListener('click', () => {
		if (currentImage >= images.length - 1) return;

		images[currentImage].style.zIndex = currentImage;
		images[currentImage].style.transform = 'scale(0.8)';
		images[currentImage].style.right = '100%';

		currentImage += 1;

		images[currentImage].style.transform = 'scale(1)';
		images[currentImage].style.right = '0';
	});
})();

(function () {
	const container = document.querySelector('.drag-container');

	let cursorInital;
	let cursorPos;
	let cursorDifference = 0;
	let mouseClicked = false;

	const checkLimit = e => {
		if (cursorDifference <= 0) {
			cursorDifference = 0;
			cursorInital = e.clientX - 70 + cursorDifference;
		}

		if (cursorDifference >= container.scrollWidth - container.offsetWidth) {
			cursorDifference = container.scrollWidth - container.offsetWidth;
			cursorInital = e.clientX - 70 + cursorDifference;
		}
	};

	container.addEventListener('mousedown', e => {
		mouseClicked = true;
		container.style.cursor = 'grabbing';
		cursorInital = e.clientX - 70 + cursorDifference;
		checkLimit(e);
	});

	container.addEventListener('mousemove', e => {
		cursorPos = e.clientX - 70;
		if (mouseClicked) {
			cursorDifference = cursorInital - cursorPos;
			checkLimit(e);
			container.scroll(cursorDifference, 0);
		}
	});

	container.addEventListener('mouseup', e => {
		mouseClicked = false;
		container.style.cursor = 'grab';
		checkLimit(e);
	});

	container.addEventListener('mouseleave', e => {
		mouseClicked = false;
		container.style.cursor = 'grab';
		checkLimit(e);
	});
})();
