$(document).ready((function () {
    $.get("https://downloadinstagram.auto.io.vn/header.html", (function (data, status) {
        console.log(data), $("#masthead").html(data)
    }
    )),
        $.get("https://downloadinstagram.auto.io.vn/header.htmlfooter.html",
            (function (data, status) {
                console.log(data),
                $("#contact-us").html(data)
            })
        )
}));
