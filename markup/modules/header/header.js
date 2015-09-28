$(document).ready(function () {
    var currentValue = $('.header-city-select__current').html();
    $('.header-city-select__input').val(currentValue);
    $('.header-city-select').click(function () {
        $(this).children('.header-city-select__list').slideToggle();
    });
    $('.header-city-select__option').click(function () {
        var optionValue = $(this).html();
        var thisValue = $('.header-city-select__current').html();
        $('.header-city-select__input').val(optionValue);
        $('.header-city-select__current').html(optionValue);
        // destroy
        $(this).remove();
        $('.header-city-select__list').append('<div class="header-city-select__option">' + thisValue + '</div>');
    });
});