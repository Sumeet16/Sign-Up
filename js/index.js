function validation() {
    var email = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var pass = document.getElementById("password").value;

    var btn = document.getElementById("first-text")
    var btna = document.getElementById("error-a")

    var btns = document.getElementById("second-text")
    var btnb = document.getElementById("error-b")

    var btnu = document.getElementById("third-text")
    var btnc = document.getElementById("error-c")

    var btnm = document.getElementById("fourth-text")
    var btnd = document.getElementById("error-d")
    var btne = document.getElementById("fourth-text1")

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (fname != Number) {
        btn.style.visibility = "visible"
        btna.style.visibility = "visible"
    } else {
        btn.style.visibility = "hidden"
        btna.style.visibility = "hidden"
    }

    if (fname == "") {
        btn.style.visibility = "visible"
        btna.style.visibility = "visible"
    } else {
        btn.style.visibility = "hidden"
        btna.style.visibility = "hidden"
    }

    if (lname != Number) {
        btns.style.visibility = "visible"
        btnb.style.visibility = "visible"
    } else {
        btns.style.visibility = "hidden"
        btnb.style.visibility = "hidden"
    }

    if (lname == "") {
        btns.style.visibility = "visible"
        btnb.style.visibility = "visible"
    } else {
        btns.style.visibility = "hidden"
        btnb.style.visibility = "hidden"
    }

    if (email == "") {
        btnu.style.visibility = "visible"
        btnc.style.visibility = "visible"
    }

    if (email.match(pattern)) {
        btnu.style.visibility = "hidden"
        btnc.style.visibility = "hidden"
    } else {
        btnu.style.visibility = "visible"
        btnc.style.visibility = "visible"
    }

    if (pass == "") {
        btnm.style.visibility = "visible"
        btnd.style.visibility = "visible"
    } else {
        btnm.style.visibility = "hidden"
        btnd.style.visibility = "hidden"
    } else if (pass.length < 8) {
        btne.style.visibility = "visible"
        btnd.style.visibility = "visible"
    } else {
        btne.style.visibility = "hidden"
        btnd.style.visibility = "hidden"
    }
}