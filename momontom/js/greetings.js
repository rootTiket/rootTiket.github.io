const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const icon = document.querySelector(".circle-image");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"


function onloginsubmit(event){
    event.preventDefault();
    const username = logininput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    
}
function paintGreetings(greeting_username){
    document.querySelector(".username").innerText = `Have a nice day! ${greeting_username}`;
    document.querySelector(".username").style.fontSize = "14";
    greeting.classList.remove(HIDDEN_CLASSNAME);
    icon.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onloginsubmit);
}
else{
    paintGreetings(savedUsername);
}
