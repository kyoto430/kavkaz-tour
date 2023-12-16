Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
});

function showMoreProgramm() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButtons = document.querySelectorAll('.btn-show__programm');
    const firstProgramm = document.querySelector(
      '.programm__list .programm__list-item'
    );
    const firstElement = firstProgramm.querySelector('.btn-show__programm');

    showMoreButtons.forEach(function (showMoreButton) {
      if(firstElement
        ) {
        firstElement.click();
      }
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