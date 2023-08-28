$(document).ready(function () {
    $(".tabs__btn").click(function () {
        $(".tabs__btn").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tabs__tab").removeClass("active");
        $(".tabs__tab").eq(index).addClass("active");
    });
    $(".logo").click(function () {
        $(".tabs__btn").removeClass("active");
        $(".tabs__btn").eq(0).addClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tabs__tab").removeClass("active");
        $(".tabs__tab").eq(0).addClass("active");
    });
    $(".tabs__text").each(function () {
        var $element = $(this);
        var text = $element.text();
        $element.text("");
        let chars = text.split("");
        $.each(chars, function (index, value) {
            setTimeout(function () {
                $element.text($element.text() + value);
            }, index * 25);
        });
    });
});
