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

const tracks = [
	'audio/Roddy_Ricch_-_Intro_[Official_Audio](720p)(1).mp3',
	'audio/Lil_Baby___Lil_Durk_-_Bruised_Up__Official_Audio_(720p)(1).mp3',
	'audio/Lil_Baby___Lil_Durk_-_Lying__Official_Audio_(256k).mp3',
	'audio/Who_I_Want(256k).mp3',
];

const audio = document.getElementById('bg-music');
audio.volume = 0.9;

// Restore track index
let index = parseInt(localStorage.getItem('musicIndex')) || 0;
audio.src = tracks[index];

// Restore playback time
const savedTime = localStorage.getItem('musicTime');
if (savedTime) audio.currentTime = parseFloat(savedTime);

// Save playback time every second
setInterval(() => {
	if (!audio.paused) {
		localStorage.setItem('musicTime', audio.currentTime);
	}
}, 1000);

// Playlist loop
audio.addEventListener('ended', () => {
	index = (index + 1) % tracks.length;
	audio.src = tracks[index];
	audio.play();
	localStorage.setItem('musicIndex', index);
	localStorage.setItem('musicTime', 0);
});

// Start music once
function startMusic() {
	audio
		.play()
		.then(() => {
			localStorage.setItem('musicPlaying', 'true');
			removeAllListeners();
		})
		.catch(() => {});
}

// Remove all triggers after start
function removeAllListeners() {
	document.removeEventListener('click', startMusic);
	document.removeEventListener('touchstart', startMusic);
	document.removeEventListener('mousemove', startMusic);
	document.removeEventListener('keydown', startMusic);
	window.removeEventListener('scroll', startMusic);
}

// Restore previous state
if (localStorage.getItem('musicPlaying') === 'true') {
	addListeners();
}

// Add all interaction listeners
function addListeners() {
	document.addEventListener('click', startMusic);
	document.addEventListener('touchstart', startMusic);
	document.addEventListener('mousemove', startMusic);
	document.addEventListener('keydown', startMusic);
	window.addEventListener('scroll', startMusic, { once: true });
}

// Initial listeners
addListeners();
