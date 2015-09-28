$(document).ready(function () {
    $('.contractor-block-info-show').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').parent().children('span').empty();
            $(this).html($(this).text().replace('скрыть', 'показать'));
        } else {
            var dataShow = $(this).data('show');
            $(this).addClass('active').parent().append('<span>' + dataShow + '</span>');
            $(this).html($(this).text().replace('показать', 'скрыть'));
        }
        return false;
    });
    $('.contractor-tabs-control__item').click(function () {
        var indexTab = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.contractor-tabs-box__item').eq(indexTab).addClass('active').siblings().removeClass('active');
        return false;
    });
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-small',
        lazyLoad: 'ondemand'
    });
    $('.slider-small').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-big',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand'
    });
    $('.portfolio-album').click(function () {
        $('.slider-big').slick('unslick');
        $('.slider-small').slick('unslick');
        var indexTab = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.portfolio-slider').eq(indexTab).addClass('active').siblings().removeClass('active');
        $('.portfolio-slider').children('.portfolio-slider-big').removeClass('slider-big');
        $('.portfolio-slider').children('.portfolio-slider-small').removeClass('slider-small');
        $('.portfolio-slider').eq(indexTab).children('.portfolio-slider-big').addClass('slider-big');
        $('.portfolio-slider').eq(indexTab).children('.portfolio-slider-small').addClass('slider-small');
        $('.slider-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-small',
            lazyLoad: 'ondemand'
        });
        $('.slider-small').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.slider-big',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            lazyLoad: 'ondemand'
        });
    });
});

;(function ($) {
    $('.swipebox').swipebox({
        useSVG: false
    });
})(jQuery);