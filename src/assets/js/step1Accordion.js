  /* done */


(() => {
    'use strict';
    // display the first div by default.
    $(".accordion-content").first().css('display', 'block').addClass('js-activeAdress');


    // Get all the links.
    var link = $(".accordion-title");

    // On clicking of the links do something.
    link.on('click', function(e) {

        e.preventDefault();

        var a = $(this).attr("href");

        $(a).slideDown('medium').addClass('js-activeAdress');

        //$(a).slideToggle('fast');
        $(".accordion-content").not(a).slideUp('fast').removeClass('js-activeAdress');

    });


})();
