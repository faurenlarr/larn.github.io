

$(window).scroll(function() {


    if ($(this).scrollTop() <= $('#sectiona').offset().top - 50) {
        // $( ".navbar" ).fadeOut(500);
    }

    ///Block A
    if ($(this).scrollTop() >= $('#sectiona').offset().top - 25) {
        // $( ".navbar" ).fadeIn(500);
        $(".pic").removeClass('hidden').addClass('show slide');
        $(".words").removeClass('hidden').addClass('show slide');
        $(".contact").removeClass('hidden').addClass('show slide');
        $('.info').removeClass('hidden').addClass('show slide');

    }

    ///Block B
  //   if ($(this).scrollTop() >= $('#sectionb').offset().top - 25) {
  //     $('nav a').stop().removeClass('active');
  //     $('nav a:eq(1)').stop().addClass('active');
  //     $( ".projectA, .projectB, .projectC, .projectD" ).removeClass('invis').addClass('vis popped');
  //     $('#barB').stop().animate({ left: '0px' });
  // } else {
  //     $('#barB').stop().animate({ left: '-1000px' });
  // }


    ///Block C
  //   if ($(this).scrollTop() >= $('#blockC').offset().top - 25) {
  //     $('nav a').removeClass('active');
  //     $('nav a:eq(2)').addClass('active');
  //     $('#barC').stop().animate({ left: '0px' });
  //     $("#bye, #hold").show();
  // } else {
  //       $('#barC').stop().animate({ left: '-1000px' });
  //       $('#bye, #hold').hide();
  //   }

    ///Block D
  //   if ($(this).scrollTop() >= $('#blockD').offset().top - 25) {
  //     $('nav a').removeClass('active');
  //     $('nav a:eq(3)').addClass('active');
  // } else {
  //
  // }
});



(function() {


      $(".header").on("mouseover", ".fa-hand-spock-o", function() {
          $('html, body').animate({
              scrollTop: $("#sectiona").offset().top }, 1000);
          });

      // $('.pic').on('mouseover', 'img', function(){
      //     $('img').addClass('changeimage');
      // });







}());
