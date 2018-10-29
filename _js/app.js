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
  //Event listener
  $("#search").keyup(filterImages);


// Keep for future reference if DOM doesn't load full size images through href.

//   const imageArray = [
//     'photos/01.jpg',
//     'photos/02.jpg',
//     'photos/03.jpg',
//     'photos/04.jpg',
//     'photos/05.jpg',
//     'photos/06.jpg',
//     'photos/07.jpg',
//     'photos/08.jpg',
//     'photos/09.jpg',
//     'photos/10.jpg',
//     'photos/11.jpg',
//     'photos/12.jpg'
//   ];

//   function preload(arrayOfImages) {
//     $(arrayOfImages).each(function(){
//         $('<img/>')[0].src = this;
//     });
// }

//   // Usage:

//   preload(imageArray);

});