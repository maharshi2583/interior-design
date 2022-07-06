// ! Form validate:-

let uname = document.getElementById("name");
let email = document.getElementById("email");
let no = document.getElementById("no");

let flag = 1;

function validate() {

    if (uname.value == "") {
        document.getElementById("nameError").innerHTML = "Name must be Required";
        flag = 0;
    } else {
        document.getElementById("nameError").innerHTML = "";
        flag = 1;
    }

    if (email.value == "") {
        document.getElementById("emailError").innerHTML = "Email must be Required";
        flag = 0;
    } else {
        document.getElementById("emailError").innerHTML = "";
        flag = 1;
    }

    if (no.value == "") {
        document.getElementById("noError").innerHTML = "Mobile Number must be Required";
        flag = 0;
    } else {
        document.getElementById("noError").innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
    } else {
        return false;
    }

}

const load = () => {
    document.getElementById("load").style.display="none";
}