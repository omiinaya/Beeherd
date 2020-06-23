import $ from "jquery";

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
  $("#standard3").mouseenter(function () {
    $(".es1").append(
      "<img id='bodyimage' src='/avatar/skin/whitey.png'></img>"
    );
  });

  $("#standard3").mouseleave(function () {
    $("#bodyimage").remove();
  });
  $("#standard4").mouseenter(function () {
    $(".es1").append(
      "<img id='bodyimage' src='/avatar/skin/tanned.png'></img>"
    );
  });

  $("#standard4").mouseleave(function () {
    $("#bodyimage").remove();
  });

  $("#standard1").click(function () {
    $(".cleani").remove();
    $("#bodyimage").replaceWith(
      "<img class='cleani' id='bodyimages' src='/avatar/skin/white.png'></img>"
    );
    current_skin = "/avatar/skin/white.png";
    console.log(current_skin);
  });

  $("#standard2").click(function () {
    $(".cleani").remove();
    $("#bodyimage").replaceWith(
      "<img class='cleani' id='bodyimages' src='/avatar/skin/black.png'></img>"
    );
    current_skin = "/avatar/skin/black.png";
    console.log(current_skin);
  });
  $("#standard3").click(function () {
    $(".cleani").remove();
    $("#bodyimage").replaceWith(
      "<img class='cleani' id='bodyimages' src='/avatar/skin/whitey.png'></img>"
    );
    current_skin = "/avatar/skin/whitey.png";
    console.log(current_skin);
  });
  $("#standard4").click(function () {
    $(".cleani").remove();
    $("#bodyimage").replaceWith(
      "<img class='cleani' id='bodyimages' src='/avatar/skin/tanned.png'></img>"
    );
    current_skin = "/avatar/skin/tanned.png";
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
  $("#eyes3").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes3.png'></img>");
  });

  $("#eyes3").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes4").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes4.png'></img>");
  });

  $("#eyes4").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes5").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes5.png'></img>");
  });

  $("#eyes5").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes6").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes6.png'></img>");
  });

  $("#eyes6").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes7").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes7.png'></img>");
  });

  $("#eyes7").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes8").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes8.png'></img>");
  });

  $("#eyes8").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes9").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes9.png'></img>");
  });

  $("#eyes9").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes10").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes10.png'></img>");
  });

  $("#eyes10").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes11").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes11.png'></img>");
  });

  $("#eyes11").mouseleave(function () {
    $("#eyesimage").remove();
  });
  $("#eyes12").mouseenter(function () {
    $(".es2").append("<img id='eyesimage' src='/avatar/eye/eyes12.png'></img>");
  });

  $("#eyes12").mouseleave(function () {
    $("#eyesimage").remove();
  });

  $("#eyes1").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes1.png'></img>"
    );
    current_eyes = "/avatar/eye/eyes1.png";
    console.log(current_eyes);
  });

  $("#eyes2").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes2.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes2.png";
    console.log(current_eyes);
  });
  $("#eyes3").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes3.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes3.png";
    console.log(current_eyes);
  });
  $("#eyes4").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes4.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes4.png";
    console.log(current_eyes);
  });
  $("#eyes5").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes5.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes5.png";
    console.log(current_eyes);
  });
  $("#eyes6").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes6.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes6.png";
    console.log(current_eyes);
  });
  $("#eyes7").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes7.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes7.png";
    console.log(current_eyes);
  });
  $("#eyes8").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes8.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes8.png";
    console.log(current_eyes);
  });
  $("#eyes9").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes9.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes9.png";
    console.log(current_eyes);
  });
  $("#eyes10").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes10.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes10.png";
    console.log(current_eyes);
  });
  $("#eyes11").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes11.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes11.png";
    console.log(current_eyes);
  });
  $("#eyes12").click(function () {
    $(".cleani2").remove();
    $("#eyesimage").replaceWith(
      "<img class='cleani2' id='eyesimages' src='/avatar/eye/eyes12.png'></img>"
    );
    var current_eyes = "/avatar/eye/eyes12.png";
    console.log(current_eyes);
  });

  //hair/

  $("#hair1").mouseenter(function () {
    $(".es3").append(
      "<img id='hairimage111' src='/avatar/hair/hair1.png'></img>"
    );
  });

  $("#hair1").mouseleave(function () {
    $("#hairimage111").remove();
  });

  $("#hair2").mouseenter(function () {
    $(".es3").append(
      "<img id='hairimage111' src='/avatar/hair/hair2.png'></img>"
    );
  });

  $("#hair2").mouseleave(function () {
    $("#hairimage111").remove();
  });
  $("#hair3").mouseenter(function () {
    $(".es3").append("<img id='hairimage' src='/avatar/hair/hair3.png'></img>");
  });

  $("#hair3").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair4").mouseenter(function () {
    $(".es3").append("<img id='hairimage' src='/avatar/hair/hair4.png'></img>");
  });

  $("#hair4").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair5").mouseenter(function () {
    $(".es3").append("<img id='hairimage' src='/avatar/hair/hair5.png'></img>");
  });

  $("#hair5").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair6").mouseenter(function () {
    $(".es3").append("<img id='hairimage' src='/avatar/hair/hair6.png'></img>");
  });

  $("#hair6").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair7").mouseenter(function () {
    $(".es3").append("<img id='hairimage' src='/avatar/hair/hair7.png'></img>");
  });

  $("#hair7").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair8").mouseenter(function () {
    $(".es3").append("<img id='hairimage' src='/avatar/hair/hair8.png'></img>");
  });

  $("#hair8").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair9").mouseenter(function () {
    $(".es3").append("<img id='hairimage' src='/avatar/hair/hair9.png'></img>");
  });

  $("#hair9").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair10").mouseenter(function () {
    $(".es3").append(
      "<img id='hairimage' src='/avatar/hair/hair10.png'></img>"
    );
  });

  $("#hair10").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair11").mouseenter(function () {
    $(".es3").append(
      "<img id='hairimage' src='/avatar/hair/hair11.png'></img>"
    );
  });

  $("#hair11").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair12").mouseenter(function () {
    $(".es3").append(
      "<img id='hairimage' src='/avatar/hair/hair12.png'></img>"
    );
  });

  $("#hair12").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair13").mouseenter(function () {
    $(".es3").append(
      "<img id='hairimage' src='/avatar/hair/hair13.png'></img>"
    );
  });

  $("#hair13").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair14").mouseenter(function () {
    $(".es3").append(
      "<img id='hairimage' src='/avatar/hair/hair14.png'></img>"
    );
  });

  $("#hair14").mouseleave(function () {
    $("#hairimage").remove();
  });
  $("#hair15").mouseenter(function () {
    $(".es3").append(
      "<img id='hairimage' src='/avatar/hair/hair15.png'></img>"
    );
  });

  $("#hair15").mouseleave(function () {
    $("#hairimage").remove();
  });

  $("#hair1").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimage111' src='/avatar/hair/hair1.png'></img>"
    );
    current_hair = "/avatar/hair/hair1.png";
    console.log(current_hair);
  });

  $("#hair2").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimage111' src='/avatar/hair/hair2.png'></img>"
    );
    current_hair = "/avatar/hair/hair2.png";
    console.log(current_hair);
  });
  $("#hair3").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair3.png'></img>"
    );
    current_hair = "/avatar/hair/hair3.png";
    console.log(current_hair);
  });
  $("#hair4").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair4.png'></img>"
    );
    current_hair = "/avatar/hair/hair4.png";
    console.log(current_hair);
  });
  $("#hair5").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair5.png'></img>"
    );
    current_hair = "/avatar/hair/hair5.png";
    console.log(current_hair);
  });
  $("#hair6").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair6.png'></img>"
    );
    current_hair = "/avatar/hair/hair6.png";
    console.log(current_hair);
  });
  $("#hair7").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair7.png'></img>"
    );
    current_hair = "/avatar/hair/hair7.png";
    console.log(current_hair);
  });
  $("#hair8").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair8.png'></img>"
    );
    current_hair = "/avatar/hair/hair8.png";
    console.log(current_hair);
  });
  $("#hair9").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair9.png'></img>"
    );
    current_hair = "/avatar/hair/hair9.png";
    console.log(current_hair);
  });
  $("#hair10").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair10.png'></img>"
    );
    current_hair = "/avatar/hair/hair10.png";
    console.log(current_hair);
  });
  $("#hair11").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair11.png'></img>"
    );
    current_hair = "/avatar/hair/hair11.png";
    console.log(current_hair);
  });
  $("#hair12").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair12.png'></img>"
    );
    current_hair = "/avatar/hair/hair12.png";
    console.log(current_hair);
  });
  $("#hair13").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair13.png'></img>"
    );
    current_hair = "/avatar/hair/hair13.png";
    console.log(current_hair);
  });
  $("#hair14").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair14.png'></img>"
    );
    current_hair = "/avatar/hair/hair14.png";
    console.log(current_hair);
  });
  $("#hair15").click(function () {
    $(".cleani3").remove();
    $("#hairimage").replaceWith(
      "<img class='cleani3' id='hairimages' src='/avatar/hair/hair15.png'></img>"
    );
    current_hair = "/avatar/hair/hair15.png";
    console.log(current_hair);
  });

  //ropa/

  $("#ropa1").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit1.png'></img>"
    );
  });

  $("#ropa1").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa2").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit2.png'></img>"
    );
  });

  $("#ropa2").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa3").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit3.png'></img>"
    );
  });

  $("#ropa3").mouseleave(function () {
    $("#ropaimage").remove();
  });

  $("#ropa4").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit4.png'></img>"
    );
  });

  $("#ropa4").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa5").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit5.png'></img>"
    );
  });

  $("#ropa5").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa6").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit6.png'></img>"
    );
  });

  $("#ropa6").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa7").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit7.png'></img>"
    );
  });

  $("#ropa7").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa8").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit8.png'></img>"
    );
  });

  $("#ropa8").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa9").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit9.png'></img>"
    );
  });

  $("#ropa9").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa10").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit10.png'></img>"
    );
  });

  $("#ropa10").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa11").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit11.png'></img>"
    );
  });

  $("#ropa11").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa12").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit12.png'></img>"
    );
  });

  $("#ropa12").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa13").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit13.png'></img>"
    );
  });

  $("#ropa13").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa14").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit14.png'></img>"
    );
  });

  $("#ropa14").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa15").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit15.png'></img>"
    );
  });

  $("#ropa15").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa16").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit16.png'></img>"
    );
  });

  $("#ropa16").mouseleave(function () {
    $("#ropaimage").remove();
  });
  $("#ropa17").mouseenter(function () {
    $(".es4").append(
      "<img id='ropaimage' src='/avatar/outfit/outfit17.png'></img>"
    );
  });

  $("#ropa17").mouseleave(function () {
    $("#ropaimage").remove();
  });

  $("#ropa1").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit1.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit1.png";
    console.log(current_outfit);
  });

  $("#ropa2").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit2.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit2.png";
    console.log(current_outfit);
  });
  $("#ropa3").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit3.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit3.png";
    console.log(current_outfit);
  });
  $("#ropa4").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit4.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit4.png";
    console.log(current_outfit);
  });
  $("#ropa5").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit5.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit5.png";
    console.log(current_outfit);
  });
  $("#ropa6").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit6.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit6.png";
    console.log(current_outfit);
  });
  $("#ropa7").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit7.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit7.png";
    console.log(current_outfit);
  });
  $("#ropa8").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit8.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit8.png";
    console.log(current_outfit);
  });
  $("#ropa9").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit9.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit9.png";
    console.log(current_outfit);
  });
  $("#ropa10").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit10.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit10.png";
    console.log(current_outfit);
  });
  $("#ropa11").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit11.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit11.png";
    console.log(current_outfit);
  });
  $("#ropa12").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit12.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit12.png";
    console.log(current_outfit);
  });
  $("#ropa13").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit13.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit13.png";
    console.log(current_outfit);
  });
  $("#ropa14").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit14.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit14.png";
    console.log(current_outfit);
  });
  $("#ropa15").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit15.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit15.png";
    console.log(current_outfit);
  });
  $("#ropa16").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit16.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit16.png";
    console.log(current_outfit);
  });
  $("#ropa17").click(function () {
    $(".cleani4").remove();
    $("#ropaimage").replaceWith(
      "<img class='cleani4' id='ropaimages' src='/avatar/outfit/outfit17.png'></img>"
    );
    current_outfit = "/avatar/outfit/outfit17.png";
    console.log(current_outfit);
  });

  //background//

  $("#bb1").click(function () {
    $(".es99").css("background-image", "url('/avatar/place/place1.gif')");
  });

  $("#bb2").click(function () {
    $(".es99").css("background-image", "url('/avatar/place/place2.gif')");
    $(".es99").css("background-position", "289px 227px");
    $(".es99").css("background-size", "287px 201px");
  });
}

export default avatarBackend;
