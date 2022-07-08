// $('.product_slider').slick({
// 		dots: true,
// 		infinite: false,
//         arrows:true,
//         nextArrow:'<button type = "button" class = "slick-next" ><i class="icon-arrow-right"></i> </button>',
//         prevArrow:'<button type = "button" class= "slick-prev" > <i class="icon-arrow-left"></i> </button>',
// 		speed: 300,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 	});


$(".product_slider").slick({
    autoplay: false,
    dots: true,
    arrows:true,
    nextArrow: '<button type = "button" class = "slick-next" ><i class="icon-arrow-right"></i> </button>',
    prevArrow:'<button type = "button" class= "slick-prev" > <i class="icon-arrow-left"></i> </button>',
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="' + thumb + '"></a>';
    },
});
var trueHeight,
    trueWidth,
    img;
$('.slick-slide').hover(function (e) {

    img = $(this).find('img');
    trueHeight = img.height();
    trueWidth = img.width();
    var imgHeight = img.prop('naturalHeight');
    var imgWidth = img.prop('naturalWidth');

    img.height(imgHeight);
    img.width(imgWidth);

    $(this).mousemove(function (e) {

        var cursor_position = {
            x: e.clientX - $(this).offset().left + $(window).scrollLeft(), // Положение курсора слева
            y: e.clientY - $(this).offset().top + $(window).scrollTop() // Положение курсора сверху
        },
            imagebox__img = img,
            image_position = {
                left: ((cursor_position.x / $(this).innerWidth()) * imagebox__img.width() - cursor_position.x) * -1, // Вычисляем позицию картинки слева
                top: ((cursor_position.y / $(this).innerHeight()) * imagebox__img.height() - cursor_position.y) * -1 // Вычисляем позицию картинки сверху
            }
        imagebox__img.css({
            position: 'absolute',
            top: image_position.top,
            left: image_position.left
        });


    });
}, function () {

    img.css({ 'position': 'relative', 'top': 0, 'left': 0 });
    img.height(trueHeight);
    img.width(trueWidth);

});
