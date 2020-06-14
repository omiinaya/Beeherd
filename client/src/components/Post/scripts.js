import jwt_decode from 'jwt-decode'
import axios from 'axios'

export function viewPost() {
    console.log("test");
}

export function sendToDB(a) {
    const token = localStorage.usertoken                        //grabs current user token from localstorage.
    const decoded = jwt_decode(token)                           //decodes token so we can access user data.
    const user_id = decoded.id;                                 //grabs user id from the decoded token.
    const temp_tag = decoded.temp_tag;                        //grabs user id from the decoded token.
    const content = a;
    const title = document.getElementById("title-input").value; //grabs post content from button.
    console.log(token)
    console.log(content)
    console.log(title)

    return axios                                                //use axios to send data to database.
    .post('posts/post', {
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

