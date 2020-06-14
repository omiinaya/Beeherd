import axios from 'axios';

export function generateRandomTag() {
    var myArray = ['January', 'February', 'March'];
    var newTag = [];

    for (var i = 0; i < 3; i++) {
        newTag.push(myArray[Math.floor(Math.random() * myArray.length)])
    }

    console.log(newTag.join(""));
}

export const register = newUser => {
    return axios
    .post('users/register', {
        username: newUser.username,
        password: newUser.password
    })
    .then(res => {
        //need if statement incase already registered
        console.log("User has been egistered.")
        return res.data
    })
}