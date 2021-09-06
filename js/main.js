(function($) {

  "use strict";

  var fullHeight = function() {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function() {
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();

  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });

})(jQuery);
/** SideNavbar Arrow **/
$(document).ready(function() {
  $(".sidebarCollapse").click(function() {
    $(".rotate").toggleClass('right');
  });
});
/** Dispatch Arrow **/
$(document).ready(function() {
  $(".dispatchscreens_title").click(function() {
    $(".dispatch-rotate").toggleClass('down');
  });
});

$(document).ready(function() {
  $(".dispatches_title").click(function() {
    $(".dispatch-rotate-dispatches").toggleClass('down');
  });
});

$(document).ready(function() {
  $(".skill_title").click(function() {
    $(".dispatch-rotate-skills").toggleClass('down');
  });
});

$(document).ready(function() {
  $(".currentlyopendispatches_title").click(function() {
    $(".dispatch-rotate-currentlyopendispatches").toggleClass('down');
  });
});

$(document).ready(function() {
  $(".dispatchesreported_title").click(function() {
    $(".dispatch-rotate-dispatchesreported").toggleClass('down');
  });
});

/** Dispatch / Performance Mobile View Toggle **/
$(document).ready(function() {
  $(".mobile-screen").on({

    click: function() {
      $(this).toggleClass("selected-nav");
    }
  });
});

$("#sidebarCollapse").on("click", function() {
  if ($("#sidebar").hasClass("active")) {
    return $("#sidebar").removeClass("show");
  }

  $("#sidebar").toggleClass("show");
});

/** Sidebar Active Menu **/
$(document).ready(function() {
  $(document).on('click', '.sidebar-menu', function() {
    $('.sidebar-menu').removeClass("active");
    $('.nav-link').removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function() {
  $(document).on('click', '.nav-link', function() {
    $('.nav-link').removeClass("active");
    $('.sidebar-menu').removeClass("active");
    $(this).addClass("active");
  });
});
/** Modal **/
$(function() {
  $("#sortable").sortable({
    revert: true
  });
  $("#draggable").draggable({
    connectToSortable: "#sortable",
    helper: "clone",
    revert: "invalid"
  });
  $("ul, li").disableSelection();
});

$(function() {
  $("#sortable2").sortable({
    revert: true
  });
  $("#draggable").draggable({
    connectToSortable: "#sortable2",
    helper: "clone",
    revert: "invalid"
  });
  $("ul, li").disableSelection();
});

$(function() {
  $("#sortable3").sortable({
    revert: true
  });
  $("#draggable").draggable({
    connectToSortable: "#sortable2",
    helper: "clone",
    revert: "invalid"
  });
  $("ul, li").disableSelection();
});


// end of Modal
/** Dispatches Screens - Favorite Icon **/
$(document).ready(function() {
  $(document).on('click', '.fa-star', function() {
    $(this).toggleClass("favorite-icon");
  });
});

/** Performance Arrow **/
$(document).ready(function() {
  $(".linesrunning_title").click(function() {
    $(".linesrunning-rotate").toggleClass('down');
  });
});

$(document).ready(function() {
  $(".lines-running-header").on({

    click: function() {
      $(this).toggleClass("selected-nav");
    }
  });
});

$(document).ready(function() {
  $(".on-time-pm-completion-header").on({

    click: function() {
      $(this).toggleClass("selected-nav");
    }
  });
});

$(document).ready(function() {
  $(".ontime_title").click(function() {
    $(".ontime-rotate").toggleClass('down');
  });
});

/** Oee */
$(document).ready(function() {
  $(".oee_title").click(function() {
    $(".oee-rotate").toggleClass('down');
  });
});
$(document).ready(function() {
  $(".oee-header").on({

    click: function() {
      $(this).toggleClass("selected-nav");
    }
  });
});
