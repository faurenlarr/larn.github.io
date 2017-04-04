

$(window).scroll(function() {

    if ($(this).scrollTop() >= $('.sectiona').offset().top - 25) {
        $( ".navbar" ).fadeIn(500);
        $(".pic").removeClass('hidden').addClass('show slide');
        $('.info').removeClass('hidden').addClass('show slide');
        $('.tabs').removeClass('hidden').addClass('show slide');
    }

});



(function() {



      $('.res').on('click', function(){
        $('html,body').animate ({
              scrollTop: $('.sectionc').offset().top }, 1000);
        });


      $('.proj').on('click', function(){
          $('html, body').animate({
              scrollTop: $('.sectionb').offset().top }, 1000);
          });

      $('.contab').on('click',function(){
          $('html, body').animate({
              scrollTop: $('.sectiond').offset().top }, 1000);
          });

          $('.about').on('click',function(){
              $('html, body').animate({
                  scrollTop: $('.sectiona').offset().top }, 1000);
              });


}());
