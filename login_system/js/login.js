document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const user=JSON.parse(localStorage.getItem("user"));

if(user==null){

alert("No User Found");

return;

}

if(email===user.email && password===user.password){

localStorage.setItem("loggedIn","true");

window.location.href="home.html";

}

else{

alert("Invalid Credentials");

}

});