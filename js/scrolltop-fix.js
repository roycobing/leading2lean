// CloudDispatch 3030
$(function () {
    var stickyHeaderTop = $('#stickytypeheader').offset().top;
    $(window).scroll(function () {
      if ($(window).scrollTop() > stickyHeaderTop) {
        $('#stickytypeheader').addClass('fixed');
      } else {
        $('#stickytypeheader').removeClass('fixed');
      }
    });
  });
  
  $(function highlightOnScrollElements() {
    var sections = $(".section");
    if (!sections.length) {
      return;
    }
    const topGap = Math.max(
      sections[0].getBoundingClientRect().top,
      $(sections[0]).offset().top,
      0
    );
  
    $(window)
      .on("scroll", function (e) {
        var el = sections.filter(function (i, el) {
          return (
            el.getBoundingClientRect().bottom - topGap >=
            parseInt($(el).css("height"))
          );
        });
  
        var sectionId = el.prev().is(sections)
          ? $(el).prev(".section").attr("id")
          : sections.eq(-1).attr("id");
  
        $(".scrollHighlight").each(function (_, el) {
          const href = $(el).attr("href");
          if (href.includes(sectionId)) {
            $(el).addClass("selected");
          } else {
            $(el).removeClass("selected");
          }
        });
      })
      .scroll();
  });