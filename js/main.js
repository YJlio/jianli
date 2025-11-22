(function ($) {
  'use strict';

  function enableSmoothScroll() {
    $('.scroll').on('click', function (event) {
      var target = this.hash ? $(this.hash) : null;

      if (!target || !target.length) {
        return;
      }

      event.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top }, 1000);
    });
  }

  function initTabs() {
    var $tabContainer = $('#horizontalTab');

    if ($tabContainer.length && typeof $.fn.easyResponsiveTabs === 'function') {
      $tabContainer.easyResponsiveTabs({
        type: 'default',
        width: 'auto',
        fit: true
      });
    }
  }

  function initSwipebox() {
    if (typeof $.fn.swipebox === 'function') {
      $('.swipebox').swipebox();
    }
  }

  function initBackToTop() {
    if (typeof $.fn.UItoTop === 'function') {
      $().UItoTop({ easingType: 'easeOutQuart' });
    }
  }

  $(function () {
    enableSmoothScroll();
    initTabs();
    initSwipebox();
    initBackToTop();
  });
})(jQuery);
