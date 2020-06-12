import jwt_decode from 'jwt-decode'
import axios from 'axios'

export function viewPost() {
    console.log("test");
}

export function sendToDB(a) {
    const token = localStorage.usertoken                        //grabs current user token from localstorage.
    const decoded = jwt_decode(token)                           //decodes token so we can access user data.
    const user_id = decoded.id;                                 //grabs user id from the decoded token.
    const temp_tag = decoded.temp_tag;                          //grabs user id from the decoded token.
    const content = a;                                          //grabs post content from button.

    return axios                                                //use axios to send data to database.
    .post('posts/post', {
        creator_id: user_id,
        content: content
    })
    .then(res => {
        console.log("Post successfully sent to database.")
        return res.data
    })
}
