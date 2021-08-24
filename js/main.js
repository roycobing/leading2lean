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
/** SideNavbar Arrow **/
$(document).ready(function() {
	$( ".sidebarCollapse" ).click( function() {
        $(".rotate").toggleClass('right');
    });
});
/** Dispatch Arrow **/
$(document).ready(function() {
	$( ".dispatch-toggler" ).click( function() {
        $(".dispatch-rotate").toggleClass('down');
    });
});

$(document).ready(function() {
	$( ".dispatch-toggler-dispatches" ).click( function() {
        $(".dispatch-rotate-dispatches").toggleClass('down');
    });
});

$(document).ready(function() {
	$( ".dispatch-toggler-skills" ).click( function() {
        $(".dispatch-rotate-skills").toggleClass('down');
    });
});

$(document).ready(function() {
	$( ".dispatch-toggler-currentlyopendispatches" ).click( function() {
        $(".dispatch-rotate-currentlyopendispatches").toggleClass('down');
    });
});

$(document).ready(function() {
	$( ".dispatch-toggler-dispatchesreported" ).click( function() {
        $(".dispatch-rotate-dispatchesreported").toggleClass('down');
    });
});

$(document).ready(function(){
					$(".dispatch-screens").on({

						click: function(){
							$(this).css("background-color", "#44B4CD");
              $(this).css("font-size", "12px");
              $(this).css("color", "#fff");
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
