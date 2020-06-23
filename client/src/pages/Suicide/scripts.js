import axios from "axios";

export function test() {
  //var zipcodebar = document.getElementById('zipcode-search').value;
  var key = "AIzaSyCSYg2uzeZmQRY3izcLdqYMAQjXyAPa9zQ";
  //console.log(zipcodebar);
  //if you have zipcode example:
  //http://maps.googleapis.com/maps/api/geocode/json?address=92101
  axios
    .get(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyCSYg2uzeZmQRY3izcLdqYMAQjXyAPa9zQ"
    )
    .then((res) => {
      console.log(res);
    });
}
