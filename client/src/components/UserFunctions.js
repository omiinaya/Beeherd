import axios from 'axios'

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

export const login = user => {
    return axios
    .post('/users/login', {
        username: user.username,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log("test"+err)
    })
}

export const upload = newPost => {
    return axios
    .post('posts/post', {
        creator_id: newPost.creator_id,
        content: newPost.content
    })
    .then(res => {
        console.log("Post has been uploaded to the database.")
        return res.data
    })
}