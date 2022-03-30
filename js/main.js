(function ($) {

  "use strict";

  var fullHeight = function () {

    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });

  };
  fullHeight();

  $('#sidebarCollapse').on('click', function () {
    $('#base-sidebar').toggleClass('active');
  });

})(jQuery);
/** SideNavbar Arrow **/
$(document).ready(function () {
  $(".sidebarCollapse").click(function () {
    $(".rotate").toggleClass('right');
  });
});
/** Dispatch Arrow **/
$(document).ready(function () {
  $(".dispatchscreens_title").click(function () {
    $(".dispatch-rotate").toggleClass('down');
  });
});

$(document).ready(function () {
  $(".dispatches_title").click(function () {
    $(".dispatch-rotate-dispatches").toggleClass('down');
  });
});

$(document).ready(function () {
  $(".skill_title").click(function () {
    $(".dispatch-rotate-skills").toggleClass('down');
  });
});

$(document).ready(function () {
  $(".currentlyopendispatches_title").click(function () {
    $(".dispatch-rotate-currentlyopendispatches").toggleClass('down');
  });
});

$(document).ready(function () {
  $(".dispatchesreported_title").click(function () {
    $(".dispatch-rotate-dispatchesreported").toggleClass('down');
  });
});

/** Dispatch / Performance Mobile View Toggle **/
$(document).ready(function () {
  $(".mobile-screen").on({

    click: function () {
      $(this).toggleClass("selected-nav");
    }
  });
});

$("#sidebarCollapse").on("click", function () {
  if ($("#base-sidebar").hasClass("active")) {
    return $("#base-sidebar").toggleClass("show");
  }
});

$("#burger-menu-button").on("click", function () {
  $('#base-sidebar').removeClass('active');
  $(".rotate").toggleClass('right');
});

/** Modal **/
$(function () {
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

$(function () {
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

$(function () {
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
$(document).ready(function () {
  $(document).on('click', '.fa-star', function () {
    $(this).toggleClass("favorite-icon");
  });
});

/** Performance Arrow **/
$(document).ready(function () {
  $(".linesrunning_title").click(function () {
    $(".linesrunning-rotate").toggleClass('down');
  });
});

$(document).ready(function () {
  $(".lines-running-header").on({

    click: function () {
      $(this).toggleClass("selected-nav");
    }
  });
});

$(document).ready(function () {
  $(".on-time-pm-completion-header").on({

    click: function () {
      $(this).toggleClass("selected-nav");
    }
  });
});

$(document).ready(function () {
  $(".ontime_title").click(function () {
    $(".ontime-rotate").toggleClass('down');
  });
});

/** Oee */
$(document).ready(function () {
  $(".oee_title").click(function () {
    $(".oee-rotate").toggleClass('down');
  });
});
$(document).ready(function () {
  $(".oee-header").on({

    click: function () {
      $(this).toggleClass("selected-nav");
    }
  });
});
/** Top Spares */
$(document).ready(function () {
  $(".topspares_title").click(function () {
    $(".topspares-rotate").toggleClass('down');
  });
});

$(document).ready(function () {
  $(".topspares-header").on({

    click: function () {
      $(this).toggleClass("selected-nav");
    }
  });
});

/** Downtime */
$(document).ready(function () {
  $(".downtime_title").click(function () {
    $(".downtime-rotate").toggleClass('down');
  });
});

$(document).ready(function () {
  $(".topspares-header").on({

    click: function () {
      $(this).toggleClass("selected-nav");
    }
  });
});

$(function () {
  $("#expand").on("click", function () {
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
$(document).ready(function () {
  $(".downoccurence_title").click(function () {
    $(".downoccurence-rotate").toggleClass('down');
  });
});

/** Production Machine Downtime */
$(document).ready(function () {
  $(".production-machine_title").click(function () {
    $(".production-machine-rotate").toggleClass('down');
  });
});

/** View Icon Navbar Button */
$(document).ready(function () {
  $('.filterButton').hide();
  $('.viewButton').hide();

  $('#view').click(function () {
    $('.viewButton').toggle();
    $('.filterButton').hide();
  });
  /** Filter Icon Navbar Button */
  $('#filter').click(function () {
    $('.filterButton').toggle();
    $('.viewButton').hide();
  });
});

/** Filter Icon Navbar Button - Setup*/
$(document).ready(function () {
  $('.filterButton-setup').hide();

  $('#filterSetup').click(function () {
    $('.filterButton-setup').toggle();
  });
});

/** Setup.html Table Data */
$(document).ready(function () {
  $('.status-body2').hide();

  $('#statusTable').click(function () {
    $('.status-body2').toggle();
    $('.mainbody-table').hide();
    $('.header-table').hide();
    $('.clouddispatch-navbar').hide();
  });
  $('#save, #save2').click(function () {
    $('.mainbody-table').show();
    $('.header-table').show();
    $('.status-body2').hide();
    $('.clouddispatch-navbar').show();
  });
});

$('#rootCause').click(function () {
  $('.mainBody-status').hide();
  $('.rootcause-button').hide();
});


$('#rootcause-down').click(function () {
  $('.mainBody-status').show();
  $('.rootcause-button').show();
});



$('#rootResources').click(function () {
  $('.fender-3030-body').hide();
  $('.rootresource-button').hide();
});

$('#rootresource-down').click(function () {
  $('.fender-3030-body').show();
  $('.rootresource-button').show();
});
/**
function readURL() {
	//	rehide the image and remove its current "src",
	//	this way if the new image doesn't load,
	//	then the image element is "gone" for now
	$('#blah').attr('src', '').hide();
	if (this.files && this.files[0]) {
		var reader = new FileReader();
		$(reader).load(function(e) {
			$('#blah')
				//	first we set the attribute of "src" thus changing the image link
				.attr('src', e.target.result)	//	this will now call the load event on the image
		});
		reader.readAsDataURL(this.files[0]);
	}
}

//	below makes use of jQuery chaining. This means the same element is returned after each method, so we don't need to call it again
$('#blah')
	//	here we first set a "load" event for the image that will cause it change it's height to a set variable
	//		and make it "show" when finished loading
	.load(function(e) {
		//	$(this) is the jQuery OBJECT of this which is the element we've called on this load method
		$(this)
			//	note how easy adding css is, just create an object of the css you want to change or a key/value pair of STRINGS
			.css('height', '20px')	//	or .css({ height: '200px' })
			//	now for the next "method" in the chain, we show the image when loaded
			.show();	//	just that simple
	})
	//	with the load event set, we now hide the image as it has nothing in it to start with
	.hide();	//	done

$("#imgInp").change(readURL); 
*/