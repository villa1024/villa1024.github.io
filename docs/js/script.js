(function ($) {
    var typed = new Typed('span.txt-rotate', {
        strings: ["Estudiante de Ingeniería Civil en Informática y Telecomunicaciones"],
        typeSpeed: 35,
        backSpeed: 50,
        fadeOut: false,
        smartBackspace: true,
        loop: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 2,
        autoWidth: false,
        center: false,
        mergeFit: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false
            }
        }
    })

})(jQuery);

$(document).ready(function () {
    $('.projects-wrapper').isotope({
        filter: '*',
        layoutMode: 'masonry'
    });

    $('.list-filter a').click(function () {
        var selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        });
        return false;
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });

});

function myFunction(id) {
    let x = document.getElementById(id);
    let trabajos_down = document.getElementById('trabajos-down');
    let trabajos_up = document.getElementById('trabajos-up');
    if (x.style.display === "none") {
        x.style.display = "block";
        trabajos_down.style.display = 'inline-block';
        trabajos_up.style.display = 'none';
    } else {
        x.style.display = "none";
        trabajos_down.style.display = 'none';
        trabajos_up.style.display = 'inline-block';
    }
}

function myFunction2(id) {
    let x = document.getElementById(id);
    let trabajos_down = document.getElementById('trabajos-down2');
    let trabajos_up = document.getElementById('trabajos-up2');
    if (x.style.display === "none") {
        x.style.display = "block";
        trabajos_down.style.display = 'inline-block';
        trabajos_up.style.display = 'none';
    } else {
        x.style.display = "none";
        trabajos_down.style.display = 'none';
        trabajos_up.style.display = 'inline-block';
    }
}