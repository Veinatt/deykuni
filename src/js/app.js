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

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: 'body',
    offset: 100,
    duration: 0,
    triggerHook: 0,
  })
  .setClassToggle('.header-cont', 'active')
  .addTo(controller);

new fullpage('#fullpage', {
  //options here
  afterLoad: function() {
    if(document.querySelector('#s1').classList.contains('active')) {
      document.querySelector('.header-cont').classList.remove('active')
    } else {
      document.querySelector('.header-cont').classList.add('active')
    }
  },
});

document.querySelectorAll('.anchor-down').forEach(btn => {
  btn.addEventListener('click', () => {
    fullpage_api.moveSectionDown();
  })
})
var acc = document.getElementsByClassName("accordion");
var i;

document.querySelectorAll('.acc').forEach(acc => {
  acc.addEventListener("click", function() {
    document.querySelectorAll('.acc').forEach(accs => {
      accs.classList.remove("active");
      accs.nextElementSibling.style.maxHeight = null;
    })
    this.classList.add("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
})
document.querySelector('#s2 .acc:first-child').click()


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

