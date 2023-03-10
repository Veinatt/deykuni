// function testWebP(callback) {

//   var webP = new Image();
//   webP.onload = webP.onerror = function () {
//     callback(webP.height == 1);
//   };
//   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }

// testWebP(function (support) {

//   let className = support === true ? 'webp' : 'no-webp';
//   document.documentElement.classList.add(className);
//   console.log(className)
// });
document.addEventListener('DOMContentLoaded', function () {
  testWebP(document.body)
})

function testWebP(elem) {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add('webp') : elem.classList.add('no-webp')
  }
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}



/* SLIDE UP */
let slideUp = (target, duration = 500) => {

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    //alert("!");
  }, duration);
}

/* SLIDE DOWN */
let slideDown = (target, duration = 500) => {

  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

/* TOOGLE */
var slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

ready(function () {
  // setTimeout(function () {
  //   $('#TimeModal').modal('show');
  // }, 10000);
  let ratelist = [...document.querySelectorAll(".rate")];
  document.querySelectorAll('.rate').forEach(rate => {
    rate.classList.add('hide');
  })
  if (window.matchMedia("(max-width: 480px)").matches) {
    ratelist.slice(0, 2).forEach(rate => {
      rate.style.display = 'block';
      rate.classList.remove('hide');
    })
  } else if (window.matchMedia("(max-width: 991px)").matches) {
    ratelist.slice(0, 4).forEach(rate => {
      rate.style.display = 'block';
      rate.classList.remove('hide');
    })
  } else {
    ratelist.slice(0, 6).forEach(rate => {
      rate.style.display = 'block';
      rate.classList.remove('hide');
    })
  }
  document.querySelector('.load-more').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.rate.hide').forEach(rate => {
      slideDown(rate, 500)
    })
    this.style.display = 'none';
  }, false);
  if (window.matchMedia("(min-width:768px)").matches) {
    let images_cont = document.querySelectorAll('.site-cont')
    for (let i = 0; i < images_cont.length; i++) {
      let images = images_cont[i].querySelectorAll('img')
      for (let j = 0; j < images.length; j++) {
        setTimeout(() => {
          setTimeout(() => {
            images[j].style.opacity = 1;
          }, j * 5000);
          setTimeout(() => {
            images[j].style.opacity = 0;
          }, (j + 1) * 5000);
          setInterval(() => {
            setTimeout(() => {
              images[j].style.opacity = 1;
            }, j * 5000);
            setTimeout(() => {
              images[j].style.opacity = 0;
            }, (j + 1) * 5000);
          }, images.length * 5000);
        }, i * 500);
      }
    }

    let full_img = document.querySelector('.site-cont-full')
    document.querySelectorAll('.site-cont').forEach(image => {
      image.addEventListener('click', function () {
        body.classList.add('lock');
        full_img.classList.add('active')
        full_img.querySelector('img').setAttribute('src', this.querySelector('img:not([style*="opacity: 0;"])').src)
        full_img.style.display = 'block'
        if (document.querySelector('header').classList.contains('hide')) {

        } else {
          document.querySelector('header').classList.add('hide')
        }
      })
    })
    full_img.addEventListener('click', function () {
      body.classList.remove('lock');
      full_img.style.display = 'none'
      full_img.querySelector('img').removeAttribute('src')
      full_img.classList.remove('active')
    })
  }
});

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

const cImg = document.querySelector('#clipped-image');
const body = document.querySelector('body');

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: 'body',
    offset: 200,
    duration: 0,
    triggerHook: 0,
  })
  .setTween(TweenMax.to("header", 1, {
    css: {
      backgroundColor: '#070707'
    },
  }))
  .addTo(controller);

if (window.matchMedia("(min-width: 1200px)").matches) {
  body.addEventListener('mousemove', function (e) {
    cImg.style.setProperty('--clip-position-x', e.pageX - 250 + 'px');
    cImg.style.setProperty('--clip-position-y', e.pageY - 250 + 'px');
  }, false);




  new ScrollMagic.Scene({
      triggerElement: '.deykun-sec-4',
      duration: 1000,
      triggerHook: 0,
    })
    .setTween(TweenMax.to(".deykun-sec-4 .circ", 1, {
      css: {
        top: '100%'
      },
    }))
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.deykun-sec-4',
      triggerHook: 0,
    })
    .setTween(TweenMax.to(".deykun-sec-4 .pnt-1", 1, {
      css: {
        opacity: 1
      },
    }))
    .reverse(false)
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.deykun-sec-4',
      offset: 100,
      triggerHook: 0,
    })
    .setTween(TweenMax.to(".deykun-sec-4 .pnt-2", 1, {
      css: {
        opacity: 1
      },
    }))
    .reverse(false)
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '.deykun-sec-4',
      offset: 300,
      triggerHook: 0,
    })
    .setTween(TweenMax.to(".deykun-sec-4 .pnt-3", 1, {
      css: {
        opacity: 1
      },
    }))
    .reverse(false)
    .addTo(controller);


  new ScrollMagic.Scene({
      triggerElement: '.deykun-sec-4',
      offset: 500,
      triggerHook: 0,
    })
    .setTween(TweenMax.to(".deykun-sec-4 .pnt-4", 1, {
      css: {
        opacity: 1
      },
    }))
    .reverse(false)
    .addTo(controller);
}
(function () {

  var doc = document.documentElement;
  var w = window;

  /*
  define four variables: curScroll, prevScroll, curDirection, prevDirection
  */

  var curScroll;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curDirection = 0;
  var prevDirection = 0;

  /*
  how it works:
  -------------
  create a scroll event listener
  create function to check scroll position on each scroll event,
  compare curScroll and prevScroll values to find the scroll direction
  scroll up - 1, scroll down - 2, initial - 0
  then set the direction value to curDirection
  compare curDirection and prevDirection
  if it is different, call a function to show or hide the header
  example:
  step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
  step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
  step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
  */

  var header = document.querySelector('header');
  var toggled;
  var threshold = 200;

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  var toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add('hide');
    } else if (curDirection === 1) {
      header.classList.remove('hide');
    } else {
      toggled = false;
    }
    return toggled;
  };

  window.addEventListener('scroll', checkScroll);

})();


// document.querySelectorAll('.acc-btn').forEach(btn => {
//   btn.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//       this.querySelector('.acc-arrow').classList.remove('active');
//       this.parentNode.parentNode.querySelectorAll('.acc-content').forEach(content => {
//         slideUp(content, 500)
//       })

//     } else {
//       document.querySelectorAll('.acc-btn').forEach(rem => {
//         rem.classList.remove('active');
//       })
//       document.querySelectorAll('.acc-arrow').forEach(rem => {
//         rem.classList.remove('active');
//       })
//       this.parentNode.parentNode.querySelectorAll('.acc-content').forEach(content => {
//         console.log(content);
//         slideUp(content, 500)
//       })
//       this.classList.add('active');
//       this.querySelector('.acc-arrow').classList.add('active');
//       slideDown(this.parentNode.querySelector('.acc-content'), 500);
//     }
//   }, false);
// })

$('.acc-btn').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).find('.acc-arrow').removeClass('active');
    $(this).parent().parent().find('.acc-content').slideUp(300);
  } else {
    $('.acc-btn').removeClass('active');
    $('.acc-arrow').removeClass('active');
    $(this).parent().parent().find('.acc-content').slideUp(300);
    $(this).find('.acc-arrow').addClass('active');
    $(this).addClass('active');
    $(this).parent().find('.acc-content').slideDown(300);
  }
});

if (document.querySelector('.animated-cont')) {
  document.querySelectorAll('.animated-cont').forEach(cont => {
    var animate_delay = window.innerHeight - cont.dataset.delayOnTop;
    var rect = cont.getBoundingClientRect();

    var block_top = rect.top + document.documentElement.scrollTop + animate_delay;
    var element_animated = false;

    function animationOnScroll() {
      if (!element_animated && document.documentElement.scrollTop + window.innerHeight > block_top) {
        element_animated = true;
        if (cont.querySelector('.sc-cont')) {
          cont.querySelectorAll('.point').forEach(item => {
            item.classList.add("animate");
          }, false);
        }
      }
    }

    ready(animationOnScroll());
    window.addEventListener('scroll', (event) => {
      animationOnScroll()
    })
  }, false);
};

const swiper = new Swiper('.slider-review', {
  effect: "fade",
  speed: 500,
  loop: true,
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
});


// document.querySelectorAll('.site-cont').forEach(img => {
//   img.addEventListener('click', function () {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//       body.classList.remove('lock');
//       this.removeAttribute('style');
//       this.scrollTo(0, 0);
//     } else {
//       var rect = this.getBoundingClientRect();
//       var xpos = rect.left + "px";
//       var ypos = rect.top + "px";
//       this.style.position = 'fixed'
//       this.style.top = ypos;
//       this.style.left = xpos;
//       if (document.querySelector('header').classList.contains('hide')) {

//       } else {
//         document.querySelector('header').classList.add('hide')
//       }
//       this.classList.add('active');
//       body.classList.add('lock');
//     }
//   }, false)
// })