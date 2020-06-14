import axios from 'axios';

var temp_tag;

export function generateRandomTag() {
    var wordList = ['January', 'February', 'March', 'April'];
    var newTag = [];

    for (var i = 0; i < 3; i++) {
        newTag.push(wordList[Math.floor(Math.random() * wordList.length)])
    }

    temp_tag=newTag.join("");
    console.log(temp_tag);
}

export const register = newUser => {
    return axios
    .post('users/register', {
        username: newUser.username,
        password: newUser.password,
        temp_tag: temp_tag
    })
    .then(res => {
        //need if statement incase already registered
        console.log("User has been egistered.")
        return res.data
    })
}