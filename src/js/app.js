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


var btnDown = document.querySelector('#s1 .anchor-down');

let cursors = document.querySelectorAll('.cursor');
let texts = document.querySelectorAll('.main-text div');
let lbgs = document.querySelectorAll('.s1-bg-left');
let rbgs = document.querySelectorAll('.s1-bg-right');
let coords = {
  lx: 0,
  ly: 0,
  rx: 0,
  ry: 0
}
document.querySelectorAll('.cursor').forEach(cursor => {
  document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  });
});
for (var i = 0; i < texts.length; i++) {
  let text = texts[i];
  let cursor = cursors[i];
  let lbg = lbgs[i];
  let rbg = rbgs[i];
  let btnclass = 'cursor' + [i + 1]
  text.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
    lbg.classList.add('hover');
    rbg.classList.add('hover');
    btnDown.classList.add(btnclass);
  });
  text.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    lbg.classList.remove('hover');
    rbg.classList.remove('hover');
    btnDown.classList.remove(btnclass);
  });
  text.addEventListener('mousemove', (e) => {
    var rect = e.target.getBoundingClientRect();
    let left = e.clientX - rect.left;
    let right = rect.right - e.clientX;
    let diff = (left - right) / 10;
    coords.rx = 335 + diff;
    coords.ry = (e.clientY - rect.top);
    coords.lx = 165 + diff;
    coords.ly = (e.clientY - rect.top);
    cursor.querySelector('path').setAttribute('d', `M 165 0 L 335 0 Q ${coords.rx} 115 335 230 L 165 230 Q ${coords.lx} 115 165 0 `)
  });
}

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function disableScroll() {
  document.querySelector('.s2-overflow').addEventListener('wheel', preventScroll);
}

function enableScroll() {
  document.querySelector('.s2-overflow  ').removeEventListener('wheel', preventScroll);
}


const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '.s2-overflow',
    duration: 1,
    triggerHook: 0,
  })
  .on("enter", function (event) {
    disableScroll()
    document.querySelector('#s2 .acc-fst').click()
    setTimeout(() => {
      enableScroll()
    }, "3000");
  })
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.s2-overflow',
    offset: 100,
    duration: 1,
    triggerHook: 0,
  })
  .on("enter", function (event) {
    disableScroll()
    document.querySelector('#s2 .acc-snd').click()
    setTimeout(() => {
      enableScroll()
    }, "3000");
  })
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.s2-overflow',
    offset: 200,
    duration: 1,
    triggerHook: 0,
  })
  .on("enter", function (event) {
    disableScroll()
    document.querySelector('#s2 .acc-trd').click()
    setTimeout(() => {
      enableScroll()
    }, "3000");
  })
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.s2-overflow',
    offset: 300,
    duration: 1,
    triggerHook: 0,
  })
  .on("enter", function (event) {
    disableScroll()
    document.querySelector('#s2 .acc-fth').click()
    setTimeout(() => {
      enableScroll()
    }, "3000");
  })
  .addTo(controller);



new ScrollMagic.Scene({
    triggerElement: '.s2-overflow',
    offset: 100,
    duration: 0,
    triggerHook: 0,
  })
  .on("leave", function (event) {
    disableScroll()
    document.querySelector('#s2 .acc-fst').click()
    setTimeout(() => {
      enableScroll()
    }, "3000");
  })
  .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.s2-overflow',
    offset: 200,
    duration: 0,
    triggerHook: 0,
  })
  .on("leave", function (event) {
    disableScroll()
    document.querySelector('#s2 .acc-snd').click()
    setTimeout(() => {
      enableScroll()
    }, "3000");
  })
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.s2-overflow',
    offset: 300,
    duration: 0,
    triggerHook: 0,
  })
  .on("leave", function (event) {
    disableScroll()
    document.querySelector('#s2 .acc-trd').click()
    setTimeout(() => {
      enableScroll()
    }, "3000");
  })
  .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.s2-overflow',
    offset: 400,
    duration: 0,
    triggerHook: 0,
  })
  .on("leave", function (event) {
    disableScroll()
    document.querySelector('#s2 .acc-fth').click()
    setTimeout(() => {
      enableScroll()
    }, "3000");
  })
  .addTo(controller);
let fpsec = window.sessionStorage.getItem('fpsec');
window.onload = function() {
  fullpage_api.silentMoveTo(fpsec);
}


new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
  lockAnchors: true,
  recordHistory: true,
  afterLoad: function () {
    window.sessionStorage.setItem('fpsec', fullpage_api.getActiveSection().anchor)
    if (document.querySelector('#s1').classList.contains('active')) {
      document.querySelector('.header-cont').classList.remove('active')
    } else {
      document.querySelector('.header-cont').classList.add('active')
    }
    var url_ob = new URL(document.URL);
    url_ob.hash = '#' + fullpage_api.getActiveSection().item.id + '';
    var new_url = url_ob.href;
    document.location.href = new_url;
    if(fullpage_api.getActiveSection().anchor !== 'thirdPage' && fullpage_api.getActiveSection().anchor !== 'fourthPage') {
      fullpage_api.setAllowScrolling(true, 'all');
      fullpage_api.setKeyboardScrolling(true, 'all');
    }
    if(fullpage_api.getActiveSection().anchor == 'thirdPage') {
      fullpage_api.setAllowScrolling(true, 'up');
      fullpage_api.setKeyboardScrolling(true, 'up');
      fullpage_api.setAllowScrolling(false, 'down');
      fullpage_api.setKeyboardScrolling(false, 'down');
    }
    if(fullpage_api.getActiveSection().anchor == 'fourthPage') {
      fullpage_api.setAllowScrolling(false, 'up');
      fullpage_api.setKeyboardScrolling(false, 'up');
    }
  },
  onLeave: function () {
  },
});


document.querySelectorAll('.anchor-down').forEach(btn => {
  btn.addEventListener('click', () => {
    fullpage_api.moveSectionDown();
  })
})
document.querySelectorAll('.anchor-up').forEach(btn => {
  btn.addEventListener('click', () => {
    fullpage_api.moveSectionUp();
  })
})
document.querySelectorAll('.choose-var').forEach(btn => {
  btn.addEventListener('click', () => {
    fullpage_api.moveSectionDown();
  })
})



var acc = document.getElementsByClassName("accordion");
var i;

document.querySelectorAll('.acc').forEach(acc => {
  acc.addEventListener("click", function () {
    document.querySelectorAll('.acc').forEach(accs => {
      accs.classList.remove("active");
      accs.nextElementSibling.style.maxHeight = null;
    });
    document.querySelectorAll('.acc-img').forEach(imgs => {
      imgs.classList.remove("active");
      imgs.querySelectorAll('svg.bl').forEach(gs => {
        gs.classList.remove("active");
      });
    });
    this.classList.add("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
})
document.querySelector('.acc.acc-fst').addEventListener("click", function () {
  document.querySelector('.acc-fst-img').classList.add('active')
  setTimeout(() => {
    document.querySelector('.acc-fst-img').querySelectorAll('svg.bl').forEach(img => {
      img.classList.add('active')
    })
  }, '2000');
});
document.querySelector('.acc.acc-snd').addEventListener("click", function () {
  document.querySelector('.acc-snd-img').classList.add('active')
  setTimeout(() => {
    document.querySelector('.acc-snd-img').querySelectorAll('svg.gr').forEach(img => {
      img.classList.add('active')
    })
  }, '2000');
});
document.querySelector('.acc.acc-trd').addEventListener("click", function () {
  document.querySelector('.acc-trd-img').classList.add('active')
  setTimeout(() => {
    document.querySelector('.acc-trd-img').querySelectorAll('svg.ye').forEach(img => {
      img.classList.add('active')
    })
  }, '2000');
});
document.querySelector('.acc.acc-fth').addEventListener("click", function () {
  document.querySelector('.acc-fth-img').classList.add('active')
  setTimeout(() => {
    document.querySelector('.acc-fth-img').querySelectorAll('svg.purp').forEach(img => {
      img.classList.add('active')
    })
  }, '2000');
});
$('.my-dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.my-dropdown-menu').slideToggle(300);
});
$('.my-dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.my-dropdown-menu').slideUp(300);
});
$('.my-dropdown .my-dropdown-menu li').click(function () {
  $(this).parents('.my-dropdown').find('span').text($(this).text());
  $(this).parents('.my-dropdown').find('span').removeClass();
  $(this).parents('.my-dropdown').find('span').addClass($(this).text());
  $('.my-dropdown .my-dropdown-menu li').show()
  $(this).hide()
});



let btnsBlue = document.querySelectorAll('.choose-var');
for (var i = 0; i < btnsBlue.length; i++) {
  let btn = btnsBlue[i];
  let btnWidth = btn.offsetWidth;
  let btnHeight = btn.offsetHeight - document.querySelector('header').offsetHeight;

  let btnSvg = btn.querySelector('svg')
  btnSvg.style.width = btnWidth * 2;
  btnSvg.style.height = btnHeight;
  btnSvg.style.top = document.querySelector('header').offsetHeight;
  let svgPath = btnSvg.querySelector('path')
  svgPath.setAttribute('d', `M ${btnWidth / 2} 0 L ${btnWidth * 1.5} 0 Q ${btnWidth * 1.5} ${btnHeight / 2} ${btnWidth} ${btnHeight} L ${btnWidth / 2} ${btnHeight} Q ${btnWidth} ${btnHeight / 2} ${btnWidth / 2} 0 `)
  btnSvg.appendChild(svgPath)
  btnSvg.setAttribute('viewBox', `0 0 ${btnWidth * 2} ${btnHeight}`)
  btn.insertBefore(btnSvg, btn.firstChild)
  btn.addEventListener('mousemove', (e) => {
    var rect = e.target.getBoundingClientRect();
    let left = e.clientX - rect.left;
    let right = rect.right - e.clientX;
    let diff = (left - right) / 7;
    coords.rx = btnWidth * 1.5 + diff;
    coords.ry = (e.clientY - rect.top);
    coords.lx = btnWidth / 2 + diff;
    coords.ly = (e.clientY - rect.top);
    btnSvg.querySelector('path').setAttribute('d', `M ${btnWidth / 2} 0 L ${btnWidth * 1.5} 0 Q ${coords.rx} ${btnHeight / 2} ${btnWidth * 1.5} ${btnHeight} L ${btnWidth / 2} ${btnHeight} Q ${coords.lx} ${btnHeight / 2} ${btnWidth / 2} 0 `)
  });
}