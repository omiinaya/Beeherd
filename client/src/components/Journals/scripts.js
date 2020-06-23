import jwt_decode from 'jwt-decode'
import axios from 'axios'

export function sendToDB(a) {
    const token = localStorage.usertoken                        //grabs current user token from localstorage.
    const decoded = jwt_decode(token)                           //decodes token so we can access user data.
    const user_id = decoded.id;                                 //grabs user id from the decoded token.
    const author_tag = decoded.temp_tag;                          //grabs temp tag from decoded token.
    const content = a;                                          //grabs post content from button.
    console.log(content)

    if (content ==="") {
        console.log("Please fill out all required fields.")
    } else {
        return axios                                                //use axios to send data to database.
        .post('/journals/journal', {
            author_tag: author_tag,
            author_id: user_id,
            journal_content: content
        })
        .then(res => {
            console.log("Post successfully sent to database.")
            return res.data
        })
    }
}