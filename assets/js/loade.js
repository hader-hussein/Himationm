$(document).ready(function(){
     'use strict';
     var windoh = $(window).height();
     $('body').height(windoh);
   
    $(".component-stert  .component--intro ").fadeOut(2000,function()
      {
          $(this).parent().fadeOut(1000,function(){
          $("body").css("overflow","auto");
          $(this).remove();
          $('body').height("100%");
      });
      
    }
    
     );
     const currentabout = location.href; 
     const menuitemabout = document.querySelectorAll('.navber-index .nav-item .nav-link');
      const menulengthabout = menuitemabout.length
     for (let j = 0; j<menulengthabout; j++){
      if(menuitemabout[j].href === currentabout) {
       menuitemabout[j].className = "active" 
         }
     }
         $('.navber-index .nav-item .nav-link').removeClass('active').removeAttr('aria-current');
         $('a[href="' + location.pathname + '"]').closest('li').addClass('active').attr('aria-current', 'page');
        
  })
  $(window).scroll(function(){
     $(' .navber-index').toggleClass('scrolled', $(this).scrollTop() > 50);
     });
     $('.owl-carousel').owlCarousel({
      autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
      loop:true,
      margin:10,
      nav:true,
      ltr:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:4
          },
          1000:{
              items:8
          }
      }
      
    });
     // below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector('.navbar');
  var currentPage = window.location.pathname;

  // تحقق من الصفحة الحالية وغيّر لون الـ navbar
  if (currentPage !== '/') {
      navbar.classList.add('navbar-changed');
  } else {
      navbar.classList.add('navbar-default');
  }
});
