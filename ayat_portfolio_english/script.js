document.addEventListener('DOMContentLoaded', () => {

    // Typing effect
    const typingEl = document.getElementById('typing');
    const words = ["Full Stack .NET Developer", "UI Enthusiast"];
    let w = 0,
        i = 0,
        deleting = false;

    function typeLoop() {
        const txt = words[w];
        if (!deleting) {
            typingEl.textContent = txt.slice(0, i + 1);
            i++;
            if (i === txt.length) {
                deleting = true;
                setTimeout(typeLoop, 1000);
                return;
            }
        } else {
            typingEl.textContent = txt.slice(0, i - 1);
            i--;
            if (i === 0) {
                deleting = false;
                w = (w + 1) % words.length;
            }
        }
        setTimeout(typeLoop, deleting ? 40 : 80);
    }
    typeLoop();

    // Animate on scroll
    const els = document.querySelectorAll('[data-animate]');
    const onScroll = () => {
        const top = window.innerHeight;
        els.forEach(el => { if (el.getBoundingClientRect().top < top - 60) el.classList.add('visible'); });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Back to top
    const back = document.getElementById('backToTop');
    window.addEventListener('scroll', () => { window.scrollY > 400 ? back.classList.add('show') : back.classList.remove('show'); });
    back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Dark Mode
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.documentElement.getAttribute('data-theme') === 'dark' ? document.documentElement.removeAttribute('data-theme') : document.documentElement.setAttribute('data-theme', 'dark');
    });

    // Contact
    document.getElementById('sendBtn').addEventListener('click', () => {
        document.getElementById('sentMsg').style.display = 'block';
        document.getElementById('contactForm').reset();
        setTimeout(() => document.getElementById('sentMsg').style.display = 'none', 4000);
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Loader
    setTimeout(() => document.getElementById('loader').style.display = 'none', 700);
});