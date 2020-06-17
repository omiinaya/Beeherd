import JwtDecode from "jwt-decode";
import axios from 'axios';

var test;

export function checkId(a) {
    //console.log(a);
}

export function getCurrentUser() {
    try {
        const token = localStorage.usertoken
        var decoded = JwtDecode(token);
        test = decoded
        return decoded.username;
    } catch (ex) {
        return null;
    }
}

export function getUserPosts() {
    return axios
        .get(`/posts/all`)
        .then(res => {
            const AllPosts = res.data;
            var UserPosts = [];
            for (var i = 0; i < AllPosts.length; i++) {
                if (res.data[i].creator_id === test.id) {
                    UserPosts.push(res.data[i]);
                }
            }
            return UserPosts
        })
}