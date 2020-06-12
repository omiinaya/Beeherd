import jwt_decode from 'jwt-decode'
import axios from 'axios'

export function Test(a) {
    //grabs current user token from localstorage.
    const token = localStorage.usertoken
    //decodes token so we can access user data.
    const decoded = jwt_decode(token)
    //grabs user id from the decoded token.
    const user_id = decoded.id;
    //grabs post content from button
    const content = a;

    console.log(decoded.id);
    console.log(a);

    return axios
    .post('posts/post', {
        creator_id: user_id,
        content: content
    })
    .then(res => {
        console.log("Post successfully sent to database.")
        return res.data
    })
}