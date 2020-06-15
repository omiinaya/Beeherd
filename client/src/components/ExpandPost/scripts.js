import jwt_decode from 'jwt-decode'
import axios from 'axios'

export function sendToDB(a) {
    const token = localStorage.usertoken                        //grabs current user token from localstorage.
    const decoded = jwt_decode(token)                           //decodes token so we can access user data.
    const user_id = decoded.id;                                 //grabs user id from the decoded token.
    const temp_tag = decoded.temp_tag;                          //grabs temp tag from decoded token.
    const id = a;                                          //grabs post content from button.
    var content = document.getElementById("reply-bar").value;
    console.log(id)
    console.log(temp_tag)
    console.log(content)

    if (content ==="") {
        console.log("Please fill out all required fields.")
    } else {
        return axios                                                //use axios to send data to database.
        .post('/replies/reply', {
            author_id: user_id,
            author_tag: temp_tag,
            post_id: id,
            reply_content: content
        })
        .then(res => {
            console.log("Post successfully sent to database.")
            window.location.reload();
            return res.data
        })
    }
}