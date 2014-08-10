$(document)
  .ready(function() {



    $('.ui.dropdown')
      .dropdown({
        on: 'click'
      })
    ;

    $('a.item').click(function(){
       $('.item').removeClass('active');
        $(this).addClass('active');
    });




  })
;