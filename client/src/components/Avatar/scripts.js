import $ from 'jquery'

function avatarBackend() {
    $("#standard1").mouseenter(function () {
        $(".es1").append("<img id='bodyimage' src='https://i.imgur.com/ijF6FnC.png'></img>");
    });

    $("#standard1").mouseleave(function () {
        $("#bodyimage").remove();
    });

    $("#standard2").mouseenter(function () {
        $(".es1").append("<img id='bodyimage' src='https://i.imgur.com/Htc23mD.png'></img>");
    });

    $("#standard2").mouseleave(function () {
        $("#bodyimage").remove();
    });

    $("#standard1").click(function () {
        $(".cleani").remove();
        $("#bodyimage").replaceWith(
            "<img class='cleani' id='bodyimages' src='https://i.imgur.com/ijF6FnC.png'></img>"
        );
    });

    $("#standard2").click(function () {
        $(".cleani").remove();
        $("#bodyimage").replaceWith(
            "<img class='cleani' id='bodyimages' src='https://i.imgur.com/Htc23mD.png'></img>"
        );
    });


    //eyes/

    $("#eyes1").mouseenter(function () {
        $(".es2").append("<img id='eyesimage' src='https://i.imgur.com/UXyRIrg.png'></img>");
    });

    $("#eyes1").mouseleave(function () {
        $("#eyesimage").remove();
    });

    $("#eyes2").mouseenter(function () {
        $(".es2").append("<img id='eyesimage' src='https://i.imgur.com/ntF7A9G.png'></img>");
    });

    $("#eyes2").mouseleave(function () {
        $("#eyesimage").remove();
    });

    $("#eyes1").click(function () {
        $(".cleani2").remove();
        $("#eyesimage").replaceWith(
            "<img class='cleani2' id='eyesimages' src='https://i.imgur.com/UXyRIrg.png'></img>"
        );
    });

    $("#eyes2").click(function () {
        $(".cleani2").remove();
        $("#eyesimage").replaceWith(
            "<img class='cleani2' id='eyesimages' src='https://i.imgur.com/ntF7A9G.png'></img>"
        );
    });

    //hair/

    $("#hair1").mouseenter(function () {
        $(".es3").append("<img id='hairimage' src='https://i.imgur.com/gdcFGHV.png'></img>");
    });

    $("#hair1").mouseleave(function () {
        $("#hairimage").remove();
    });

    $("#hair2").mouseenter(function () {
        $(".es3").append("<img id='hairimage' src='https://i.imgur.com/kCODyoJ.png'></img>");
    });

    $("#hair2").mouseleave(function () {
        $("#hairimage").remove();
    });

    $("#hair1").click(function () {
        $(".cleani3").remove();
        $("#hairimage").replaceWith(
            "<img class='cleani3' id='hairimages' src='https://i.imgur.com/gdcFGHV.png'></img>"
        );
    });

    $("#hair2").click(function () {
        $(".cleani3").remove();
        $("#hairimage").replaceWith(
            "<img class='cleani3' id='hairimages' src='https://i.imgur.com/kCODyoJ.png'></img>"
        );
    });

    //ropa/

    $("#ropa1").mouseenter(function () {
        $(".es4").append("<img id='ropaimage' src='https://i.imgur.com/LDzjMI6.png'></img>");
    });

    $("#ropa1").mouseleave(function () {
        $("#ropaimage").remove();
    });

    $("#ropa2").mouseenter(function () {
        $(".es4").append("<img id='ropaimage' src='https://i.imgur.com/HrHKTCL.png'></img>");
    });

    $("#ropa2").mouseleave(function () {
        $("#ropaimage").remove();
    });

    $("#ropa1").click(function () {
        $(".cleani4").remove();
        $("#ropaimage").replaceWith(
            "<img class='cleani4' id='ropaimages' src='https://i.imgur.com/LDzjMI6.png'></img>"
        );
    });

    $("#ropa2").click(function () {
        $(".cleani4").remove();
        $("#ropaimage").replaceWith(
            "<img class='cleani4' id='ropaimages' src='https://i.imgur.com/HrHKTCL.png'></img>"
        );
    });

    //background//

    $("#bb1").click(function () {
        $(".es99").css(
            "background-image",
            "url('https://cutewallpaper.org/21/retro-game-backgrounds/Game-background-GIFs-Get-the-best-GIF-on-GIPHY.gif')"
        );
    });

    $("#bb2").click(function () {
        $(".es99").css("background-image", "url('https://media.giphy.com/media/ggWxxzrbja9VWsZ45o/giphy.gif')");
        $(".es99").css("background-position", "289px 227px");
        $(".es99").css("background-size", "287px 201px");
    });

    $("#bb3").click(function () {
        $(".es99").css("background-image", "url('dp.gif')");
        $(".es99").css("background-position", "431px 171px");
        $(".es99").css("background-size", "538px 182px");
    });
}

export default avatarBackend;