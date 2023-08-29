$(document).ready(function () {
    $(".control__plus").on("click", function () {
        const sumElement = $(this).siblings(".control__sum");
        let currentSum = parseInt(sumElement.text());
        if (currentSum >= 10) {
            return;
        }
        sumElement.text(currentSum + 1);
    });
    $(".control__minus").on("click", function () {
        const sumElement = $(this).siblings(".control__sum");
        let currentSum = parseInt(sumElement.text());
        if (currentSum) {
            sumElement.text(currentSum - 1);
        }
    });
    $(".control__to-cart").on("click", function () {
        const cart = $(".ui__link-counter");
        const cartSum = parseInt(cart.text());
        const sumElement = $(this)
            .siblings(".control__counter")
            .find(".control__sum");
        let currentSum = parseInt(sumElement.text());
        cart.text(cartSum + currentSum);
        sumElement.text("0");
    });
});
