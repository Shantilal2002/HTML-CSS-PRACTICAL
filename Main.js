"use strict";

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    clearInterval(a);
    clearInterval(b);
  }

  function unhover() {
    a = setInterval(moveFirst, 30);
    b = setInterval(moveSecond, 30);
  }

  clone();

  let a = setInterval(moveFirst, 30);
  let b = setInterval(moveSecond, 30);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();

// Solution

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove active from all
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // add active to clicked
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// FAQs
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


// ---------------------------------------------------------------------------
// Toggle button

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');

    // Toggle navbar open/close
    navbarToggler.addEventListener('click', () => {
        const isShown = navbarCollapse.classList.toggle('show');
        navbarToggler.setAttribute('aria-expanded', isShown);
    });

    // Close navbar when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', false);
            }
        }
    });

    // Close navbar when clicking a link (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', false);
            }
        });
    });

    // Optional: handle dropdown toggles (mobile-friendly)
    const dropdownToggles = navbarCollapse.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parentDropdown = toggle.parentElement;
            parentDropdown.classList.toggle('show');
        });
    });
});
