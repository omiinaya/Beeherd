import axios from 'axios';

var temp_tag

var wordList;
var userCheck;
var wordListFixed = [];

export function changeTag(a) {
    var input = document.getElementById("change-tag").value;
    axios.put('users/id/' + a, {
        temp_tag: input
    })
        .then(res => {
            return res.data
        }).catch(err => {
            console.log(err)
        });
}

export function randomizeTag(a) {
    generateRandomTag()
    console.log(temp_tag);
    axios.put('users/id/' + a, {
        temp_tag: temp_tag
    })
        .then(res => {
            return res.data
        }).catch(err => {
            console.log(err)
        });
}

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

export function isUser(a) {
    return axios
        .get('users/' + a)
        .then(function (res) {
            userCheck = res.data
            return userCheck;
        })
}