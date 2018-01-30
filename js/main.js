
$(document).ready(function() {
	$(".menu-link").on("click", function() {
			$("html, body").stop().animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 800),
			$(".nav").removeClass("act"),
			$(".menuBtn").toggleClass("act"),
			event.preventDefault()
    }),
    
    $("#nosend-mail").click(function() {

        var name = $("#name").val();
        var surname = $("#surname").val();
        var company = $("#company").val();
        var theme = $("theme").val();
        var text = $("#text").val();
        var file = $("#file").val();
        var phone = $("#phone").val();
        var mail = $("#mail").val();

        if (mail == "" || phone == "") {
            $('body').click(false);
            swal({
                title: "Ошибка",
                text: "Пожалуйста, заполните необходимые поля",
                icon: "error",
                button: false,
                timer: 1500
            });
            return;
        }


        swal({
            title: "Отправлено",
            icon: "success",
            button: "OK",
        });
    });


});