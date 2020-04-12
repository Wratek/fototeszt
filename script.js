//// *************** THIS CODE PIECE IS FROM https://www.w3schools.com/css/tryit.asp?filename=trycss_image_modal_js


function openFunction(src, alt) {
  "use strict";
  document.getElementById('myModal').style.display = "block";
  document.getElementById("img01").src = src;
  document.getElementById("caption").innerHTML = alt;
}

// When the user clicks on <span> (x), close the modal
function closeFunction() {
  "use strict";
  document.getElementById('myModal').style.display = "none";
}