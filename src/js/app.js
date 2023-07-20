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


new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
  lockAnchors: true,
  recordHistory: true,
  afterLoad: function (origin, destination, direction) {
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
    if (fullpage_api.getActiveSection().anchor !== 'page3' && fullpage_api.getActiveSection().anchor !== 'page4' && fullpage_api.getActiveSection().anchor !== 'page5') {
      fullpage_api.setAllowScrolling(true, 'all');
      fullpage_api.setKeyboardScrolling(true, 'all');
    }
    if (fullpage_api.getActiveSection().anchor === 'page3') {
      fullpage_api.setAllowScrolling(true, 'up');
      fullpage_api.setKeyboardScrolling(true, 'up');
      fullpage_api.setAllowScrolling(false, 'down');
      fullpage_api.setKeyboardScrolling(false, 'down');
    }
    if (fullpage_api.getActiveSection().anchor === 'page4') {
      fullpage_api.setAllowScrolling(false, 'up');
      fullpage_api.setKeyboardScrolling(false, 'up');
      fullpage_api.setAllowScrolling(false, 'down');
      fullpage_api.setKeyboardScrolling(false, 'down');
    }
    if (fullpage_api.getActiveSection().anchor === 'page5') {
      fullpage_api.setAllowScrolling(true, 'up');
      fullpage_api.setKeyboardScrolling(true, 'up');
      fullpage_api.setAllowScrolling(false, 'down');
      fullpage_api.setKeyboardScrolling(false, 'down');
    }
    if (fullpage_api.getActiveSection().anchor === 'page5' && direction == 'down' && rate_anim === null) {
      rate_anim = 'disabled'
      window.sessionStorage.setItem('rate_anim', 'disabled')
      enableRateAnim();
      disableFullpage();
      setTimeout(() => {
        fullpage_api.setAllowScrolling(true, 'up');
        fullpage_api.setKeyboardScrolling(true, 'up');
      fullpage_api.setAllowScrolling(false, 'down');
      fullpage_api.setKeyboardScrolling(false, 'down');
      }, 5000);
    }
    if (fullpage_api.getActiveSection().anchor === 'page6' && direction == 'down' && point_anim === null) {
      point_anim = 'disabled'
      window.sessionStorage.setItem('point_anim', 'disabled')
      enablePointAnim();
      disableFullpage();
    }
    // if (fullpage_api.getActiveSection().anchor === 'page7' && direction == 'down' && slider_anim === null) {
    //   slider_anim = 'disabled'
    //   window.sessionStorage.setItem('slider_anim', 'disabled')
    //   enableSliderAnim();
    //   disableFullpage();
    // }
    if (fullpage_api.getActiveSection().anchor === 'page8' && direction == 'down' && fade_anim === null) {
      fade_anim = 'disabled'
      window.sessionStorage.setItem('fade_anim', 'disabled')
      enableFadeAnim();
      disableFullpageFade();
    }
    if (fullpage_api.getActiveSection().anchor === 'page9' && direction == 'down' && site_anim === null) {
      site_anim = 'disabled'
      window.sessionStorage.setItem('site_anim', 'disabled')
      enableSiteAnim();
      disableFullpage();
    }
    if (fullpage_api.getActiveSection().anchor === 'page10' && direction == 'down' && last_anim === null) {
      site_anim = 'disabled'
      window.sessionStorage.setItem('last_anim', 'disabled')
      enableLastAnim();
    }
  },
});
console.clear()

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
let cursor_lp = document.querySelector('.cursor-last-page');
let lp = document.querySelector('#s10')
document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor_lp.style.left = x + 'px';
  cursor_lp.style.top = y + 'px';
});

lp.addEventListener('mouseover', () => {
  cursor_lp.classList.add('hover');
});
lp.addEventListener('mouseleave', () => {
  cursor_lp.classList.remove('hover');
});

// function preventScroll(e) {
//   e.preventDefault();
//   e.stopPropagation();

//   return false;
// }

// function disableScroll() {
//   document.querySelector('.s2-overflow').addEventListener('wheel', preventScroll);
// }

// function enableScroll() {
//   document.querySelector('.s2-overflow  ').removeEventListener('wheel', preventScroll);
// }


// const controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
//     triggerElement: '.s2-overflow',
//     duration: 1,
//     triggerHook: 0,
//   })
//   .on("enter", function (event) {
//     disableScroll()
//     document.querySelector('#s2 .acc-fst').click()
//     setTimeout(() => {
//       enableScroll()
//     }, "3000");
//   })
//   .addTo(controller);



function disableFullpage() {
  fullpage_api.setAllowScrolling(false, 'up');
  fullpage_api.setKeyboardScrolling(false, 'up');
  fullpage_api.setAllowScrolling(false, 'down');
  fullpage_api.setKeyboardScrolling(false, 'down');
  setTimeout(() => {
    fullpage_api.setAllowScrolling(true, 'all');
    fullpage_api.setKeyboardScrolling(true, 'all');
  }, 5000);
}

function disableFullpageFade() {
  fullpage_api.setAllowScrolling(false, 'up');
  fullpage_api.setKeyboardScrolling(false, 'up');
  fullpage_api.setAllowScrolling(false, 'down');
  fullpage_api.setKeyboardScrolling(false, 'down');
  setTimeout(() => {
    fullpage_api.setAllowScrolling(true, 'all');
    fullpage_api.setKeyboardScrolling(true, 'all');
  }, 11000);
}

function disableRateAnim() {
  document.querySelector('#s5 .sub-text').classList.add('rate-anim-disabled')
  document.querySelector('#s5 .need-help').classList.add('rate-anim-disabled')
  document.querySelector('#s5 .rate-cont').classList.add('rate-anim-disabled')
  document.querySelector('#s5 .main-title').classList.add('rate-anim-disabled')
}

function enableRateAnim() {
  document.querySelector('#s5 .sub-text').classList.remove('rate-anim-disabled')
  document.querySelector('#s5 .need-help').classList.remove('rate-anim-disabled')
  document.querySelector('#s5 .rate-cont').classList.remove('rate-anim-disabled')
  document.querySelector('#s5 .main-title').classList.remove('rate-anim-disabled')
}

function disablePointAnim() {
  document.querySelector('#s6 .point-cont').classList.add('rate-anim-disabled')
  document.querySelector('#s6 .anchor-down').classList.add('rate-anim-disabled')
  document.querySelector('#s6 .main-title').classList.add('rate-anim-disabled')
}

function enablePointAnim() {
  document.querySelector('#s6 .point-cont').classList.remove('rate-anim-disabled')
  document.querySelector('#s6 .anchor-down').classList.remove('rate-anim-disabled')
  document.querySelector('#s6 .main-title').classList.remove('rate-anim-disabled')
}

function disableSliderAnim() {
  document.querySelector('#s7 .team-slider').classList.add('rate-anim-disabled')
  document.querySelector('#s7 .anchor-down').classList.add('rate-anim-disabled')
  document.querySelector('#s7 .main-title').classList.add('rate-anim-disabled')
}

function enableSliderAnim() {
  document.querySelector('#s7 .team-slider').classList.remove('rate-anim-disabled')
  document.querySelector('#s7 .anchor-down').classList.remove('rate-anim-disabled')
  document.querySelector('#s7 .main-title').classList.remove('rate-anim-disabled')
}

function disableFadeAnim() {
  document.querySelector('#s8 .anchor-down').classList.add('rate-anim-disabled')
  document.querySelector('#s8 .main-title').classList.add('rate-anim-disabled')
  document.querySelector('#s8 .fb-blue').classList.add('rate-anim-disabled')
  document.querySelector('#s8 .fb-green').classList.add('rate-anim-disabled')
  document.querySelector('#s8 .fb-pink').classList.add('rate-anim-disabled')
}

function enableFadeAnim() {
  document.querySelector('#s8 .anchor-down').classList.remove('rate-anim-disabled')
  document.querySelector('#s8 .main-title').classList.remove('rate-anim-disabled')
  document.querySelector('#s8 .fb-blue').classList.remove('rate-anim-disabled')
  document.querySelector('#s8 .fb-green').classList.remove('rate-anim-disabled')
  document.querySelector('#s8 .fb-pink').classList.remove('rate-anim-disabled')
}

function disableSiteAnim() {
  document.querySelector('#s9 .main-title').classList.add('rate-anim-disabled')
  document.querySelector('#s9 .sites-cont').classList.add('rate-anim-disabled')
}

function enableSiteAnim() {
  document.querySelector('#s9 .main-title').classList.remove('rate-anim-disabled')
  document.querySelector('#s9 .sites-cont').classList.remove('rate-anim-disabled')
}
function disableLastAnim() {
  document.querySelector('#s10 .lp-sh').classList.add('rate-anim-disabled')
  document.querySelector('#s10 .lp-q').classList.add('rate-anim-disabled')
}

function enableLastAnim() {
  document.querySelector('#s10 .lp-sh').classList.remove('rate-anim-disabled')
  document.querySelector('#s10 .lp-q').classList.remove('rate-anim-disabled')
}
let ratelist = [...document.querySelectorAll(".site")];

window.onload = function () {
  fullpage_api.silentMoveTo(fpsec);
  document.querySelectorAll(`[data-rate-category="${dt_cat_ls}"]`).forEach(rate => {
    rate.style.display = 'block'
  })
  document.querySelectorAll(`[data-point-rate="${dt_rate_ls}"]`).forEach(rate => {
    rate.style.display = 'flex'
  })
  if (rate_anim === null) {
    disableRateAnim();
  }
  if (point_anim === null) {
    disablePointAnim();
  }
  enableSliderAnim();
  // if (slider_anim === null) {
  //   disableSliderAnim();
  // }
  if (fade_anim === null) {
    disableFadeAnim();
  }
  if (site_anim === null) {
    disableSiteAnim();
  }
  if (last_anim === null) {
    disableLastAnim();
  }
  document.querySelectorAll('.site').forEach(rate => {
    rate.style.display = 'none';
  })
  if (window.matchMedia("(max-width: 480px)").matches) {
    ratelist.slice(0, 2).forEach(rate => {
      rate.style.display = 'flex';
    })
  } else if (window.matchMedia("(max-width: 991px)").matches) {
    ratelist.slice(0, 4).forEach(rate => {
      rate.style.display = 'flex';
    })
  } else {
    ratelist.slice(0, 3).forEach(rate => {
      rate.style.display = 'flex';
    })
  }
  document.querySelector('.load-more').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.site').forEach(rate => {
      rate.style.display = 'flex';
    })
    this.style.display = 'none';
  }, false);
}
const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  slidesPerView: 4,
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
document.querySelectorAll('.rate').forEach(btn => {
  btn.addEventListener('click', () => {
    fullpage_api.moveSectionDown();
  })
})
document.querySelectorAll('.anchor-top').forEach(btn => {
  btn.addEventListener('click', () => {
    fullpage_api.moveTo('page1');
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
document.querySelector('#defAccordion').click()

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

document.querySelectorAll('.dt-category').forEach(cat => {
  cat.addEventListener('click', () => {
    document.querySelectorAll('.rate').forEach(rate => {
      rate.style.display = 'none'
    })
    let dt_cat = cat.getAttribute('data-category');
    dt_cat_ls = dt_cat
    window.sessionStorage.setItem('category', dt_cat)
    document.querySelectorAll(`[data-rate-category="${dt_cat}"]`).forEach(rate => {
      rate.style.display = 'block'
    })
  })
})
document.querySelectorAll('.dt-budget').forEach(bud => {
  bud.addEventListener('click', () => {
    let dt_bud = bud.getAttribute('data-budget');
    dt_budget_ls = dt_bud
    window.sessionStorage.setItem('budget', dt_bud)
  })
})
document.querySelectorAll('.rate').forEach(cat => {
  cat.addEventListener('click', () => {
    document.querySelectorAll('.rate-point').forEach(rate => {
      rate.style.display = 'none'
    })
    let dt_cat = cat.getAttribute('data-rate');
    
    dt_rate_ls = dt_cat
    window.sessionStorage.setItem('rate', dt_cat)
    document.querySelectorAll(`[data-point-rate="${dt_cat}"]`).forEach(rate => {
      rate.style.display = 'flex'
    })
  })
})