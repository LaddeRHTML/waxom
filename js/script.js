$(document).ready(function(){
  window.onscroll = function navbarScroll() {
      var navbar = this.document.querySelector('.navbar');
      if (window.pageYOffset > 10) {
          navbar.classList.add('navbar_active');
      } else {
          navbar.classList.remove('navbar_active');
      }
  };
  $(document).ready(function() {
      $('.slider').slick({
          arrows: false,
          dots: false,
          autoplay: false,
          speed: 300,
          fade: true,
          cssEase: 'linear',
          slidesToShow: 1,
          responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  slidesToShow: 1
              }
          }
      ]
      });
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    let more = document.querySelector('.video_starter'),
          overlay = document.getElementById('video'),
          close = document.querySelector('.close');
      more.addEventListener('click', function(e) {
          e.preventDefault();
          overlay.style.display = "block";
          this.classList.add('more-classlist');
          document.body.style.overflow = 'hidden';
});
      close.addEventListener('click', function() {
          overlay.style.display = "none";
          this.classList.remove('more-classlist');
          document.body.style.overflow = 'auto';
});

 $(document).ready(function() {
  $('.posts__carousel').slick({
      arrows: true,
      dots: false,
      autoplay: false,
      speed: 300,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToMove: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      responsive: [
          {
            breakpoint: 900,
            settings: {
              arrows: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              slidesToShow: 1
          }
        }
        ]
    });
  });   
  $(document).ready(function() {
      $('.promo__carousel').slick({
          arrows: false,
          dots: false,
          autoplay: true,
          infinite: true,
          speed: 300,
          cssEase: 'linear',
          slidesToShow: 4,
          responsive: [
              {
                breakpoint: 1040,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1
              }
          }
      ]
      });
  });  
 /*  (function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

jQuery(function($) {
        $('#first').countTo({
            from: 2000,
            to: 3587,
            speed: 5000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
    jQuery(function($) {
      $('#second').countTo({
          from: 150,
          to: 207,
          speed: 5000,
          refreshInterval: 50,
          onComplete: function(value) {
              console.debug(this);
          }
      });
  });
    jQuery(function($) {
      $('#third').countTo({
          from: 1500,
          to: 2500,
          speed: 5000,
          refreshInterval: 50,
          onComplete: function(value) {
              console.debug(this);
          }
      });
  });
    jQuery(function($) {
      $('#forth').countTo({
          from: 500,
          to: 873,
          speed: 5000,
          refreshInterval: 50,
          onComplete: function(value) {
              console.debug(this);
          }
      });
  }); */
  
  const menu = document.querySelector('.navigation_mobile'),
  menuItem = document.querySelectorAll('.navigation_menu-item'),
  hamburger = document.querySelector('.hamburger');
  active = document.querySelector('.hamburger hamburger_active');


  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('navigation_mobile_active');
  });
  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          active.classList.remove('hamburger_active');
          menu.classList.toggle('navigation_mobile_active');
      });
  });
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
});
