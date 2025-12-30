// Video page interactions: lazy-load, play/pause, progress, keyboard
document.addEventListener('DOMContentLoaded', () => {
	const promo = document.getElementById('promoVideo');
	const playBtn = document.getElementById('playBtn');
	const btnPlay = document.getElementById('btnPlay');
	const btnMute = document.getElementById('btnMute');
	const btnFull = document.getElementById('btnFull');
	const progress = document.getElementById('progress');
	const progressFilled = progress.querySelector('.progress-filled');
	const timeEl = document.getElementById('time');

	// Lazily set the src when user interacts
	function ensureSrc() {
		const src = promo.querySelector('source');
		if (src && !src.src) {
			src.src = src.dataset.src;
			promo.load();
		}
	}

	function formatTime(secs) {
		const s = Math.floor(secs % 60)
			.toString()
			.padStart(2, '0');
		const m = Math.floor(secs / 60);
		return `${m}:${s}`;
	}

	function updateTime() {
		const cur = promo.currentTime || 0;
		const dur = promo.duration || 0;
		progressFilled.style.width = dur ? `${(cur / dur) * 100}%` : '0%';
		timeEl.textContent = `${formatTime(cur)} / ${
			dur ? formatTime(dur) : '0:00'
		}`;
	}

	playBtn.addEventListener('click', (e) => {
		ensureSrc();
		if (promo.paused) {
			promo.play();
			playBtn.style.display = 'none';
		} else {
			promo.pause();
		}
	});

	btnPlay.addEventListener('click', () => {
		ensureSrc();
		if (promo.paused) {
			promo.play();
		} else {
			promo.pause();
		}
	});

	btnMute.addEventListener('click', () => {
		promo.muted = !promo.muted;
		btnMute.innerHTML = promo.muted
			? '<i class="ri-volume-mute-line"></i>'
			: '<i class="ri-volume-up-line"></i>';
	});

	btnFull.addEventListener('click', () => {
		if (promo.requestFullscreen) {
			promo.requestFullscreen();
		} else if (promo.webkitEnterFullscreen) {
			promo.webkitEnterFullscreen();
		}
	});

	promo.addEventListener('timeupdate', updateTime);
	promo.addEventListener('loadedmetadata', updateTime);
	promo.addEventListener('play', () => {
		// hide overlay when playing
		document.getElementById('playBtn').style.display = 'none';
		btnPlay.innerHTML = '<i class="ri-pause-line"></i>';
	});
	promo.addEventListener('pause', () => {
		document.getElementById('playBtn').style.display = 'flex';
		btnPlay.innerHTML = '<i class="ri-play-line"></i>';
	});

	// Click on progress to seek
	progress.addEventListener('click', (e) => {
		const rect = progress.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const pct = x / rect.width;
		if (promo.duration) promo.currentTime = pct * promo.duration;
		updateTime();
	});

	// keyboard shortcuts: space for play/pause, m to mute
	document.addEventListener('keydown', (e) => {
		if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
		if (e.code === 'Space') {
			e.preventDefault();
			btnPlay.click();
		}
		if (e.key === 'm' || e.key === 'M') btnMute.click();
	});

	// Accessibility: focus styles
	document.querySelectorAll('.control, .play-overlay, .btn').forEach((el) => {
		el.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') el.click();
		});
	});
});
