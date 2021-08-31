(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

/** Mobile View Function **/
$("#sidebarCollapse").on("click", function () {
				    if ($("#sidebar").hasClass("active")) {
				        return $("#sidebar").removeClass("active show");
				    }

				    $("#sidebar").toggleClass("show");
				  });

/** SideNavbar Arrow **/
$(document).ready(function() {
	$( ".sidebarCollapse" ).click( function() {
        $(".rotate").toggleClass('right');
    });
});
/** Dispatch Arrow **/
$(document).ready(function() {
	$( ".dispatchscreens_title" ).click( function() {
        $(".dispatch-rotate").toggleClass('down');
    });
});

$(document).ready(function() {
	$( ".dispatches_title" ).click( function() {
        $(".dispatch-rotate-dispatches").toggleClass('down');
    });
});

$(document).ready(function() {
	$( ".skill_title" ).click( function() {
        $(".dispatch-rotate-skills").toggleClass('down');
    });
});

$(document).ready(function() {
	$( ".currentlyopendispatches_title" ).click( function() {
        $(".dispatch-rotate-currentlyopendispatches").toggleClass('down');
    });
});

$(document).ready(function() {
	$( ".dispatchesreported_title" ).click( function() {
        $(".dispatch-rotate-dispatchesreported").toggleClass('down');
    });
});

/** Dispatch Mobile View Toggle **/
$(document).ready(function(){
	$(".dispatch-screens").on({

	click: function(){
        $(this).toggleClass("selected-nav");
	}
    });
});



/** Modal **/
$( function() {
  $( "#sortable" ).sortable({
    revert: true
  });
  $( "#draggable" ).draggable({
    connectToSortable: "#sortable",
    helper: "clone",
    revert: "invalid"
  });
  $( "ul, li" ).disableSelection();
} );

$( function() {
  $( "#sortable2" ).sortable({
    revert: true
  });
  $( "#draggable" ).draggable({
    connectToSortable: "#sortable2",
    helper: "clone",
    revert: "invalid"
  });
  $( "ul, li" ).disableSelection();
} );

$( function() {
  $( "#sortable3" ).sortable({
    revert: true
  });
  $( "#draggable" ).draggable({
    connectToSortable: "#sortable2",
    helper: "clone",
    revert: "invalid"
  });
  $( "ul, li" ).disableSelection();
} );


// end of Modal
