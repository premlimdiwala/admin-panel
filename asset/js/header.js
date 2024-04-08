$('.flag').click(function(){
    // alert('hello');
    $('.cont_lang').toggleClass('d-block');
});
$('.admin_men').click(function(){
    $('.admin_feature').toggleClass('d-block');
});
$('.theme').click(function(){
    $('body').toggleClass('body_white');
    $('header').toggleClass('header_white');
    $('aside').toggleClass('aside_blue');
    $('.sub_apps').toggleClass('sub_apps_white');
    $('.banner_sub_head').toggleClass('dark_f_color');
    $('.job_2').toggleClass('dark_f_color');
    $('.fa-forward').toggleClass('dark_f_color');
    $('.main_grid>.box ').toggleClass('box_light');
    

});
$('.apps').click(function(){
  $('.sub_apps').toggleClass('d-block');
});

// notification 
$('.cart').click(function(){
  $('.cart_items').toggleClass('d-block');
});
$('.bell').click(function(){
  $('.notification_items').toggleClass('d-block');
});
$('.sortby_btn').click(function(){
  $('.sub_sort').toggleClass('d-block');
});
// theme change button sun and moon
function myFunction(x) {
    x.classList.toggle("fa-moon");
  }
// 
function xmark(x) {
  x.classList.toggle("fa-xmark");
}
// function myFunction(x) {
//   x.classList.toggle("fa-xmark");
// }
//   name effect
let yourtext = [
    ["son tylor.", "#8a8585"],
 ];
  
  let x = 0;
  let y = 0;
  //how fast typing is
  let wait = 300;
  //how long you want to text stay before overwriting
  let additionalwait = 5;
  let txt = yourtext[0][0].split("");
  let out = "";
  let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
      out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
      if (y == yourtext.length - 1) {
        y = 0;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      } else {
        y += 1;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      }
    }
  }, wait);

  // setting drop down
  $('.setting').click(function(){
    $('.sub_seting').toggleClass('d-block');
  })
  // full screen
  function toggleFullScreen(elem) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
      if (elem.requestFullScreen) {
        elem.requestFullScreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  // scroll button 
  window.addEventListener("scroll",function(){
    scrolltotopbottom.style.opacity=
    (this.window.scrollY > 50) ? "1" : "0";
  });
  scrolltotopbottom.addEventListener("click",function(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  })