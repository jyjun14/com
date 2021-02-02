function check() {
    var id = document.getElementById("inputid").value;
    var pwd = document.getElementById("inputpwd").value;
    if (id == "jyjun14") {
        if (pwd == "jyjun14!") {
            alert("정답")
            document.getElementById("inputid").value = "";
            document.getElementById("inputpwd").value = "";
        }
        
        else {
            alert("틀림")
            document.getElementById("inputid").value = "";
            document.getElementById("inputpwd").value = "";
        }
    }

    else {
        alert("틀림")
        document.getElementById("inputid").value = "";
        document.getElementById("inputpwd").value = "";
    }
}

function signin() {
    location.href = "https://jyjun14.github.io/mainpage/signin/main.html"
}
