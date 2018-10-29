// JavaScript Document

$(document).ready(function() {
  "use strict";

  lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    wrapAround: true,
    showImageNumberLabel: false
  });

  function filterImages() {
    //Get value of .search input
    let $searchInput = $("#search")
      .val()
      .toUpperCase();

    //Locate all images tied to .search-box
    let $images = $(".search-box");

    //Loop through image captions in Lighthouse attr.
    for (let i = 0; i < $images.length; i++) {
      let $caption = $($images[i]).attr("data-title");
      //If matched, filter out images
      if ($caption.toUpperCase().indexOf($searchInput) > -1) {
        $($images[i]).css({ display: "" });
      } else {
        $($images[i]).css({ display: "none" });
      }
    }
  }

  $("#search").keyup(filterImages);
});
