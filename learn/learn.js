// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
	const tabButtons = document.querySelectorAll('.tab-btn');
	const sections = document.querySelectorAll('.service-section');

	tabButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const service = button.dataset.service;

			// Remove active class from all buttons and sections
			tabButtons.forEach((btn) => btn.classList.remove('active'));
			sections.forEach((section) => section.classList.remove('active'));

			// Add active class to clicked button and corresponding section
			button.classList.add('active');
			const activeSection = document.querySelector(
				`.service-section[data-service="${service}"]`
			);
			if (activeSection) {
				activeSection.classList.add('active');
			}

			// Smooth scroll to content
			activeSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		});
	});

	// CTA button functionality
	const ctaButton = document.querySelector('.cta-button');
	if (ctaButton) {
		ctaButton.addEventListener('click', () => {
			// Scroll to consultation section or navigate to booking page
			window.location.href = '../consultation/consult.html';
		});
	}

	// Add intersection observer for scroll animations
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -100px 0px',
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
			}
		});
	}, observerOptions);

	document.querySelectorAll('.feature-card, .step').forEach((el) => {
		el.style.opacity = '0';
		observer.observe(el);
	});

	// Keyboard navigation for tabs
	tabButtons.forEach((button, index) => {
		button.addEventListener('keydown', (e) => {
			if (e.key === 'ArrowRight' && index < tabButtons.length - 1) {
				tabButtons[index + 1].focus();
				tabButtons[index + 1].click();
			} else if (e.key === 'ArrowLeft' && index > 0) {
				tabButtons[index - 1].focus();
				tabButtons[index - 1].click();
			}
		});
	});

	// Smooth scroll behavior enhancement
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		});
	});

	// Performance: Lazy load images if browser supports it
	if ('IntersectionObserver' in window) {
		const images = document.querySelectorAll('img[data-src]');
		const imageObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.dataset.src;
					img.removeAttribute('data-src');
					imageObserver.unobserve(img);
				}
			});
		});

		images.forEach((img) => imageObserver.observe(img));
	}

	// Add click ripple effect to buttons
	document.querySelectorAll('button').forEach((button) => {
		button.addEventListener('click', function (e) {
			const ripple = document.createElement('span');
			const rect = this.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = e.clientX - rect.left - size / 2;
			const y = e.clientY - rect.top - size / 2;

			ripple.style.width = ripple.style.height = size + 'px';
			ripple.style.left = x + 'px';
			ripple.style.top = y + 'px';
			ripple.classList.add('ripple');

			this.appendChild(ripple);

			setTimeout(() => ripple.remove(), 600);
		});
	});
});

// Parallax effect for visual cards (optional enhancement)
window.addEventListener('scroll', () => {
	const cards = document.querySelectorAll('.visual-card');
	cards.forEach((card) => {
		const rect = card.getBoundingClientRect();
		const scrolled = window.pageYOffset;
		const yPos = scrolled * 0.5;

		if (rect.top < window.innerHeight && rect.bottom > 0) {
			card.style.backgroundPosition = `center ${yPos}px`;
		}
	});
});

// Scroll progress indicator (optional)
window.addEventListener('scroll', () => {
	const scrollTop = window.pageYOffset;
	const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	const scrollPercent = (scrollTop / docHeight) * 100;

	const progressBar = document.querySelector('.progress-bar');
	if (progressBar) {
		progressBar.style.width = scrollPercent + '%';
	}
});

// Mobile menu - smooth scrolling
if (window.innerWidth <= 768) {
	document.querySelectorAll('.tab-btn').forEach((btn) => {
		btn.addEventListener('click', () => {
			// Auto-close mobile menu if it exists
			const mobileMenu = document.querySelector('.mobile_menu');
			if (mobileMenu) {
				mobileMenu.classList.remove('active');
			}
		});
	});
}
