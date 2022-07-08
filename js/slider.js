$('.category_slider').slick({
		dots: true,
		infinite: false,
        arrows:true,
        nextArrow:'<button type = "button" class = "slick-next" ><i class="icon-arrow-right"></i> </button>',
        prevArrow:'<button type = "button" class= "slick-prev" > <i class="icon-arrow-left"></i> </button>',
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 1,
		category_slider: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
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