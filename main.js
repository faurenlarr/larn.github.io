

$(window).scroll(function() {



    if ($(this).scrollTop() >= $('#sectiona').offset().top - 25) {
        $( ".navbar" ).fadeIn(500);
        $(".pic").removeClass('hidden').addClass('show slide');
        $('.info').removeClass('hidden').addClass('show slide');
        $('.projects').removeClass('hidden').addClass('show slide');

    }



    if ($(this).scrollTop() >= $('.sectionb').offset().top - 25) {
      $('.one').removeClass('hidden').addClass('show slide');
      $('.two').removeClass('hidden').addClass('show slide');
      $('.three').removeClass('hidden').addClass('show slide');
    }

});



(function() {


      $(".header").on("mouseover", ".fa-hand-spock-o", function() {
          $('html, body').animate({
              scrollTop: $("#sectiona").offset().top }, 1000);
          });

      $('#sectiona').on('mouseover', '.fa-chevron-down', function(){
          $('html,body').animate({
              scrollTop: $('.sectionb').offset().top }, 1000);
          });


}());
