var hoverClass = "grid-hover";
var origH = 670;
var origW = 833;

$(document).ready(function(){
  for (var i = 1; i <= 16; i++) {
    for (var o = 1; o <= 16; o++) {
     $('.wrapper').append($('<div class="grid"></div>'));
    }
  }

  $('.grid').hover(function(){
    $(this).removeClass("grid");
    $(this).addClass(hoverClass);
  });

});

function doReset(){
  var _user = prompt("Resetting... do you want to change the number of grids (Y/N)?").toUpperCase();
  if(_user == "N"){
    rmvGrid();
    for(i = 1; i <= 16; i++){
      for(o = 1; o <= 16; o++){
        $('.wrapper').append($('<div class="grid"></div>'));
      }
      $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px"});
    }

    $('.grid').hover(function(){
      $(this).removeClass("grid");
      $(this).addClass(hoverClass);
      $('.grid-hover').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px"});
    });
  }else if (_user == "Y"){
    var _numCol = prompt("How many columns (Warning: Don't put larger numbers or it will crash your browser!)?");
    if (_numCol > 0){
      rmvGrid();
      for(i = 1; i <=_numCol; i++){
        for(o = 1; o <=_numCol; o++){
          $('.wrapper').append($('<div class="grid"></div>'));
        }
        $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px"});
      }

      $('.grid').hover(function(){
        $(this).removeClass("grid");
        $(this).addClass(hoverClass);
        $('.grid-hover').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px"});
      });
    }else{
      alert("Invalid input! Resetting the sketchboard to its default mode...");
      $('.grid-hover').addClass("grid");
      $('.grid-hover').removeClass("grid-hover");
    }
  }else{
    alert("Invalid input! Resetting the sketchboard to its default mode...");
    $('.grid-hover').addClass("grid");
    $('.grid-hover').removeClass("grid-hover");
  }
}

function doColor(){
  var _user = prompt("Resetting... do you want to change the number of grids (Y/N)?").toUpperCase();
  if(_user == "N"){
    rmvGrid();
    for(i = 1; i <= 16; i++){
      for(o = 1; o <= 16; o++){
        $('.wrapper').append($('<div class="grid"></div>'));
      }
      $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px", "background-color": "black"});
    }

    $('.grid').hover(function(){
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $(this).removeClass("grid");
        $(this).addClass(hoverClass);
        $(this).css({"height": origH/_numCol+"px", "width": origW/_numCol+"px", "background-color": "#"+randomColor});
    });
  }else if (_user == "Y"){
    var _numCol = prompt("How many columns (Warning: Don't put larger numbers or it will crash your browser!)?");
    if (_numCol > 0){
      rmvGrid();
      for(i = 1; i <=_numCol; i++){
        for(o = 1; o <=_numCol; o++){
          $('.wrapper').append($('<div class="grid"></div>'));
        }
        $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px"});
      }

      $('.grid').hover(function(){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        $(this).removeClass("grid");
        $(this).addClass(hoverClass);
        $(this).css({"height": origH/_numCol+"px", "width": origW/_numCol+"px", "background-color": "#"+randomColor});
      });
    }else{
      alert("Invalid input! Resetting the sketchboard to its default mode...");
      $('.grid-hover').addClass("grid");
      $('.grid-hover').removeClass("grid-hover");
    }
  }else{
    alert("Invalid input! Resetting the sketchboard to its default mode...");
    $('.grid-hover').addClass("grid");
    $('.grid-hover').removeClass("grid-hover");
  }
}

function doOpacity(){
  var _user = prompt("Resetting... do you want to change the number of grids (Y/N)?").toUpperCase();
  if(_user == "N"){
    rmvGrid();
    for(i = 1; i <= 16; i++){
      for(o = 1; o <= 16; o++){
        $('.wrapper').append($('<div class="grid"></div>'));
      }
      $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px", "background-color": "black"});
    }

    $('.grid').hover(function(){
      $(this).css("opacity", "-=0.1");
    });
  }else if (_user == "Y"){
    var _numCol = prompt("How many columns (Warning: Don't put larger numbers or it will crash your browser!)?");
    if (_numCol > 0){
      rmvGrid();
      for(i = 1; i <=_numCol; i++){
        for(o = 1; o <=_numCol; o++){
          $('.wrapper').append($('<div class="grid"></div>'));
        }
        $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px"});
      }

      $('.grid').hover(function(){
        $(this).css("opacity", "-=0.1");
      });
    }else{
      alert("Invalid input! Resetting the sketchboard to its default mode...");
      $('.grid-hover').addClass("grid");
      $('.grid-hover').removeClass("grid-hover");
    }
  }else{
    alert("Invalid input! Resetting the sketchboard to its default mode...");
    $('.grid-hover').addClass("grid");
    $('.grid-hover').removeClass("grid-hover");
  }
}

function doTrailing(){
  var _user = prompt("Resetting... do you want to change the number of grids (Y/N)?").toUpperCase();
  if(_user == "N"){
    rmvGrid();
    for(i = 1; i <= 16; i++){
      for(o = 1; o <= 16; o++){
        $('.wrapper').append($('<div class="grid"></div>'));
      }
      $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px", "background-color": "black"});
    }

    $(".grid").hover(
       function() {
          $(this).fadeIn(100);
       },
       function() {
          $(this).fadeOut(200);
          $(this).fadeIn(200);
       }
    );
  }else if (_user == "Y"){
    var _numCol = prompt("How many columns (Warning: Don't put larger numbers or it will crash your browser!)?");
    if (_numCol > 0){
      rmvGrid();
      for(i = 1; i <=_numCol; i++){
        for(o = 1; o <=_numCol; o++){
          $('.wrapper').append($('<div class="grid"></div>'));
        }
        $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px"});
      }

      $(".grid").hover(
         function() {
            $(this).fadeIn(100);
         },
         function() {
            $(this).fadeOut(200);
            $(this).fadeIn(200);
         }
      );
    }else{
      alert("Invalid input! Resetting the sketchboard to its default mode...");
      $('.grid-hover').addClass("grid");
      $('.grid-hover').removeClass("grid-hover");
    }
  }else{
    alert("Invalid input! Resetting the sketchboard to its default mode...");
    $('.grid-hover').addClass("grid");
    $('.grid-hover').removeClass("grid-hover");
  }
}

function doTrailColor(){
  var _user = prompt("Resetting... do you want to change the number of grids (Y/N)?").toUpperCase();
  if(_user == "N"){
    rmvGrid();
    for(i = 1; i <= 16; i++){
      for(o = 1; o <= 16; o++){
        $('.wrapper').append($('<div class="grid"></div>'));
      }
      $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px", "background-color": "black"});
    }

    $(".grid").hover(
       function() {
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          $(this).css({"background-color": "#"+randomColor});
          $(this).fadeIn(100);
       },
       function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
          $(this).css({"background-color": "#"+randomColor});
          $(this).fadeOut(200);
          $(this).fadeIn(200);
          $(this).css({"background-color": "black"});
       }
    );
  }else if (_user == "Y"){
    var _numCol = prompt("How many columns (Warning: Don't put larger numbers or it will crash your browser!)?");
    if (_numCol > 0){
      rmvGrid();
    for(i = 1; i <= _numCol; i++){
      for(o = 1; o <= _numCol; o++){
        $('.wrapper').append($('<div class="grid"></div>'));
      }
      $('.grid').css({"height": origH/_numCol+"px", "width": origW/_numCol+"px", "background-color": "black"});
    }

    $(".grid").hover(
       function() {
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          $(this).css({"background-color": "#"+randomColor});
          $(this).fadeIn(100);
       },
       function() {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
          $(this).css({"background-color": "#"+randomColor});
          $(this).fadeOut(200);
          $(this).fadeIn(200);
          $(this).css({"background-color": "black"});
       }
    );
    }else{
      alert("Invalid input! Resetting the sketchboard to its default mode...");
      $('.grid-hover').addClass("grid");
      $('.grid-hover').removeClass("grid-hover");
    }
  }else{
    alert("Invalid input! Resetting the sketchboard to its default mode...");
    $('.grid-hover').addClass("grid");
    $('.grid-hover').removeClass("grid-hover");
  }
}

function rmvGrid(){
  $('.grid').remove();
  $('.grid-hover').remove();
}