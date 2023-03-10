//carousel de photos
function carousel(selector, data) {
  let element = document.querySelector(selector);
  data.forEach(function(e) {
      element.innerHTML += 
      `<div class="">
          <img class="m-auto" src="${e.link}" alt="${e.alt}">
      </div>`;
  });
  $(element).slick({
      centerMode: true,
      centerPadding: '30px',
      slidesToShow: 2,
      arrows: true,
      speed:1300,
      adaptiveHeight: true,
      autoplaySpeed:1500,
      autoplay: true,
      dots:true,
      fade: false,
      pauseOnHover:false,
      focusOnSelect: true,
      responsive: [
          {
              breakpoint: 550,
              settings: {
                  slidesToShow: 1,
                  arrows: true,
                  fade: true,
                  centerMode:true
              }
           }
       ]
  });
}

carousel(".carouselClim", clims);

