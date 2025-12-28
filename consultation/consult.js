// SERVICE TABS
const tabs = document.querySelectorAll('.tab');
const serviceInput = document.getElementById('selectedService');
const serviceNote = document.getElementById('serviceNote');

const notes = {
	'Web Design': 'Describe the website layout, pages, and features you want.',
	'Graphic Design': 'Describe the design style, colors, and usage.',
	'Logo Design': 'Describe the logo idea, meaning, and brand personality.',
	Branding: 'Describe your brand vision, audience, and identity goals.',
};

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach((t) => t.classList.remove('active'));
		tab.classList.add('active');
		const service = tab.dataset.service;
		serviceInput.value = service;
		serviceNote.textContent = notes[service];
	});
});

// THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('light');
	themeToggle.innerHTML = document.body.classList.contains('light')
		? '<i class="ri-moon-line"></i>'
		: '<i class="ri-sun-line"></i>';
});

// MODERN FAKE FILE UPLOAD (VISUAL ONLY)
const uploadInput = document.querySelector('.upload-box input');
const thumbnails = document.querySelector('.thumbnails');
const progressBar = document.querySelector('.progress');

uploadInput.addEventListener('change', () => {
	const files = Array.from(uploadInput.files);
	thumbnails.innerHTML = '';
	progressBar.style.width = '0%';

	files.forEach((file, index) => {
		let el;
		if (file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onload = (e) => {
				el = document.createElement('img');
				el.src = e.target.result;
				thumbnails.appendChild(el);
			};
			reader.readAsDataURL(file);
		} else {
			el = document.createElement('div');
			el.classList.add('pdf-icon');
			el.textContent = file.name;
			thumbnails.appendChild(el);
		}

		// Animate fake progress
		setTimeout(() => {
			progressBar.style.width = `${((index + 1) / files.length) * 100}%`;
		}, 100 * (index + 1));
	});
});

// DRAGGABLE WHATSAPP BUTTON
const whatsappBtn = document.getElementById('whatsappButton');
let isDragging = false,
	offsetX = 0,
	offsetY = 0;

whatsappBtn.addEventListener('mousedown', (e) => {
	isDragging = true;
	offsetX = e.offsetX;
	offsetY = e.offsetY;
});

document.addEventListener('mousemove', (e) => {
	if (!isDragging) return;
	whatsappBtn.style.left = e.clientX - offsetX + 'px';
	whatsappBtn.style.top = e.clientY - offsetY + 'px';
});

document.addEventListener('mouseup', () => {
	isDragging = false;
});
