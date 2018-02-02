// $(function () {
//     //Read the cookie, if it has been previously set
//     var language = $.cookie('language');

//     //Set language to previously set value
//     !language || $('#languages').val(language);

//     //Set up an event listener to update the cookie whenever language is changed
//     $('#ru').on('click', function () {
//         language = "ru";
//         $.cookie('language', language, { expires: 365 });
//     })
//     $('#en').on('click', function () {
//         language = "en";
//         $.cookie('language', language, { expires: 365 });
//     })
//         //Set cookie to default language when page loads;
//         //.change();

//     console.log(language + "  " + window.location.pathname + "  " + $.cookie('language'));

//     if ((language != "en" && window.location.pathname == "/en/index.html")) {
//         window.location.href = "../ru/index.html";
//     }  else {
//             if ((language != "ru" && window.location.pathname == "/ru/index.html")) {
//                 window.location.href = "../en/index.html";
//             } 
//             }

//     }
// );


$(document).ready(function() {
    $(".menu-link").on("click", function() {
        $("html, body").stop().animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800),
            $(".nav").removeClass("act"),
            $(".menuBtn").toggleClass("act"),
            event.preventDefault()
    })
});