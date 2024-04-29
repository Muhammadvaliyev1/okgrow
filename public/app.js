document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.hunburger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('left-0');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

const xburger = document.getElementById('hello');

  xburger.addEventListener('click', () => {
      xburger.classList.toggle('active');
  });

  const budy = document.getElementById('budy');

  xburger.addEventListener('click', () => {
      budy.classList.toggle('overflow-hidden');
  });

  function showDropdownOptions() {
    let option = document.getElementById("options");
    option.classList.toggle("hidden");
  }

  function showDropdownOptions2() {
    let option2 = document.getElementById("options2");
    option2.classList.toggle("hidden");
  }

  function showDropdownOptions3() {
    let option3 = document.getElementById("options3");
    option3.classList.toggle("hidden");
  }