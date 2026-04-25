    // Nav scroll effect
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));

    // Form
    function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target;
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#1a8a5e';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
      }, 3500);
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.nav-hamburger');
    const navDrawer = document.getElementById('navDrawer');
    const navBackdrop = document.getElementById('navBackdrop');
    const drawerLinks = document.querySelectorAll('.nav-drawer-links a, .nav-drawer-cta');

    function toggleMenu() {
      hamburger.classList.toggle('active');
      navDrawer.classList.toggle('active');
      navBackdrop.classList.toggle('active');
      document.body.style.overflow = navDrawer.classList.contains('active') ? 'hidden' : '';
    }

    // Close menu when a link is clicked
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navDrawer.classList.remove('active');
        navBackdrop.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking on the backdrop
    navBackdrop.addEventListener('click', toggleMenu);

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDrawer.classList.contains('active')) {
        toggleMenu();
      }
    });
