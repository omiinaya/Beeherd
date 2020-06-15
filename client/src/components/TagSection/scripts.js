import axios from 'axios';

export function changeTag(a) {
   var input = document.getElementById("change-tag").value;
    axios.put('users/id/'+a, {
        temp_tag: input
    })
    .then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    });
}