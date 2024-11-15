const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('navlist');


menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    
   
    if (menuIcon.classList.contains('bx-menu')) {
        menuIcon.classList.remove('bx-menu');
        menuIcon.classList.add('bx-x');
    } else {
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
});


// portfolio script

document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0; 

  function moveSlide(step) {
      const portfolioItems = document.querySelector('.portfolio-items');
      const totalItems = portfolioItems.children.length;

      let visibleItems = 3; 

      if (window.innerWidth <= 480) {
      visibleItems = 1; 
      } else if (window.innerWidth <= 768) {
      visibleItems = 2; 
      }

      slideIndex += step;

  
      if (slideIndex < 0) {
      slideIndex = 0;
      } else if (slideIndex > totalItems - visibleItems) {
      slideIndex = totalItems - visibleItems;
      }

      const moveAmount = slideIndex * (-100 / visibleItems);
      portfolioItems.style.transform = `translateX(${moveAmount}%)`;
  }

  
  document.querySelector('.prev').addEventListener('click', function() {
      moveSlide(-1);
  });

  document.querySelector('.next').addEventListener('click', function() {
      moveSlide(1);
  });

  
  window.addEventListener('resize', function() {
      moveSlide(0); 
  });
  }); 



 //get quote link
document.getElementById("quoteButton").addEventListener("click", function(event) {
  event.preventDefault();
    document.getElementById("overlay").style.display = "flex";
});


function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const packageChoice = document.getElementById("package").value;
    const comments = document.getElementById("comments").value;


    const phoneNumber = "254711980164"; 
    const message = `Hello. ${name}. I am interested in the ${packageChoice} internet package. ${comments ? "Additional comments: " + comments : ""}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  
    window.open(whatsappLink, "_blank");

   
    document.getElementById("packageForm").reset();
    closeForm();
}


function closeForm() {
    document.getElementById("overlay").style.display = "none";
}


document.getElementById("overlay").addEventListener("click", function(event) {
    if (event.target === this) {
        closeForm();
    }
});


//get connected link
document.getElementById("getConnectedLink").addEventListener("click", function(event){
  event.preventDefault(); 
  const form = document.getElementById("connectionForm");
  
 
  form.classList.remove("hidden");
});


document.getElementById("closeFormButton").addEventListener("click", function(event) {
  const form = document.getElementById("connectionForm");
  
 
  form.classList.add("hidden");
});

document.getElementById('connectionForm').addEventListener('submit', function (e) {
  e.preventDefault();

 
  const name = document.getElementById('name').value;
  const residence = document.getElementById('residence').value;
  const mode = document.getElementById('mode').value;

  const message = `Name: ${name}%0AResidence: ${residence}%0AMode of Communication: ${mode}`;


  const whatsappLink = `https://wa.me/254711980164?text=${message}`;


  window.open(whatsappLink, '_blank');
});


document.getElementById('closeFormButton').addEventListener('click', function () {
  document.getElementById('connectionForm').classList.add('hidden');
});


//navbar

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
  
  
//contact sending emails

function submitForm(event) {
  event.preventDefault(); 

  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

 
  fetch(form.action, {
      method: "POST",
      body: new FormData(form)
  })
  .then(response => {
      if (response.ok) {
         
          successMessage.style.display = "block";

         
          form.style.display = "none";

         
          form.reset();

       
          setTimeout(() => {
              form.style.display = "block";
              successMessage.style.display = "none";
          }, 3000); 
      } else {
          alert("There was an error submitting the form. Please try again.");
      }
  })
  .catch(error => {
      console.error("Error:", error);
      alert("There was an error submitting the form. Please try again.");
  });
}