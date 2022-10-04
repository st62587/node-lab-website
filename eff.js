$(document).ready(function () {
    $('#divID1').click(function () {
        $("#divID1").effect({
            effect: "explode",
            easing: "swing",
            pieces: 12,
            duration: 3000
        });
    });
});
$(document).ready(function () {
    $('#divID2').click(function () {
        $("#divID2").effect("bounce", {
            times: 20,
            distance: 200
        }, 3000, function () {
            $(this).css("background", "#00ff00");
        });
    });
}); 
$(document).ready(function () {
    $('#divID3').click(function () {
        $("#divID3").effect("shake", {
            times: 20,
            distance: 180
        }, 3000, function () {
            $("#divID3").css(
                "background", "#ffD700");
        });
    });
}); 