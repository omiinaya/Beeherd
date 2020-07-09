import $ from 'jquery'
import axios from 'axios'

var current_skin;
var current_eyes;
var current_hair;
var current_outfit;
var current_place;

export function avatarBackend() {
    //
    $("#standard1").mouseenter(function () {
        $(".es1").append("<img id='bodyimage' src='/avatar/skin/white.png'></img>");
    });

    $("#standard1").mouseleave(function () {
        $("#bodyimage").remove();
    });

    $("#standard1").click(function () {
        $(".cleani").remove();
        $("#bodyimage").replaceWith(
            "<img class='cleani' id='bodyimages' src='/avatar/skin/white.png'></img>"
        );
        current_skin = '/avatar/skin/white.png';
    });
    //

    $("#standard2").mouseenter(function () {
        $(".es1").append("<img id='bodyimage' src='/avatar/skin/black.png'></img>");
    });

    $("#standard2").mouseleave(function () {
        $("#bodyimage").remove();
    });

    $("#standard2").click(function () {
        $(".cleani").remove();
        $("#bodyimage").replaceWith(
            "<img class='cleani' id='bodyimages' src='/avatar/skin/black.png'></img>"
        );
        current_skin = '/avatar/skin/black.png';
    });

    $("#standard3").mouseenter(function () {
        $(".es1").append("<img id='bodyimage' src='/avatar/skin/white.png'></img>");
    });

    $("#standard3").mouseleave(function () {
        $("#bodyimage").remove();
    });

    $("#standard3").click(function () {
        $(".cleani").remove();
        $("#bodyimage").replaceWith(
            "<img class='cleani' id='bodyimages' src='/avatar/skin/white.png'></img>"
        );
        current_skin = '/avatar/skin/white.png';
    });
    

    //eyes/

    $("#eyes1").mouseenter(function () {
        $(".es2").append("<img id='eyesimage' src='/avatar/eye/eye1.png'></img>");
    });

    $("#eyes1").mouseleave(function () {
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

    $("#eyes2").mouseenter(function () {
        $(".es2").append("<img id='eyesimage' src='/avatar/eye/eye2.png'></img>");
    });

    $("#eyes2").mouseleave(function () {
        $("#eyesimage").remove();
    });

    $("#eyes2").click(function () {
        $(".cleani2").remove();
        $("#eyesimage").replaceWith(
            "<img class='cleani2' id='eyesimages' src='/avatar/eye/eye2.png'></img>"
        );
        current_eyes = "/avatar/eye/eye2.png";
        console.log(current_eyes);
    });

    //hair/

    $("#hair1").mouseenter(function () {
        $(".es3").append("<img id='hairimage' src='/avatar/hair/hair1.png'></img>");
    });

    $("#hair1").mouseleave(function () {
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

    $("#hair2").mouseenter(function () {
        $(".es3").append("<img id='hairimage' src='/avatar/hair/hair2.png'></img>");
    });

    $("#hair2").mouseleave(function () {
        $("#hairimage").remove();
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

    $("#ropa1").click(function () {
        $(".cleani4").remove();
        $("#ropaimage").replaceWith(
            "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit1.png'></img>"
        );
        current_outfit = '/avatar/outfit/outfit1.png';
        console.log(current_outfit);
    });

    $("#ropa2").mouseenter(function () {
        $(".es4").append("<img id='ropaimage' src='/avatar/outfit/outfit2.png'></img>");
    });

    $("#ropa2").mouseleave(function () {
        $("#ropaimage").remove();
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
        $(".es99").css("background-image", "url('/avatar/place/place1.gif')");
        current_place = '/avatar/place/place1.gif';
        console.log(current_place);
    });

    $("#bb2").click(function () {
        $(".es99").css("background-image", "url('/avatar/place/place2.gif')");
        $(".es99").css("background-position", "289px 227px");
        $(".es99").css("background-size", "287px 201px");
        current_place = '/avatar/place/place2.gif';
        console.log(current_place);
    });
}

export function sendToCreate(a) {
    return axios
        .post('avatars/create', {
            owner_id: a,
            skin: current_skin,
            hair: current_hair,
            eye: current_eyes,
            outfit: current_outfit,
            background: current_place
        })
        .then(res => {
            console.log("Avatar has been created.")
            return res.data
        })
}

export function sendToUpdate(a) {
    return axios
        .put('avatars/id/' + a, {
            skin: current_skin,
            hair: current_hair,
            eye: current_eyes,
            outfit: current_outfit,
            background: current_place
        })
        .then(res => {
            console.log("Avatar has been updated.")
            return res.data
        })
}

export function loadCurrent(a) {
    var db_skin = a.skin;
    var db_eyes = a.eyes;
    var db_hair = a.hair;
    var db_outfit = a.outfit;
    var db_background = a.background;
    $(".es1").append("<img class='cleanai' id='bodyimages' src='" + db_skin + "'></img>");
    $(".es2").append("<img class='cleanai2' id='eyesimages' src='" + db_eyes + "'></img>");
    $(".es3").append("<img class='cleanai3' id='hairimages' src='" + db_hair + "'></img>");
    $(".es4").append("<img class='cleanai4' id='ropaimages' src='" + db_outfit + "'></img>");
    $(".es99").css("background-image", "url('" + db_background + "')");
}