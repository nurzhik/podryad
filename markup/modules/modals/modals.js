$(document).ready(function () {
    $('a[data-click="modal"]').click(function () {
        var itemWindow = $(this).data('item');
        if ($(itemWindow).hasClass('active')) {
            $('.mask, .modal__close, .modal, body').removeClass('active');
        } else {
            $(itemWindow).addClass('active');
            $('.mask, body').addClass('active');
        }
    });

    $('.mask, .modal__close').click(function () {
        $('.mask, .modal__close, .modal, body').removeClass('active');
    });
    $('.specialization-item a').click(function () {
        var countSpec = $(this).data('type');
        console.log(countSpec);
        var equallySpec = 10;
        if ($(this).hasClass('foo')) {
            alert('Нельзя выбирать больше 10 специализаций!');
        } else {
            $(this).toggleClass('active');
        }
        var item = $('#specialization').find('a.active');
        if (countSpec == 'one-spec') {
            var equallySpec = 1;
        }
        var countItem = item.length;
        if (countItem == equallySpec) {
            $('.specialization-item a').addClass('foo');
            if ($('.specialization-item a').hasClass('active')) {
                $(item).removeClass('foo');
            }
        } else {
            $('.specialization-item a').removeClass('foo');
        }
    });

    $('.specialization__btn').click(function () {
        var item = $('#specialization').find('a.active');
        $('.specialization-list-selected').html(' ');
        $('.mask, .modal__close, .modal, body').removeClass('active');
        if (item.length != 0) {
            $('.registration-contractor-form__btn').html('Изменить специализацию');
        } else {
            $('.registration-contractor-form__btn').html('Выбрать специализацию');
        }
        item.each(function (index, element) {
            $('.specialization-list-selected').append('<div class="specialization-list-selected__item">' + $(element).html() + '</div>');
        });
    });
});