import jwt_decode from 'jwt-decode'
import axios from 'axios'

export function viewPost() {
    console.log("test");
}

export function sendToDB(a) {
    const token = localStorage.usertoken                        //grabs current user token from localstorage.
    const decoded = jwt_decode(token)                           //decodes token so we can access user data.
    const user_id = decoded.id;                                 //grabs user id from the decoded token.
    const temp_tag = decoded.temp_tag;                          //grabs temp tag from decoded token.
    const content = a;                                          //grabs post content from button.
    const title = document.getElementById("post-title-input").value;
    //console.log(token)
    console.log(content)
    console.log(title)

    if (content ==="" || title ==="") {
        console.log("Please fill out all required fields.")
    } else {
        return axios                                                //use axios to send data to database.
        .post('post', {
            author_id: user_id,
            author_tag: temp_tag,
            post_title: title,
            post_content: content
        })
        .then(res => {
            console.log("Post successfully sent to database.")
            window.location.href = "/";
            return res.data
        })
    }
}