$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');


        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });

    let themeToggler = document.querySelector('#theme-toggler');

    themeToggler.onclick = () => {
        if (themeToggler.classList.contains('fa-moon')){
            themeToggler.classList.remove('fa-moon');
            themeToggler.classList.add('fa-sun');
        }
        else{
            themeToggler.classList.remove('fa-sun');
            themeToggler.classList.add('fa-moon');

        }
        // themeToggler.classList.toggle('fa-moon');
        if (themeToggler.classList.contains('fa-moon')) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    }

});

//code for auto typing animation
var shortintro="Hi 👋, I am Upendra Singh Chauhan";

var ele1='<h1>' + shortintro.split('').join('</h1><h1>') + '</h1>';

$(ele1).hide().appendTo('#short-intro').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 10);
});

var content = 'A passionate Full Stack developer from India. I am experienced in the sport of Competitive Programming with 3+ year of experience in Data Structures and Algorithms and actively participating in Online Programming Competitions and I am 1800+ rated in Codechef and Leetcode.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('#p1').each(function (i) {
    $(this).delay(50 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
//end of animation code




