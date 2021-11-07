$(function(){
  window.sr = ScrollReveal();
  if ($(window).width() < 768) {

  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}
  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });
  } else {
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }
  
  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });


});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#9797a4"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#9797a4"
      },
      "polygon": {
        "nb_sides": 22.5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#9797a4",
      "opacity": 0.8,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 150,
        "size": 8,
        "duration": 20,
        "opacity": 0.5,
        "speed": 2
      },
      "repulse": {
        "distance": 135,
        "duration": 2
      },
      "push": {
        "particles_nb": 10
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
// var count_particles, stats, update;
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);


// $( document ).ready(function(){
//   $(".button-collapse").sideNav({ 
//       closeOnClick: true});
//   $('.scrollspy').scrollSpy();
// });

var lastScrollTop;

window.addEventListener('scroll',function(){
  navbar = document.querySelector('.navbar_shadow');
  if(window.scrollY > window.screen.availHeight - 100){
    navbar.classList.add('nav--show')
    // console.log('top page')
    // console.log(window.scrollY)
  }
  else{
    navbar.classList.remove('nav--show')
    // console.log('top page')
  }
});

// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });


// projects scripts
// $('#slideshow').carousel({
//   interval: 5000
// });