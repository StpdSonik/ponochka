$('.order_slider').slick({
    dots: false,
    infinite: false,
    arrows: true,
    nextArrow: '<button type = "button" class = "slick-next" ><i class="icon-arrow-right"></i> </button>',
    prevArrow: '<button type = "button" class= "slick-prev" > <i class="icon-arrow-left"></i> </button>',
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    order_slider: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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

var customSelect = $('.custom_select');

customSelect.on('click', function(e) {
    $(this).toggleClass('custom_select--open')

    if (e.target.classList.contains('.custom_select_item')){
        let text = e.target.textContent;
        console.log(text);
        e.currentTarget.querySelector('.custom_select_top').textContent = text;
    }
});

