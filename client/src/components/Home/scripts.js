export function redirectToPost() {
    if (localStorage.getItem("usertoken") === null) {
        window.open("/login", "_self")
    } else {
        window.open("/post", "_self")
    }
}