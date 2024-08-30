let about = document.getElementById("about");


about.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "./about.html");
    xhr.send();
    xhr.onload = function()
    {
       document.body.innerHTML = document.body.innerHTML + xhr.responseText;
        console.log(xhr.responseText);
    }




})