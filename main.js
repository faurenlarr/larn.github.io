

$(window).scroll(function() {



    if ($(this).scrollTop() >= $('.sectiona').offset().top - 25) {
        $( ".navbar" ).fadeIn(500);
        $(".pic").removeClass('hidden').addClass('show slide');
        $('.info').removeClass('hidden').addClass('show slide');
        $('.projects').removeClass('hidden').addClass('show slide');
        $('.resume').removeClass('hidden').addClass('show slide');
        $('.contab').removeClass('hidden').addClass('show slide');
    }



    if ($(this).scrollTop() >= $('.sectionb').offset().top - 25) {
      $('.one').removeClass('hidden').addClass('show slide');
      $('.two').removeClass('hidden').addClass('show slide');
      $('.three').removeClass('hidden').addClass('show slide');
      $('.viewother').removeClass('hidden').addClass('show slide');
      $('.circles').removeClass('hidden').addClass('slide');

    }

    // if ($(this).scrollTop() >= $('.sectionc').offset().top-25) {
    //
    // }

});



(function() {


      // $(".header").on("mouseover", ".fa-hand-peace-o", function() {
      //     $('html, body').animate({
      //         scrollTop: $(".sectiona").offset().top }, 1000);
      //     });


      $('.sectiona').on('click', '.res', function(){
        $('html,body').animate ({
              scrollTop: $('.sectionc').offset().top }, 1000);
        });


      $('.sectiona').on('click', '.proj', function(){
          $('html, body').animate({
              scrollTop: $('.sectionb').offset().top }, 1000);
          });



}());
