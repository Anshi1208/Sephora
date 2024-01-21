let isAuth = localStorage.getItem("isAutho")|| "Not Authenticated"

if(isAuth === "Authenticated"){
    let navbar = document.querySelector(".main-nav")
    let div = document.createElement("div")
    let button=document.createElement("button")
    button.innerText="Logout"
    button.className = "logoutButton";

    let styles = `
    .logoutButton {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .logoutButton:hover {
        background-color: #0d0d0e;
    }`;

    let styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    button.onclick = function(){
        localStorage.setItem("isAutho", "Not Authenticated")
        window.location.reload()
    }
    div.append(button)
    navbar.append(div)
}