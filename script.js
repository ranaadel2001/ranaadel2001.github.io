const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const revealTargets = document.querySelectorAll('.section-label, .section-heading, .glass, .project-card, .timeline-item');
revealTargets.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => observer.observe(el));
