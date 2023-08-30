function fieldError(field) {
    const distance = 15;
    field
        .animate({ marginLeft: `-${distance}px` }, 100, "swing")
        .animate({ marginLeft: `${distance}px` }, 100, "swing")
        .animate({ marginLeft: `-${distance - 7}px` }, 100, "swing")
        .animate({ marginLeft: `${distance - 4}px` }, 100, "swing")
        .animate({ marginLeft: `0px` }, 100, "swing")
        .css({
            "border-bottom-color": "#ff5e5e",
        });
    setTimeout(() => {
        field.css({
            "border-bottom-color": "",
        });
    }, 1000);
}

$(document).ready(function () {
    $('button[type="submit"]').click(function (event) {
        $("input[required]")
            .add("textarea[required]")
            .not("textarea[disabled]")
            .each(function () {
                const field = $(this);
                if (!field.val()) {
                    event.preventDefault();
                    fieldError(field);
                }
            });
    });
    $(".will-write").on("click", function () {
        if ($(".will-write input").is(":checked")) {
            $(".form__checkbox input")
                .not(".will-write input")
                .prop("checked", false)
                .attr("disabled", true);
            $(".will-write-area").attr("disabled", false);
        } else {
            $(".form__checkbox input")
                .not(".will-write input")
                .attr("disabled", false);
            $(".will-write-area").attr("disabled", true).val("");
        }
    });
    $('a[href*="#"]').click(function () {
        $("html, body").animate(
            {
                scrollTop: $($.attr(this, "href")).offset().top,
            },
            400
        );
    });
});
