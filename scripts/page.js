// ========================= EECS 493 Assignment 2 Starter Code =========================

$(document).ready(function () {

  $(".accordion").on("click", function () {
    const panel = $(this).next(".panel");

    panel.slideToggle();

  });

});
