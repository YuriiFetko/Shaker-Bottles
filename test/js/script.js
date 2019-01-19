

$('.main-slider').slick(
    {
        infinite: true,
        speed: 300,
        nextArrow: '<i class="fa fa-arrow-right"><img src="img/arrow-right.png"></i>',
        prevArrow: '<i class="fa fa-arrow-left"><img src="img/arrow-left.png"></i>',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
