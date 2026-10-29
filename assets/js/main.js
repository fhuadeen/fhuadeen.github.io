(function () {
    'use strict';

    // Nav: border on scroll + mobile toggle
    var nav = document.querySelector('.nav');
    var toggle = document.querySelector('.nav-toggle');

    function onScroll() {
        nav.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Nav: highlight the section in view
    var navLinks = nav.querySelectorAll('.nav-links a[href^="#"]');
    if ('IntersectionObserver' in window) {
        var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                navLinks.forEach(function (link) {
                    link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        navLinks.forEach(function (link) {
            var section = document.querySelector(link.getAttribute('href'));
            if (section) sectionObserver.observe(section);
        });
    }

    // Projects: category filters
    var filters = document.querySelectorAll('.filter');
    var projects = document.querySelectorAll('.project');
    filters.forEach(function (filter) {
        filter.addEventListener('click', function () {
            var category = filter.dataset.filter;
            filters.forEach(function (f) { f.setAttribute('aria-pressed', String(f === filter)); });
            projects.forEach(function (project) {
                var tags = project.dataset.category.split(' ');
                project.hidden = category !== 'all' && tags.indexOf(category) === -1;
            });
        });
    });

    // Copy email (silent: visual toast only)
    var toast = document.querySelector('.toast');
    var toastTimer;
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2200);
    }
    document.querySelectorAll('[data-copy]').forEach(function (button) {
        button.addEventListener('click', function () {
            var text = button.dataset.copy;
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(function () {
                    showToast('Email copied to clipboard');
                }, function () {
                    window.location.href = 'mailto:' + text;
                });
            } else {
                window.location.href = 'mailto:' + text;
            }
        });
    });

    // Reveal on scroll
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -8% 0px' });
        reveals.forEach(function (el) { revealObserver.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // Footer year
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
})();
