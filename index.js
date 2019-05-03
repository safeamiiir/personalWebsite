// // init controller
// var controller = new ScrollMagic.Controller({globalSceneOptions: {}});
//
// // build scenes
// new ScrollMagic.Scene({triggerElement: "#item-2"})
//     .setClassToggle("#item-2", "in") // add class toggle
//     .addTo(controller);
//
// new ScrollMagic.Scene({triggerElement: "#item-3"})
//     .setClassToggle("#item-3", "in") // add class toggle
//     .addTo(controller);
//
// new ScrollMagic.Scene({triggerElement: "#item-4"})
//     .setClassToggle("#item-4", "in") // add class toggle
//     .addTo(controller);
//
// new ScrollMagic.Scene({triggerElement: "#item-5"})
//     .setClassToggle("#item-5", "in") // add class toggle
//     .addTo(controller);
//
// new ScrollMagic.Scene({triggerElement: "#item-6"})
//     .setClassToggle("#item-6", "in") // add class toggle
//     .addTo(controller);

$(document).ready(function() {



// FULLPAGE --> scroll

    ///////////////// mobile
    if ($(window).width() < 1024) {
        // alert('mobile');
        $('#fullpage').fullpage({
            autoScrolling: false,     //scroll
            verticalCentered: false   //flex
        });

        // LINK --> smooth scroll to div in mobile
        var heroLink    = $('#link-hero');
        var hero        = $('#hero');
        var oneLink     = $('#link-one');
        var one         = $('#one');
        var twoLink     = $('#link-two');
        var two         = $('#two');
        var threeLink   = $('#link-three');
        var three       = $('#three');
        var four       = $('#four');
        var fourLink       = $('#link-four');

        heroLink.on('click', function(){
            $('html, body').animate({
                scrollTop: hero.offset().top
            }, 1000)
        });
        oneLink.on('click', function(){
            $('html, body').animate({
                scrollTop: one.offset().top
            }, 1000)
        });
        twoLink.on('click', function(){
            $('html, body').animate({
                scrollTop: two.offset().top
            }, 1000)
        });
        threeLink.on('click', function(){
            $('html, body').animate({
                scrollTop: three.offset().top
            }, 1000)
        });
        fourLink.on('click', function () {
            $('html, body').animate({
                scrollTop: four.offset().top
            }, 1000)
        })

    }

    ///////////////// desktop
    else {
        //alert('desktop');
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage','laastPage'],
            autoScrolling: true,      //scroll
            verticalCentered: false   //flex
        });
    }

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    // /////////////////////////////////////////////////////
    // ///////////////////////////////////////////////mobile
    // hero
    var mobileHero = new ScrollMagic.Scene({
        triggerElement: '#hero',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#link-hero', 'link-active')
        // .addIndicators({
        //   colorTrigger: 'black',
        //   colorStart: '#000',
        // })
        .addTo(controller);
    // one
    var mobileOne = new ScrollMagic.Scene({
        triggerElement: '#one',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#link-one', 'link-active')
        .addTo(controller);
    // two
    var mobileTwo = new ScrollMagic.Scene({
        triggerElement: '#two',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#link-two', 'link-active')
        .addTo(controller);
    // three
    var mobileThree = new ScrollMagic.Scene({
        triggerElement: '#three',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#link-three', 'link-active')
        .addTo(controller);
    var mobileFour = new ScrollMagic.Scene({
        triggerElement: '#four',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#link-four', 'link-active')
        .addTo(controller);
    // /////////////////////////////////////////////////////
    // ///////////////////////////////////////////////desktop
    // hero
    var desktopHero = new ScrollMagic.Scene({
        triggerElement: '#hero',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#menu-hero', 'link-active')
        .addTo(controller);
    // one
    var desktopOne = new ScrollMagic.Scene({
        triggerElement: '#one',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#menu-one', 'link-active')
        .addTo(controller);
    // two
    var desktopTwo = new ScrollMagic.Scene({
        triggerElement: '#two',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#menu-two', 'link-active')
        .addTo(controller);
    // three
    var desktopThree = new ScrollMagic.Scene({
        triggerElement: '#three',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#menu-four', 'link-active')
        .addTo(controller);
    var desktopFour = new ScrollMagic.Scene({
        triggerElement: '#four',
        duration: '100%',
        triggerHook: 0, //position trigger
        reverse: true, //animation always
    })
        .setClassToggle('#menu-four', 'link-active')
        .addTo(controller);


    // /////////////////////////////////////////////////////
    // ///////////////////////////////////////////////animation icon
    var controller = new ScrollMagic.Controller();

    var icon = $('.icon');
    var iconSkill = $('.iconSkill');
    var iconEdu = $('.iconEdu');

    var tl1 = new TimelineMax().add([
        TweenMax.from(icon, 1, {y: 150, autoAlpha: 0, ease:Power1.easeOut})
    ]);

    var tl2 = new TimelineMax().add([
        TweenMax.from(iconSkill, 1, {y: 150, autoAlpha: 0, ease:Power1.easeOut})
    ]);

    var tl3 = new TimelineMax().add([
        TweenMax.from(iconEdu, 1, {y: 150, autoAlpha: 0, ease:Power1.easeOut})
    ]);


    new ScrollMagic.Scene({
        triggerElement: ('#one h1'),
        triggerHook: 0.5
    }).setTween(tl1).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ('#two h1'),
        triggerHook: 0.5
    }).setTween(tl2).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ('#three h1'),
        triggerHook: 0.5
    }).setTween(tl3).addTo(controller);

    $( "#laugh" ).hover(function() {
        $( "#laugh" ).toggleClass('fa-laugh-wink');
        $( "#laugh" ).toggleClass('fa-laugh-beam');
        $( "#laugh" ).css('cursor','pointer');
        $( "#laugh" ).css('transition','0.2s');
    });

    $('#tizhooshan').hover(function () {
       $("#sampad").css('fill','orange');
        $('#tizhooshan').css( 'cursor', 'cell' );
    });
    $('#beheshti').hover(function () {
        $("#sbu").css('fill','orange');
        $('#beheshti').css( 'cursor', 'cell' );
    });
    $('#tizhooshan').mouseout(function () {
        $("#sampad").css('fill','black');
    });
    $('#beheshti').mouseout(function () {
        $("#sbu").css('fill','black');
    });



    hey();
    avatar();
    hello();
    setTimeout(
        function() {
            typeWriter() ;
        }, 5750);
    goDown();
    resumeAndEx();
    var scrolled = false;
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 800 && !scrolled){
            $('.html.circle').circleProgress({
                value: 0.92
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(92  * progress) + '<i>%</i>');
                fill: {gradient: ['#fffff', '#000000']}
            });
            $('.jquery.circle').circleProgress({
                value: 0.73
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(73 * progress) + '<i>%</i>');
                fill: {gradient: ['#fffff', '#000000']}
            });
            $('.bootstrap.circle').circleProgress({
                value: 0.69
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(69 * progress) + '<i>%</i>');
                fill: {gradient: ['#fffff', '#000000']}
            });
            $('.frameWork.circle').circleProgress({
                value: 0.63
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(63 * progress) + '<i>%</i>');
                fill: {gradient: ['#fffff', '#000000']}
            });
            $('.angular.circle').circleProgress({
                value: 0.54
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(54 * progress) + '<i>%</i>');
                fill: {gradient: ['#fffff', '#000000']}
            });
            $('.node.circle').circleProgress({
                value: 0.42
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(42 * progress) + '<i>%</i>');
                fill: {gradient: ['#fffff', '#000000']}
            });
            scrolled = true;
        }
        if(scroll > 1880 || scroll < 915){
            scrolled = false;
        }
    });
});

// for circle
/* Examples */
    /*
     * - default gradient
     * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
     */
    $('.html.circle').circleProgress({
        value: 0.92
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(92 * progress) + '<i>%</i>');
        fill: {gradient: ['#fffff', '#000000']}
    });
    $('.html span .fa-css3-alt').mouseover(function () {
        $('.html.circle').circleProgress({
            value: 0.92
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(92  * progress) + '<i>%</i>');
            fill: {gradient: ['#fffff', '#000000']}
        });
    });
    $('.html span .fa-html5').mouseover(function () {
        $('.html.circle').circleProgress({
            value: 0.92
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(92  * progress) + '<i>%</i>');
            fill: {gradient: ['#fffff', '#000000']}
        });
    });
    $('.html span .fa-js-square').mouseover(function () {
        $('.html.circle').circleProgress({
            value: 0.92
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(92  * progress) + '<i>%</i>');
            fill: {gradient: ['#fffff', '#000000']}
        });
    });

    /*
     * - default gradient
     * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
     */
    $('.jquery.circle').circleProgress({
        value: 0.73
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(73 * progress) + '<i>%</i>');
        fill: {gradient: ['#fffff', '#000000']}
    });
    $('.jquery span .fa-audible').mouseover(function () {
        $('.jquery.circle').circleProgress({
            value: 0.73
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(73 * progress) + '<i>%</i>');
            fill: {gradient: ['#fffff', '#000000']}
        });
    });

    /*
     * - default gradient
     * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
     */
    $('.bootstrap.circle').circleProgress({
        value: 0.69
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(69 * progress) + '<i>%</i>');
        fill: {gradient: ['#fffff', '#000000']}
    });
    $('.bootstrap span .fa-clone').mouseover(function () {
        $('.bootstrap.circle').circleProgress({
            value: 0.69
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(69 * progress) + '<i>%</i>');
            fill: {gradient: ['#fffff', '#000000']}
        });
    });


    /*
     * - default gradient
     * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
     */
    $('.frameWork.circle').circleProgress({
        value: 0.63
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(63 * progress) + '<i>%</i>');
        fill: {gradient: ['#fffff', '#000000']}
    });
    $('.frameWork span .fa-google-wallet').mouseover(function () {
        $('.frameWork.circle').circleProgress({
            value: 0.63
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(63 * progress) + '<i>%</i>');
            fill: {gradient: ['#fffff', '#000000']}
        });
    });
    /*
     * - default gradient
     * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
     */
    $('.angular.circle').circleProgress({
        value: 0.54
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(54 * progress) + '<i>%</i>');
        fill: {gradient: ['#fffff', '#000000']}
    });
    $('.angular span .fa-angular').mouseover(function () {
        $('.angular.circle').circleProgress({
            value: 0.54
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(54 * progress) + '<i>%</i>');
            fill: {gradient: ['#fffff', '#000000']}
        });
    });

    /*
     * - default gradient
     * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
     */
    $('.node.circle').circleProgress({
        value: 0.42
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(42 * progress) + '<i>%</i>');
        fill: {gradient: ['#fffff', '#000000']}
    });
    $('.node span .fa-node-js').mouseover(function (event) {
        $('.node.circle').circleProgress({
            value: 0.42
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(42 * progress) + '<i>%</i>');
            fill: {gradient: ['#fffff', '#000000']}
        });
    });


/**************************      typing     ***************************/
var i = 0;
var txt = 'من امیررضا هستم و خیلی مشتاقم که در مورد خودم براتون بگم !\n';
var speed = 50;

function hey() {
    setTimeout(function () {
        $('#check').fadeIn(500);
    },1600);
    setTimeout(function () {
        $('.frame').fadeOut(500);
    },3500);
}
function typeWriter() {

    if (i < txt.length) {
        document.getElementById("onStart").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
function goDown() {
    setTimeout(
        function() {
            $('#goDown').css("visibility", "visible");
        }, 9050);

}
function avatar() {
    setTimeout(function () {
        $("#avatar").fadeIn(3000)
    },3500);

}
function hello() {
    setTimeout(function () {
        $("#hello").fadeIn(1000);
    }, 4600);
}
function resumeAndEx(){
    setTimeout(function () {
    $('#resume').fadeIn(1000);
    }, 9089);
    setTimeout(function () {
    $('#ex').fadeIn(1000);
    }, 9109);

}

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);
        $svg.width("36%");
        $svg.height("150px");
        $svg.css('margin','15px');
    }, 'xml');
});
