$(document).ready(function () {
    $('.filter__title').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).parent().children('.filter__list').removeClass('active').slideUp();
            $(this).parent().children('.filter__select-all').hide();
        } else {
            $(this).parent().addClass('active');
            $(this).parent().children('.filter__list').addClass('active').slideDown();
            $(this).parent().children('.filter__select-all').show();
        }
    });
    $('.filter-item').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('input[type=checkbox]').attr('checked', false);
        } else {
            $(this).addClass('active');
            $(this).children('input[type=checkbox]').attr('checked', true);
        }
    });
    $('.filter__select-all').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).html('Выбрать все');
            $(this).parent().children().children().removeClass('active').children().attr('checked', false);
        } else {
            $(this).addClass('active');
            $(this).html('Снять выбор');
            $(this).parent().children().children().addClass('active').children().attr('checked', true);
        }
    });
});