const clock = document.querySelector("#clock");

function setClock(){
    const hours = String(new Date().getHours()).padStart(2,"0");
    const minutes = String(new Date().getMinutes()).padStart(2,"0");
    const seconds = String(new Date().getSeconds()).padStart(2,"0"); 

    clock.innerText = `Time is ${hours}:${minutes}:${seconds}`;
}
setClock();
setInterval(setClock, 1000);
