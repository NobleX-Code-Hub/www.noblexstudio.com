function selectService(service) {
	document.getElementById('serviceType').value = service;

	const buttons = document.querySelectorAll('.service-toggle button');
	buttons.forEach((btn) => btn.classList.remove('active'));
	if (service === 'Website Design') {
		buttons[0].classList.add('active');
	} else {
		buttons[1].classList.add('active');
	}
}

const loader_container = document.querySelector('.loader_container');
const consultation = document.querySelector('.consultation');

window.addEventListener('load', () => {
	loader_container.classList.add('remove');
	consultation.classList.add('show');
});
