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