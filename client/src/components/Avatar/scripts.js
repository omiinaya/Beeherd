import $ from 'jquery'

var current_skin;
var current_eyes;
var current_hair;
var current_outfit;

function avatarBackend() {
    $("#standard1").mouseenter(function () {
        //$('<img />').attr('src', 'white.png').appendTo("#es1");
        $(".es1").append("<img id='bodyimage' src='/avatar/skin/white.png'></img>");
    });

    $("#standard1").mouseleave(function () {
        $("#bodyimage").remove();
    });

    $("#standard2").mouseenter(function () {
        $(".es1").append("<img id='bodyimage' src='/avatar/skin/black.png'></img>");
    });

    $("#standard2").mouseleave(function () {
        $("#bodyimage").remove();
    });

    $("#standard1").click(function () {
        $(".cleani").remove();
        $("#bodyimage").replaceWith(
            "<img class='cleani' id='bodyimages' src='/avatar/skin/white.png'></img>"
        );
        current_skin = '/avatar/skin/white.png';
        console.log(current_skin);
    });

    $("#standard2").click(function () {
        $(".cleani").remove();
        $("#bodyimage").replaceWith(
            "<img class='cleani' id='bodyimages' src='/avatar/skin/black.png'></img>"
        );
        current_skin = '/avatar/skin/black.png';
        console.log(current_skin);
    });


    //eyes/

    $("#eyes1").mouseenter(function () {
        $(".es2").append("<img id='eyesimage' src='/avatar/eye/eye1.png'></img>");
    });

    $("#eyes1").mouseleave(function () {
        $("#eyesimage").remove();
    });

    $("#eyes2").mouseenter(function () {
        $(".es2").append("<img id='eyesimage' src='/avatar/eye/eye2.png'></img>");
    });

    $("#eyes2").mouseleave(function () {
        $("#eyesimage").remove();
    });

    $("#eyes1").click(function () {
        $(".cleani2").remove();
        $("#eyesimage").replaceWith(
            "<img class='cleani2' id='eyesimages' src='/avatar/eye/eye1.png'></img>"
        );
        current_eyes = "/avatar/eye/eye1.png";
        console.log(current_eyes);
    });

    $("#eyes2").click(function () {
        $(".cleani2").remove();
        $("#eyesimage").replaceWith(
            "<img class='cleani2' id='eyesimages' src='/avatar/eye/eye2.png'></img>"
        );
        var current_eyes = "/avatar/eye/eye2.png";
        console.log(current_eyes);
    });

    //hair/

    $("#hair1").mouseenter(function () {
        $(".es3").append("<img id='hairimage' src='/avatar/hair/hair1.png'></img>");
    });

    $("#hair1").mouseleave(function () {
        $("#hairimage").remove();
    });

    $("#hair2").mouseenter(function () {
        $(".es3").append("<img id='hairimage' src='/avatar/hair/hair2.png'></img>");
    });

    $("#hair2").mouseleave(function () {
        $("#hairimage").remove();
    });

    $("#hair1").click(function () {
        $(".cleani3").remove();
        $("#hairimage").replaceWith(
            "<img class='cleani3' id='hairimages' src='/avatar/hair/hair1.png'></img>"
        );
        current_hair = "/avatar/hair/hair1.png";
        console.log(current_hair);
    });

    $("#hair2").click(function () {
        $(".cleani3").remove();
        $("#hairimage").replaceWith(
            "<img class='cleani3' id='hairimages' src='/avatar/hair/hair2.png'></img>"
        );
        current_hair = "/avatar/hair/hair2.png";
        console.log(current_hair);
    });

    //ropa/

    $("#ropa1").mouseenter(function () {
        $(".es4").append("<img id='ropaimage' src='/avatar/outfit/outfit1.png'></img>");
    });

    $("#ropa1").mouseleave(function () {
        $("#ropaimage").remove();
    });

    $("#ropa2").mouseenter(function () {
        $(".es4").append("<img id='ropaimage' src='/avatar/outfit/outfit2.png'></img>");
    });

    $("#ropa2").mouseleave(function () {
        $("#ropaimage").remove();
    });

    $("#ropa1").click(function () {
        $(".cleani4").remove();
        $("#ropaimage").replaceWith(
            "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit1.png'></img>"
        );
        current_outfit = '/avatar/outfit/outfit1.png';
        console.log(current_outfit);
    });

    $("#ropa2").click(function () {
        $(".cleani4").remove();
        $("#ropaimage").replaceWith(
            "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit2.png'></img>"
        );
        current_outfit = '/avatar/outfit/outfit2.png';
        console.log(current_outfit);
    });

    //background//

    $("#bb1").click(function () {
        $(".es99").css(
            "background-image",
            "url('/avatar/place/place1.gif')"
        );
    });

    $("#bb2").click(function () {
        $(".es99").css("background-image", "url('/avatar/place/place2.gif')");
        $(".es99").css("background-position", "289px 227px");
        $(".es99").css("background-size", "287px 201px");
    });
}

export default avatarBackend;