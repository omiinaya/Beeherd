import $ from 'jquery'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

var owner_id;
var current_avatar;
    
export function ifAThenB() {
    if (localStorage.usertoken != null) {
        decodeAvatar()
    } else {
        window.open("/login", "_self")
    }
}

function decodeAvatar() {
    var token = localStorage.usertoken;
    var decode = jwt_decode(token);
    owner_id = decode.id;
    getAvatar(owner_id)
}

function getAvatar(a) {
    axios.get("avatars/" + owner_id)
        .then((res) => {
            current_avatar = res.data[0];
            loadCurrent(current_avatar)
            console.log(current_avatar)
        })
        .catch((err) => { console.log(err)
        });
}

export function loadCurrent(a) {
    var db_skin = a.skin;
    //console.log(db_skin);
    var db_eyes = a.eyes;
    //console.log(db_eyes);
    var db_hair = a.hair;
    var db_outfit = a.outfit;
    var db_background = a.background;
    $(".es1").append("<img class='cleanai' id='bodyimages-2' src='" + db_skin + "'></img>");
    $(".es2").append("<img class='cleanai2' id='eyesimages-2' src='" + db_eyes + "'></img>");
    $(".es3").append("<img class='cleanai3' id='hairimages-2' src='" + db_hair + "'></img>");
    $(".es4").append("<img class='cleanai4' id='ropaimages-2' src='" + db_outfit + "'></img>");
    $(".es99").css("background-image", "url('" + db_background + "')");
}