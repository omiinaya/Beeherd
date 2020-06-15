import axios from 'axios';
import jwt_decode from 'jwt-decode'

var current_tag;
var current_user;

export function changeTag() {
    var input = document.getElementById("change-tag").value;
    console.log(input);
}

export function loadUser() {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    current_tag = decode.temp_tag;
    current_user = decode.id;
}

export function updateUser(a) {
   var input = document.getElementById("change-tag").value;
    axios.put('users/id/'+a, {
        temp_tag: input
    })
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    });
}