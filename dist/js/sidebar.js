(function (e) {
  function initMetisMenu() {
    e("#menu").metisMenu();
  }
  function initSidebarEnable() {
    e(document).on("click", ".menu_toggler", function (t) {
      t.preventDefault();
      e("body").toggleClass("side_enable");
    });
  }

  function init() {
    initMetisMenu();
    initSidebarEnable();
  }

  init();
})(jQuery);
