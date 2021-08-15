(function () {
	const container = document.querySelector('.container');

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
