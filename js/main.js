$(document).ready(function () {
    // run function on initial page load
    collage();
    imgSize();
    form();
    // run function on resize of the window
    $(window).resize(function () {
      imgSize();
    });
    // run function on scroll
    $(window).scroll(function () {

    });
    // $(window).load(function() {
    //   loader();
    // });
});
function imgSize() {
  var ids = ["#hat","#bow", "#camera", "#numbers", "#pipe", "#smoke", "#stand", "#viewfinder"];
  var widths = ["1725","796", "2270", "784", "1835", "677", "2442", "847"];
  var w = $("#container").width();
  var h = $("#container").height();
  for (let i = 0; i < ids.length; i++) {
    var idw = widths[i];
    var nw = idw * .2 * (w / 800);
    $(ids[i]).css("width", nw);
    var nh = $(ids[i]).height();
    var xpos = Math.floor(Math.random() * (w - nw));
    var ypos = Math.floor(Math.random() * (h - nh - 150));
    $(ids[i]).css("top", (ypos + 25));
    $(ids[i]).css("left", (xpos + 100));
    $(ids[i]).removeClass("loading");
  }
}

function collage() {
  $("#hat").draggable({ containment: "#container", scroll: false, stack: "img" });
  $("#bow").draggable({ containment: "#container", scroll: false, stack: "img" });
  $("#camera").draggable({ containment: "#container", scroll: false, stack: "img" });
  $("#numbers").draggable({ containment: "#container", scroll: false, stack: "img" });
  $("#pipe").draggable({ containment: "#container", scroll: false, stack: "img" });
  $("#smoke").draggable({ containment: "#container", scroll: false, stack: "img" });
  $("#stand").draggable({ containment: "#container", scroll: false, stack: "img" });
  $("#viewfinder").draggable({ containment: "#container", scroll: false, stack: "img" });
}

function form() {
  $("#files").change(function() {
    filename = this.files[0].name;
    $('.fileupload').text(filename);
    $('.fileupload').removeClass('nonechosen');
      $('.fileupload').addClass('valid');
  });
  $('#dropdown').change(function() {
    if ($(this).val() != 'default') {
      $(this).addClass('valid');
      $(this).removeClass('nonechosen');
    }
  });
  var value = $('#dropdown option:selected').val()
  console.log(value);
  $('#sub-but').click( function(){
    console.log('submitted');
    if($('#dropdown option:selected').val() == 'default'){ 
      $('#dropdown').addClass('nonechosen');
    } else {
      $('#dropdown').removeClass('nonechosen');
    }
    if($('.fileupload').text() == 'Select File'){
      $('.fileupload').addClass('nonechosen');
    } else {
      $('.fileupload').removeClass('nonechosen');
    }
    $('#rs-sub').addClass('submitted');
  });
}