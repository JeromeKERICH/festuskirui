const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('navlist');

// Toggle menu open/close and change icon
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Toggle between the menu and close icon
    if (menuIcon.classList.contains('bx-menu')) {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
});


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

const mission = document.querySelector('.mission');
const values = document.querySelector('.values');

    mission.addEventListener('mouseover', () => {
    mission.style.backgroundColor = '#e0f7fa';
    });

    values.addEventListener('mouseover', () => {
    values.style.backgroundColor = '#e0f7fa';
    });

    mission.addEventListener('mouseleave', () => {
    mission.style.backgroundColor = '#fff';
    });

    values.addEventListener('mouseleave', () => {
    values.style.backgroundColor = '#fff';
    });

//testimonials

$(document).ready(function(){
  $('.testimonial-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});





function toggleFaq(faq) {
    const isActive = faq.parentElement.classList.contains('active');
    document.querySelectorAll('.faq').forEach(item => item.classList.remove('active'));
  
    if (!isActive) {
      faq.parentElement.classList.add('active');
    }
  }
  
  