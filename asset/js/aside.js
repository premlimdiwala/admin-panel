$('.fa-bars').click(function(){
    $('aside').toggleClass('w-60');
    $('header').toggleClass('ml-60 outer_header');    
    $('.main_banner').toggleClass('ml-60');
    $('.field_name').toggleClass('d-none');
    $('.menu>ul>li>h2').toggleClass('d-none');
    // $('.menu_filed>a>.menus_icon').toggleClass('margin_right_20');
    $('.menu_filed').toggleClass('padding_none');
    $('.menu_filed>.fa-chevron-right').toggleClass('d-none');
    $('.logo').toggleClass('d-none');
    $('.only_logo').toggleClass('d-block');
    $('.only_logo').toggleClass('mr_10');
  

});


  

//   dropdown
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

// icon direction change
$('.fa-chevron-right').click(function(){
  $(this).toggleClass("rotate-90")
});

// view all btn click
$('.view_all_btn2').click(function(){
  $('.time_duration').toggleClass('d-block');
});
$('.view_all_btn3').click(function(){
  $('.time_duration1').toggleClass('d-block');
});
$('.view_all_btn4').click(function(){
  $('.time_duration2').toggleClass('d-block');
});
$('.view_all_btn5').click(function(){
  $('.time_duration5').toggleClass('d-block');
});
$('.view_all_btn7').click(function(){
  $('.time_duration7').toggleClass('d-block');
});