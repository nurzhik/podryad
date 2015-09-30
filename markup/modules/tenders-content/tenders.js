var slider = document.getElementById('cost-line');
noUiSlider.create(slider, {
    start: [0, 999999999],
    connect: true,
    range: {
        'min': 0,
        'max': 999999999
    }
});

var valueMin = document.getElementById('cost-line-value-min'),
    valueMax = document.getElementById('cost-line-value-max');

// When the slider value changes, update the input and span
slider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
        valueMin.value = values[handle];
    } else {
        valueMax.value = values[handle];
    }
});

// // When the input changes, set the slider value
// valueInput.addEventListener('change', function () {
//     slider.noUiSlider.set([null, this.value]);
// });