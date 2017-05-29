var audioCronometro = {};

$(document).ready(function () {
    $("#start-time").click(StartTime);
    $("#clear-time").click(ClearTime);
    audioCronometro = document.getElementById("audio-cronometro");
});

function StartTime() {
    var time = parseFloat($("#time").val());
    console.log(name)

    time = time * 60;

    $("#input-time").hide();

    $("#clock").html(formtHours(time));

    function cronometro() {
        setTimeout(function () {
            time--;
            $("#clock").html(formtHours(time));
            if (time > 0) {
                cronometro();
            }
            else {
                $("#clock").html("Fim da prova");
                $("#input-time").show();
                audioCronometro.play();
            }
        }, 1000);
    }
    cronometro();
}

function ClearTime() {
    $("#clock").html(null);
    $("#time").val(null);
    audioCronometro.pause();
    audioCronometro.currentTime = 0;
}

function formtHours(time) {
    time = Number(time);
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 3600 % 60);

    var hDisplay = h > 0 ? h > 9 ? h + ":" : "0" + h + ":" : "";
    var mDisplay = m > 0 ? m > 9 ? m + ":" : "0" + m + ":" : "00:";
    var sDisplay = s > 0 ? s > 9 ? s : "0" + s : "00";
    return hDisplay + mDisplay + sDisplay;
}