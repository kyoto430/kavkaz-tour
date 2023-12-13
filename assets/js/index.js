console.log('kyoto430 template js running...');

// Меню бургер
function burger() {
  const burgerBtns = document.querySelectorAll('.menu__burger');
  const menus = document.querySelectorAll('.header-adaptive__menu');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlays = document.querySelectorAll('.overlay');

  burgerBtns.forEach(function (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      burgerBtn.classList.toggle('active');
      menus.forEach(function (menu) {
        menu.classList.toggle('active');
      });
      overlays.forEach(function (overlay) {
        overlay.classList.toggle('active');
      });
    });
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('lock');
      burgerBtns.forEach(function (burgerBtn) {
        burgerBtn.classList.remove('active');
      });
      menus.forEach(function (menu) {
        menu.classList.remove('active');
      });
      overlays.forEach(function (overlay) {
        overlay.classList.remove('active');
      });
    });
  });
}

burger();

//Попапы
function popups() {
  let popupLinks = document.querySelectorAll('.popup-link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock-padding');

  let unlock = true;

  const timeout = 500;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.getElementsByTagName('body').offsetWidth +
      'px';
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('locker');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('locker');
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
}

popups();

function showMoreText() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButtons = document.querySelectorAll('.btn-show');
    const hiddenText = document.querySelectorAll('.text-hidden');

    showMoreButtons.forEach(function (showMoreButton) {
      showMoreButton.addEventListener('click', function () {
        hiddenText.forEach(function (text) {
          if (text.style.transform !== 'scale(1)') {
            text.style.position = 'initial';
            text.style.transform = 'scale(1)';
            showMoreButton.innerText = 'Скрыть весь текст';
          } else {
            text.style.position = 'absolute';
            text.style.transform = 'scale(0)';
            showMoreButton.innerText = 'Показать весь текст';
          }
        });
      });
    });
  });
}

showMoreText();

function showMoreCards() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButtons = document.querySelectorAll('.btn-show__cards');
    const hiddenCards = document.querySelectorAll('.card-hidden');

    showMoreButtons.forEach(function (showMoreButton) {
      showMoreButton.addEventListener('click', function () {
        hiddenCards.forEach(function (card) {
          if (card.style.transform !== 'scale(1)') {
            card.style.position = 'initial';
            card.style.transform = 'scale(1)';
            showMoreButton.innerText = 'Скрыть';
          } else {
            card.style.position = 'absolute';
            card.style.transform = 'scale(0)';
            showMoreButton.innerText = 'Показать больше';
          }
        });
      });
    });
  });
}

showMoreCards();

function showMoreProgramm() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButtons = document.querySelectorAll('.btn-show__programm');
    const firstProgramm = document.querySelector(
      '.programm__list .programm__list-item'
    );
    const firstElement = firstProgramm.querySelector('.btn-show__programm');

    showMoreButtons.forEach(function (showMoreButton) {
      firstElement.click();
      let menu = showMoreButton.previousElementSibling;
      showMoreButton.addEventListener('click', function () {
        if (menu.style.transform !== 'scale(1)') {
          menu.style.position = 'initial';
          menu.style.transform = 'scale(1)';
          if (window.innerWidth >= 425) {
            menu.parentElement.style.paddingTop = '40px';
            menu.parentElement.style.paddingBottom = '40px';
          } else {
            menu.parentElement.style.paddingTop = '24px';
            menu.parentElement.style.paddingBottom = '24px';
          }
          showMoreButton.innerText = 'Скрыть';
        } else {
          menu.style.position = 'absolute';
          menu.style.transform = 'scale(0)';
          menu.parentElement.style.paddingTop = '20px';
          menu.parentElement.style.paddingBottom = '20px';
          showMoreButton.innerText = 'Раскрыть';
        }
      });
    });
  });
}

showMoreProgramm();

function hideBlocks() {
  const tourCards = document.querySelectorAll('.tours-page .tours__card');
  const programmCards = document.querySelectorAll('.programm__sublist');
  programmCards.forEach(function (programmCard) {
    programmCard.classList.add('programm-hidden');
  });
  if (window.innerWidth >= 1024 && window.innerWidth <= 2560) {
    for (let i = 9; i < tourCards.length; i += 1) {
      tourCards[i].classList.add('card-hidden');
    }
  } else {
    if (window.innerWidth <= 1023 && window.innerWidth > 590) {
      for (let i = 6; i < tourCards.length; i += 1) {
        tourCards[i].classList.add('card-hidden');
      }
    } else {
      for (let i = 4; i < tourCards.length; i += 1) {
        tourCards[i].classList.add('card-hidden');
      }
    }
  }
}

hideBlocks();
