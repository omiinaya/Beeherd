import jwt_decode from 'jwt-decode'
import axios from 'axios'

export function sendToDB(a) {
    //grabs current user token from localstorage.
    const token = localStorage.usertoken

    //decodes token so we can access user data.
    const decoded = jwt_decode(token)

    //grabs user id from the decoded token.
    const user_id = decoded.id;

    //grabs temp_tag from the decoded token.
    const temp_tag = decoded.temp_tag;

    //grabs post content from button.
    const content = a;
    
    //use axios to send data to database.
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