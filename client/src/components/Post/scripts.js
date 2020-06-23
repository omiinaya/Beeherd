import jwt_decode from 'jwt-decode'
import axios from 'axios'

var current_id;

export function init(a) {
    const token = localStorage.usertoken                        //grabs current user token from localstorage.
    const decoded = jwt_decode(token)                           //decodes token so we can access user data.
    current_id = decoded.id;
    var text = a
    getCurrentTag(current_id, text)
}

function getCurrentTag(a, b) {
    var text = b;
    axios
        .get("/users/id/" + a)
        .then((res) => {
            var user = res.data;
            console.log(user)
            console.log(b)
            sendToDB(text, res.data)
        })
        .catch((err) => console.log(err));
}

function sendToDB(a, b) {
    const temp_tag = b.temp_tag;                       //grabs temp tag from decoded token.
    const user_id = b.id;
    const content = a;                                          //grabs post content from button.
    const title = document.getElementById("post-title-input").value;
    //console.log(token)
    console.log(content)
    console.log(title)

    if (content === "" || title === "") {
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