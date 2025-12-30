const showMoreOnHover = document.querySelectorAll('.showMoreOnHover');
const text__creative = document.querySelectorAll('.text__creative');
const image__aboutMe = document.querySelectorAll('.image__aboutMe');
const imageBelow = document.querySelectorAll('.imageBelow');
const aboutNobleFirst = document.querySelector('.aboutNoble_first');
const aboutNobleSecond = document.querySelector('.aboutNoble_second');
const more__icon = document.querySelector('.more__icon');
const sidebar = document.querySelector('.sidebar');
const exit__icon = document.querySelector('.exit__icon');
const lastImage = document.querySelector('.aboutMe__Middle img:last-child');
const firstImage = document.querySelector('.aboutMe__Middle img:first-child');
const loader_container = document.querySelector('.loader_container');
const homepage__section = document.querySelector('.homepage__section');
const bodyElement = document.querySelector('.body');
const hiddenElements = document.querySelectorAll('.works__container');
const header__portfolio = document.querySelector('.header__portfolio');
const list__opt = document.querySelector('.list__opt');
const explore__btn = document.querySelectorAll('.explore__btn');
const text__noble = document.querySelectorAll('.text__noble');
const show__trigger = document.querySelectorAll('.show__trigger');
const project__btn = document.querySelectorAll('.project__btn');
const reservedText = document.querySelectorAll('.reservedText');
const typeWriter = document.querySelector('.typeWriter');
const readMoreSpan = document.querySelector('.readMoreSpan');
const slideOutText = document.querySelector('.slideOutText');
const works__showcase = document.querySelectorAll('.works__showcase');
const homeBtn = document.querySelectorAll('#homeBtn');
const cookies__container = document.querySelector('.cookies__container');
const containHiddenWorks = document.querySelector('.containHiddenWorks');
const viewBtn = document.querySelector('.viewBtn');
const loadersFirst = document.querySelector('.loaders:first-child');
const loadersSecond = document.querySelector('.loaders:nth-child(2)');
const loadersThird = document.querySelector('.loaders:nth-child(3)');
const grid__previous_works = document.querySelector('.grid__previous_works');
const cookiesBtn = document.querySelectorAll('.cookiesBtn');
const book__sidebar__cont = document.querySelectorAll('.book__sidebar__cont');
const scaleUp = document.querySelectorAll('.sidebar .scaleUp');
const clients = document.querySelectorAll('.clients');
const logo__main = document.querySelector('.logo__main');
const textShowcase = document.querySelector('.bottom__header .text__showcase');
const image__showcase = document.querySelector('.image__showcase');
const top__header = document.querySelector('.top__header');
const cancel__btn = document.querySelector('.cancel__btn');
const top__top__new = document.querySelector('.top__top__new');
const cancel__expert = document.querySelector('.cancel__expert');
const output = document.querySelector('.output');
const more__works__section = document.querySelectorAll('.more__works__section');
const moreIconLast = document.querySelector(
	'.more__icon .line__more:last-child'
);
const animateNoble = document.querySelectorAll('.NobleX__animate h2');
const stayGray = document.querySelector('#firstGray .stayGray');
const moveGray = document.querySelector('#firstGray .moveGray');
const typeBook = document.querySelector('#typeBook');
const wrap_the_top = document.querySelector('.wrap_the_top');
const gridWhatSliderGal = document.querySelector('.gridWhatSliderGal');
const front__arrow = document.querySelector('.front__arrow');
const back__arrow = document.querySelector('.back__arrow');
const image__maintain = document.querySelectorAll('.image__maintain');
const arrow__down = document.querySelector('.arrow__down');
const go__up__arrow = document.querySelector('.go__up__arrow');
const what__we__do__boxes = document.querySelectorAll('.what__we__do__boxes');
const performersAni = document.querySelectorAll('.performersAni');
const btn__maintain = document.querySelectorAll('.btn__maintain');
const gallery__studio = document.querySelectorAll('.gallery__studio');
const show__as__header = document.querySelector('.show__as__header');
const goBackPop = document.querySelectorAll('#goBackPop');
const coverDaddy = document.querySelector('.coverDaddy');
const btn__options__as = document.querySelectorAll('.btn__options__as');
const body = document.querySelector('.body');
const mobile_menu = document.querySelector('.mobile_menu');

// gridWhatSliderGal.addEventListener('wheel', (evt) => {
// 	evt.preventDefault();
// 	gridWhatSliderGal.scrollLeft += evt.deltaY;
// });

front__arrow.addEventListener('click', () => {
	gridWhatSliderGal.scrollLeft += 200;
});
back__arrow.addEventListener('click', () => {
	gridWhatSliderGal.scrollLeft -= 2000000;
});

setInterval(() => {
	changeImage();
}, 3000);

window.addEventListener('scroll', () => {
	let headerHeight = header__portfolio.getBoundingClientRect().height;
	if (window.pageYOffset > headerHeight) {
		more__icon.classList.add('show');
		go__up__arrow.classList.add('show');
		show__as__header.classList.add('show');
		// logo__main.classList.add('show');
	} else {
		go__up__arrow.classList.remove('show');
		more__icon.classList.remove('show');
		show__as__header.classList.remove('show');
		// logo__main.classList.remove('show');
	}

	const triggerPoint = (window.innerHeight / 5) * 4;

	hiddenElements.forEach((elementHidden) => {
		const topBox = elementHidden.getBoundingClientRect().top;

		if (topBox < triggerPoint) {
			elementHidden.classList.add('show');
		} else {
			elementHidden.classList.remove('show');
		}
	});

	what__we__do__boxes.forEach((weBoxes) => {
		const weBox = weBoxes.getBoundingClientRect().top;

		if (weBox < triggerPoint) {
			weBoxes.classList.add('show');
		} else {
			weBoxes.classList.remove('show');
		}
	});

	image__maintain.forEach((manImage) => {
		const manBox = manImage.getBoundingClientRect().top;

		if (manBox < triggerPoint) {
			manImage.classList.add('show');
		} else {
			manImage.classList.remove('show');
		}
	});

	gallery__studio.forEach((galStu) => {
		const galBox = galStu.getBoundingClientRect().top;

		if (galBox < triggerPoint) {
			galStu.classList.add('show');
		} else {
			galStu.classList.remove('show');
		}
	});

	btn__maintain.forEach((mainBtn) => {
		const mainBox = mainBtn.getBoundingClientRect().top;

		if (mainBox < triggerPoint) {
			mainBtn.classList.add('show');
		} else {
			mainBtn.classList.remove('show');
		}
	});

	animateNoble.forEach((nobleAni) => {
		const nobBox = nobleAni.getBoundingClientRect().top;

		if (nobBox < triggerPoint) {
			nobleAni.classList.add('show');
		} else {
			nobleAni.classList.remove('show');
		}
	});

	showMoreOnHover.forEach((hoverElement) => {
		const hoverBox = hoverElement.getBoundingClientRect().top;

		if (hoverBox < triggerPoint) {
			hoverElement.classList.add('show');
		} else {
			hoverElement.classList.remove('show');
		}
	});

	more__works__section.forEach((gary) => {
		const beforeBox = gary.getBoundingClientRect().top;

		if (beforeBox < triggerPoint) {
			gary.classList.add('show');
		} else {
			gary.classList.remove('show');
		}
	});

	performersAni.forEach((performMan) => {
		const performBox = performMan.getBoundingClientRect().top;

		if (performBox < triggerPoint) {
			performMan.classList.add('show');
		} else {
			performMan.classList.remove('show');
		}
	});

	text__creative.forEach((textCreate) => {
		const textBox = textCreate.getBoundingClientRect().top;

		if (textBox < triggerPoint) {
			textCreate.classList.add('show');
		} else {
			textCreate.classList.remove('show');
		}
	});

	clients.forEach((clt) => {
		const cltBox = clt.getBoundingClientRect().top;

		if (cltBox < triggerPoint) {
			clt.classList.add('show');
		} else {
			clt.classList.remove('show');
		}
	});

	image__aboutMe.forEach((imageAbout) => {
		const aboutBox = imageAbout.getBoundingClientRect().top;

		if (aboutBox < triggerPoint) {
			imageAbout.classList.add('show');
		} else {
			imageAbout.classList.remove('show');
		}
	});

	works__showcase.forEach((imageShow) => {
		const imageShowBox = imageShow.getBoundingClientRect().top;

		if (imageShowBox < triggerPoint) {
			imageShow.classList.add('show');
		} else {
			imageShow.classList.remove('show');
		}
	});

	imageBelow.forEach((imageBel) => {
		const belowBox = imageBel.getBoundingClientRect().top;

		if (belowBox < triggerPoint) {
			imageBel.classList.add('show');
		} else {
			imageBel.classList.remove('show');
		}
	});

	explore__btn.forEach((btnExplore) => {
		const exploreBox = btnExplore.getBoundingClientRect().top;

		if (exploreBox < triggerPoint) {
			btnExplore.classList.add('show');
		} else {
			btnExplore.classList.remove('show');
		}
	});

	text__noble.forEach((nobleText) => {
		const nobleBox = nobleText.getBoundingClientRect().top;

		if (nobleBox < triggerPoint) {
			nobleText.classList.add('show');
		} else {
			nobleText.classList.remove('show');
		}
	});

	show__trigger.forEach((showTree) => {
		const treeBox = showTree.getBoundingClientRect().top;

		if (treeBox < triggerPoint) {
			showTree.classList.add('show');
		} else {
			showTree.classList.remove('show');
		}
	});

	project__btn.forEach((projectBtn) => {
		const projectBox = projectBtn.getBoundingClientRect().top;

		if (projectBox < triggerPoint) {
			projectBtn.classList.add('show');
		} else {
			projectBtn.classList.remove('show');
		}
	});

	reservedText.forEach((reservedLetters) => {
		const reservedLettersBox = reservedLetters.getBoundingClientRect().top;

		if (reservedLettersBox < triggerPoint) {
			reservedLetters.classList.add('show');
		} else {
			reservedLetters.classList.remove('show');
		}
	});
	// checkBoxes();
});
more__icon.classList.add('reduce');
window.addEventListener('load', () => {
	arrow__down.classList.add('show');
	top__header.classList.add('show');
	textShowcase.classList.add('show');
	image__showcase.classList.add('show');
	more__icon.classList.remove('reduce');
	loader_container.classList.add('remove');
	body.classList.add('scroll');
	homepage__section.classList.add('show');

	setTimeout(() => {
		top__top__new.classList.add('show');
	}, 10000);
	// if you already accepted the cookies

	if (document.cookie.includes('NobleX')) {
		return;
	}
	setTimeout(() => {
		cookies__container.classList.add('show');
	}, 20000);

	cookiesBtn.forEach((cookBtb) => {
		cookBtb.addEventListener('click', () => {
			cookies__container.classList.remove('show');
			// if button has id of acceptCookies
			if (cookBtb.id === 'acceptCookies') {
				// set cookies for one month
				document.cookie = 'cookieBy = NobleX; max-age=' + 60 * 60 * 24 * 30;
			}
		});
	});
});

const like__btn = document.querySelectorAll('.like__btn');

like__btn.forEach((likeBtn) => {
	likeBtn.addEventListener('click', () => {
		likeBtn.classList.toggle('liked');
	});
});

// function imageChanger() {
// 	const randomNumber = Math.floor(Math.random() * 10);

// 	if (randomNumber >= 5) {
// 		aboutNobleFirst.classList.add('show');
// 		aboutNobleSecond.classList.add('show');
// 	} else {
// 		aboutNobleFirst.classList.remove('show');
// 		aboutNobleSecond.classList.remove('show');
// 	}
// }

// setInterval(() => {
// 	imageChanger();
// }, 10000);

readMoreSpan.addEventListener('click', () => {
	if (readMoreSpan.innerHTML === 'Read more...') {
		readMoreSpan.innerHTML = 'Read less...';
		slideOutText.classList.add('show');
	} else {
		readMoreSpan.innerHTML = 'Read more...';
		slideOutText.classList.remove('show');
	}
});

viewBtn.addEventListener('click', () => {
	containHiddenWorks.classList.toggle('show');
	grid__previous_works.classList.toggle('show');
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

scaleUp.forEach((el) => observer.observe(el));

cancel__expert.addEventListener('click', () => {
	cancel__expert.parentElement.remove();
});

// let res;
// let typeSpeed = 200;
// let removeSpeed = 800;
// let id = 0;

// const words = ['book now to consult and get started now!!!'];
// let charCount = 0;
// let time = setInterval(type, typeSpeed);

// function type() {
// 	res = words[id].substring(0, charCount);
// 	if (charCount >= words[id].length + 3) {
// 		clearInterval(time);
// 		charCount = 1;
// 		time = setInterval(remove, removeSpeed);
// 	}
// 	typeBook.innerHTML = res;
// 	charCount++;
// }

// function remove() {
// 	res = words[id].substring(0, words[id].length - charCount);
// 	if (res.length <= 0) {
// 		if (id >= words.length - 1) {
// 			id = 0;
// 		} else {
// 			id++;
// 		}
// 		clearInterval(time);
// 		charCount = 0;
// 		time = setInterval(type, typeSpeed);
// 	}
// 	typeBook.innerHTML = res;
// 	charCount++;
// }

go__up__arrow.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
	});
});

goBackPop.forEach((backPop) => {
	backPop.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	});
});

more__icon.addEventListener('click', () => {
	mobile_menu.classList.toggle('active');
});

const hoverServe = document.querySelector('.hoverServe');
const serveGuys = document.querySelector('.serveGuys');

hoverServe.addEventListener('click', () => {
	serveGuys.classList.toggle('show');
	mobile_menu.classList.toggle('cursor');
});

const closeMob = document.querySelector('.closeMob');
const closeSides = document.querySelector('.closeSides');
const closeSide = document.querySelector('.closeSide');

closeMob.addEventListener('click', () => {
	mobile_menu.classList.toggle('active');
});

closeSides.addEventListener('click', () => {
	mobile_menu.classList.toggle('active');
});

closeSide.addEventListener('click', () => {
	mobile_menu.classList.toggle('active');
});

const button = document.getElementById('whatsapp-float');
const link = document.getElementById('wa-link');

let isDragging = false;
let moved = false;
let offsetX = 0;
let offsetY = 0;

/* ---------- Desktop ---------- */
button.addEventListener('mousedown', (e) => {
	isDragging = true;
	moved = false;
	button.classList.add('dragging');

	offsetX = e.clientX - button.offsetLeft;
	offsetY = e.clientY - button.offsetTop;
});

document.addEventListener('mousemove', (e) => {
	if (!isDragging) return;

	moved = true;

	button.style.left = e.clientX - offsetX + 'px';
	button.style.top = e.clientY - offsetY + 'px';
	button.style.right = 'auto';
	button.style.bottom = 'auto';
});

document.addEventListener('mouseup', () => {
	if (!isDragging) return;

	snapToEdge();
	isDragging = false;
	button.classList.remove('dragging');
});

/* ---------- Mobile ---------- */
button.addEventListener('touchstart', (e) => {
	const touch = e.touches[0];
	isDragging = true;
	moved = false;
	button.classList.add('dragging');

	offsetX = touch.clientX - button.offsetLeft;
	offsetY = touch.clientY - button.offsetTop;
});

document.addEventListener('touchmove', (e) => {
	if (!isDragging) return;

	moved = true;
	const touch = e.touches[0];

	button.style.left = touch.clientX - offsetX + 'px';
	button.style.top = touch.clientY - offsetY + 'px';
	button.style.right = 'auto';
	button.style.bottom = 'auto';
});

document.addEventListener('touchend', () => {
	if (!isDragging) return;

	snapToEdge();
	isDragging = false;
	button.classList.remove('dragging');
});

/* ---------- Prevent click while dragging ---------- */
link.addEventListener('click', (e) => {
	if (moved) {
		e.preventDefault();
		moved = false;
	}
});

/* ---------- Snap to nearest screen edge ---------- */
function snapToEdge() {
	const rect = button.getBoundingClientRect();
	const screenWidth = window.innerWidth;

	if (rect.left + rect.width / 2 < screenWidth / 2) {
		button.style.left = '10px';
		button.style.right = 'auto';
	} else {
		button.style.right = '10px';
		button.style.left = 'auto';
	}
}

const tooltip = document.querySelector('.tooltip');
const dots = tooltip.querySelector('.typing-dots');
const text = tooltip.querySelector('.tooltip-text');

setTimeout(() => {
	dots.style.display = 'none';
	text.style.display = 'inline';
}, 2000);

// Unsplash

const tabs = document.querySelectorAll('.tab');
const grid = document.getElementById('imageGrid');

// Unsplash API
const UNSPLASH_ACCESS_KEY = 'k7RPKs8NktLNJsQVDRW8kXaptI8wnMSGmluTrzLvAaw'; // 🔑 Replace with your Unsplash API Key

const keywords = {
	'Web Design': 'website design ui',
	'Graphic Design': 'graphic design poster',
	'Logo Design': 'logo design',
	Branding: 'branding identity',
};

// Fallback image URLs (already hosted on Unsplash)
const fallbackImages = {
	'Web Design': [
		'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
		'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
		'https://images.unsplash.com/photo-1498050108023-0a2c5f45683a',
	],
	'Graphic Design': [
		'https://images.unsplash.com/photo-1498050108023-3a2f5f4f4568',
		'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
		'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
	],
	'Logo Design': [
		'https://images.unsplash.com/photo-1487014679447-9f8336841d58',
		'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
		'https://images.unsplash.com/photo-1498050108023-0a2c5f45683a',
	],
	Branding: [
		'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
		'https://images.unsplash.com/photo-1498050108023-3a2f5f4f4568',
		'https://images.unsplash.com/photo-1487014679447-9f8336841d58',
	],
};

// Initial load
loadImages('Web Design');

// Tab click
tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach((t) => t.classList.remove('active'));
		tab.classList.add('active');
		const service = tab.dataset.service;
		loadImages(service);
	});
});

async function loadImages(service) {
	grid.innerHTML = '';

	// Show 6 skeletons while loading
	for (let i = 0; i < 6; i++) {
		const skeleton = document.createElement('div');
		skeleton.classList.add('skeleton');
		grid.appendChild(skeleton);
	}

	try {
		const response = await fetch(
			`https://api.unsplash.com/photos/random?query=${encodeURIComponent(
				keywords[service]
			)}&count=6&client_id=${UNSPLASH_ACCESS_KEY}`
		);
		const data = await response.json();

		grid.innerHTML = ''; // remove skeletons

		// If API fails or no data, use fallback
		const images =
			data && data.length
				? data.map((p) => p.urls.small)
				: fallbackImages[service];

		images.forEach((url) => {
			const card = document.createElement('div');
			card.classList.add('card');
			const img = document.createElement('img');
			img.src = url;
			img.alt = service;
			card.appendChild(img);
			grid.appendChild(card);
		});
	} catch (e) {
		console.error('Error fetching images:', e);
		grid.innerHTML = ''; // remove skeletons

		// Use fallback images
		fallbackImages[service].forEach((url) => {
			const card = document.createElement('div');
			card.classList.add('card');
			const img = document.createElement('img');
			img.src = url;
			img.alt = service;
			card.appendChild(img);
			grid.appendChild(card);
		});
	}
}

const testimonials = [
	{
		name: 'Daniel Roberts',
		role: 'Startup Founder',
		text: 'Outstanding service and clean design.',
		img: 'clients/client2.jpg',
	},
	{
		name: 'Sophia Williams',
		role: 'Creative Director',
		text: 'Professional delivery and smooth workflow.',
		img: 'clients/client1.jpg',
	},
	{
		name: 'Michael Turner',
		role: 'Marketing Consultant',
		text: 'Exceeded expectations completely.',
		img: 'clients/client3.jpg',
	},
	{
		name: 'Emily Stone',
		role: 'Product Manager',
		text: 'Fast communication and premium quality.',
		img: 'clients/client4.jpg',
	},
	{
		name: 'Chris Morgan',
		role: 'Tech Consultant',
		text: 'Reliable team, very skilled.',
		img: 'clients/client5.jpg',
	},
];

const track = document.getElementById('testimonialTrack');
const dotsContainer = document.getElementById('dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
let startX = 0;

testimonials.forEach((t, i) => {
	const card = document.createElement('div');
	card.className = 'testimonial-card';
	card.innerHTML = `    <div class="avatar">
      <img src="${t.img}" alt='${t.name}' />
    </div>
    <div class="stars">★★★★★</div>
    <p class="testimonial-text">${t.text}</p>
    <h3 class="client-name">${t.name}</h3>
    <span class="client-role">${t.role}</span>
 `;
	track.appendChild(card);

	const dot = document.createElement('div');
	dot.className = 'dot';
	dot.addEventListener('click', () => slideTo(i));
	dotsContainer.appendChild(dot);
});

const dots1 = document.querySelectorAll('.dot');
dots1[0].classList.add('active');

function slideTo(i) {
	index = i;
	const cardWidth = track.children[0].offsetWidth + 40;
	track.style.transform = `translateX(-${index * cardWidth}px)`;
	dots1.forEach((d) => d.classList.remove('active'));
	dots1[index].classList.add('active');
}

/_ BUTTONS _/;
nextBtn.onclick = () => {
	if (index < testimonials.length - 1) slideTo(index + 1);
};
prevBtn.onclick = () => {
	if (index > 0) slideTo(index - 1);
};

/_ TOUCH SWIPE _/;
track.addEventListener('touchstart', (e) => {
	startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
	const endX = e.changedTouches[0].clientX;
	if (startX - endX > 50 && index < testimonials.length - 1) slideTo(index + 1);
	if (endX - startX > 50 && index > 0) slideTo(index - 1);
});

/* ============================
   iPhone-Style Pull-to-Refresh with Chevron SVG
============================ */

/* Create custom chevron element */
const ptrChevron = document.createElement('div');
ptrChevron.style.width = '30px';
ptrChevron.style.height = '30px';
ptrChevron.style.margin = '0 auto 10px';
ptrChevron.style.transition =
	'transform 0.2s ease, opacity 0.2s ease, top 0.2s ease';
ptrChevron.style.opacity = '0';
ptrChevron.style.position = 'fixed';
ptrChevron.style.top = '-50px';
ptrChevron.style.left = '50%';
ptrChevron.style.zIndex = '9999';
ptrChevron.style.pointerEvents = 'none';
ptrChevron.style.transformOrigin = 'center';
ptrChevron.innerHTML = `
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4facfe" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
`;
document.body.appendChild(ptrChevron);

let startY = 0;
let pulling = false;

/* Touch start */
window.addEventListener('touchstart', (e) => {
	if (window.scrollY === 0) {
		startY = e.touches[0].clientY;
		pulling = true;
		ptrChevron.style.opacity = '1';
		ptrChevron.style.transition =
			'transform 0.2s ease, opacity 0.2s ease, top 0.2s ease';
	}
});

/* Touch move */
window.addEventListener('touchmove', (e) => {
	if (!pulling) return;
	const distance = e.touches[0].clientY - startY;
	if (distance > 0) {
		ptrChevron.style.top = `${distance - 50}px`;
		ptrChevron.style.transform = `rotate(${Math.min(
			distance * 1.5,
			180
		)}deg) scale(${1 + distance / 150})`;
	} else {
		ptrChevron.style.top = '-50px';
		ptrChevron.style.transform = 'rotate(0deg) scale(1)';
	}
});

/* Touch end */
window.addEventListener('touchend', (e) => {
	if (!pulling) return;
	const distance = e.changedTouches[0].clientY - startY;

	if (distance > 80) {
		// Enough pull: bounce and refresh
		ptrChevron.style.transition = 'top 0.3s cubic-bezier(.28,.84,.42,1.2)';
		ptrChevron.style.top = '20px';
		setTimeout(() => {
			window.location.reload();
		}, 300);
	} else if (distance > 0) {
		// Less than 80px: snap back with smooth spring animation
		ptrChevron.style.transition =
			'top 0.5s cubic-bezier(.68,-0.55,.27,1.55), transform 0.5s ease, opacity 0.5s ease';
		ptrChevron.style.top = '-50px';
		ptrChevron.style.transform = 'rotate(0deg) scale(1)';
	}

	ptrChevron.style.opacity = '0';
	pulling = false;
});
