$(window).scroll(function(){


    if($(this).scrollTop()>=100){

        $("#navBar").addClass("noTransparrent");

    }
    else {
        $("#navBar").removeClass("noTransparrent");
    }


});




$(document).ready(function(){

    $("a.scroll").on('click', function(event){


        var hash = this.hash;


        $('html, body').animate({ scrollTop: $(hash).offset().top - 68 }, 800, function(){});

    });



        $('.circle').circleProgress({
                startAngle: -Math.PI / 2,
                fill: "#0575e6"
        }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('span').html(Math.round(stepValue * 100) + '%');
        });

            $(function(){
                $("#commentForm").validate();
            });






});