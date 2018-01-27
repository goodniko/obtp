$(document).ready(function() {
	$(".menu-link").on("click", function() {
			$("html, body").stop().animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 800),
			$(".nav").removeClass("act"),
			$(".menuBtn").toggleClass("act"),
			event.preventDefault()
    }),
    

    $("#phone").inputmask("+380(99)99-99-999");
    $("#nosend-mail").click(function() {

        var name = $("#name").val();
        var surname = $("#surname").val();
        var company = $("#company").val();
        var theme = $("theme").val();
        var text = $("#text").val();
        var file = $("#file").val();
        var phone = $("#phone").val();
        var mail = $("#mail").val();

        if (name == "" || sername == "" || mail == "" || theme == "" || text == "") {
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

        var message =
            '<h1>Отправитель: ' + name + ' ' + surname + '</h1><br>' +
            '<b>Тема: </b>' + theme + '<br>' +
            '<b>Сообщение: </b>' + text + '<br>' +
            '<b>Прикрепленные файлы: </b>' + file + '<br>'
            '<b>Телефон: </b>' + phone + '<br>' +
            '<b>Почта: </b>' + mail;

        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', '', true);
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // xhr.onload = function() {
        //     console.log(this.responseText);
        // };
        // xhr.send('to=' + escape(mail) + '&message=' + message);

        // if () {
        //     var xhrForAdmin = new XMLHttpRequest();
        //     xhrForAdmin.open('POST', '', true);
        //     xhrForAdmin.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //     xhrForAdmin.send('to=' + escape('olza99998@gmail.com') + '&message=' + message);
        // }

        swal({
            title: "Отправлено",
            icon: "success",
            button: "OK",
        });
    });


});