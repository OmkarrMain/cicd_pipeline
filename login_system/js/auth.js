if(localStorage.getItem("loggedIn")!="true"){

window.location.href="login.html";

}

const user=JSON.parse(localStorage.getItem("user"));

document.getElementById("welcome").innerHTML="Welcome "+user.username;