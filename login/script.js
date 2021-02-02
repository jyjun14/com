function check() {
    var id = document.getElementById("inputid").value;
    var pwd = document.getElementById("inputpwd").value;
    if (id == "jyjun14") {
        if (pwd == "jyjun14!") {
            alert("정답")
        }
        
        else {
            alert("틀림")
        }
    }

    else {
        alert("틀림")
    }
}

function signin() {
    location.href = "https://jyjun14.github.io/myweb/signin/main.html"
}
