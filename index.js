(function () {
	const container = document.querySelector('.container');

	let cursorInital;
	let cursorPos;
	let cursorDifference = 0;
	let mouseClicked = false;

	const checkLimit = () => {
		if (cursorDifference <= 0) {
			cursorDifference = 0;
		}

		if (cursorDifference >= container.scrollWidth - container.offsetWidth) {
			cursorDifference = container.scrollWidth - container.offsetWidth;
		}
	};

	container.addEventListener('mousedown', e => {
		mouseClicked = true;
		container.style.cursor = 'grabbing';
		cursorInital = e.clientX - 70 + cursorDifference;
		checkLimit();
	});

	container.addEventListener('mousemove', e => {
		cursorPos = e.clientX - 70;
		if (mouseClicked) {
			cursorDifference = cursorInital - cursorPos;
			checkLimit();
			container.scroll(cursorDifference, 0);
		}
	});

	container.addEventListener('mouseup', () => {
		mouseClicked = false;
		container.style.cursor = 'grab';
		checkLimit();
	});

	container.addEventListener('mouseleave', () => {
		mouseClicked = false;
		container.style.cursor = 'grab';
		checkLimit();
	});
})();
