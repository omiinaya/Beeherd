import axios from 'axios';

var temp_tag;
var wordList;
var wordListFixed = [];

export function generateWordList() {
    axios({
        method: 'get',
        url: 'https://random-word-api.herokuapp.com/word?number=30',
    })
        .then((res => {
            //console.log(res.data)
            wordList = res.data
        })
    )
}

export function capitalizeFirst() {
    for (var i = 0; i < wordList.length; i++) {
        var upperCased = wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1).toLowerCase();
        wordListFixed.push(upperCased);
    }
}

export function generateRandomTag() {
    capitalizeFirst()
    var newTag = [];

    for (var i = 0; i < 3; i++) {
        newTag.push(wordListFixed[Math.floor(Math.random() * wordListFixed.length)])
    }

    temp_tag = newTag.join("");
    //console.log(temp_tag);
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