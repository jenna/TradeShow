$(document).ready(function () {
        $('.addForm2').click(function() {
            $(this).next('.Form2').slideDown(400);
            $(this).hide();
        });
        $('#poster-button-a').click(function() {
            $('#ap').slideDown(400);
        });
        $('#poster-button-b').click(function () {
            $('.request-new-poster').slideDown(400);
        });

        $('.access-section').click(function() {
             $('.active').removeClass('active');
             $(this).addClass('active');
//            $('.form-section').hide();
            $(this).next('.form-section').slideToggle(400);
        });
        

    });
