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
    $('#base-sidebar').toggleClass('active');
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
  if ($("#base-sidebar").hasClass("active")) {
    return $("#base-sidebar").toggleClass("show");
  }
  /** Sidebar Active Menu
  $("#base-sidebar").toggleClass("show");**/
});

$("#burger-menu-button").on("click", function() {
	$('#base-sidebar').removeClass('active');
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
/** Top Spares */
$(document).ready(function() {
  $(".topspares_title").click(function() {
    $(".topspares-rotate").toggleClass('down');
  });
});

$(document).ready(function() {
  $(".topspares-header").on({

    click: function() {
      $(this).toggleClass("selected-nav");
    }
  });
});

/** Downtime */
$(document).ready(function() {
  $(".downtime_title").click(function() {
    $(".downtime-rotate").toggleClass('down');
  });
});

$(document).ready(function() {
  $(".topspares-header").on({

    click: function() {
      $(this).toggleClass("selected-nav");
    }
  });
});

$(function() {
  $("#expand").on("click", function() {
    $("#dispatch-expand").toggleClass("newClass");
    $('.skills-column').toggleClass("hide");
    $(".weekly-codered").toggleClass("hide");
    $(".weekly-leader").toggleClass("hide");
    $(".weekly-packaging").toggleClass("hide");
    $(".weekly-workorder").toggleClass("hide");
    $(".dispatch-me").toggleClass("hide");
    $(".due").toggleClass("hide");


    $(".divB").toggleClass("hide");

  });
});

/** downoccurence */
$(document).ready(function() {
  $(".downoccurence_title").click(function() {
    $(".downoccurence-rotate").toggleClass('down');
  });
});

/** Production Machine Downtime */
$(document).ready(function() {
  $(".production-machine_title").click(function() {
    $(".production-machine-rotate").toggleClass('down');
  });
});
/** Table Data */
$(function() {
  $('tr.parent td.td-body')
    .on("click", function() {
      var idOfParent = $(this).parents('tr').attr('id');
      $('tr.child-' + idOfParent).toggle('fast');
      $(this).toggleClass("expanded");
    });

    $('#btnExpand')
      .on("click", function() {
        $('#btnCollapse').attr("disabled", false);
        $('#btnCollapse').val('Click');
        $('tr').show();
        $('.comment-section-clouddispatch').hide();
        $('.comment-section-clouddispatch-ps1').hide();
        $('.comment-section-clouddispatch-rca').hide();
        $('.comment-section-clouddispatch-mod').hide();
      });

    $('#btnCollapse').on("click", function() {
      $(this).attr("disabled", true);
      $('tr[class^=child-]').hide().children('td');
      $('.comment-section-clouddispatch').show();
      $('.comment-section-clouddispatch-ps1').show();
      $('.comment-section-clouddispatch-rca').show();
      $('.comment-section-clouddispatch-mod').show();
    });
  $('tr[class^=child-]').hide().children('td');
});

/** View Icon Navbar Button */
$(document).ready(function(){
   $('.filterButton').hide();
   $('.viewButton').hide();

   $('#view').click(function() {
      $('.viewButton').toggle();
      $('.filterButton').hide();
   });
/** Filter Icon Navbar Button */
   $('#filter').click(function() {
      $('.filterButton').toggle();
      $('.viewButton').hide();
   });
});
