let sigUp = localStorage.getItem("userDetail")

let logIn =localStorage.getItem("isAutho")

if(!sigUp){
    let navbar = document.querySelector(".main-nav")
    let div = document.createElement("div")
    div.className="navItem"
    let button=document.createElement("button")
    button.className = "logoutButton";

    let a=document.createElement("a")
    a.innerText="SignUp"
    a.href="signUp_LogIn/SignUp.html"
    // a.target = "_blank";

    let styles = `
    .logoutButton {
        background-color: #333;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .logoutButton > a{
        color: #fff;
        font-size: 16px;
    }
    .logoutButton:hover {
        background-color: #fff;
    }`;

    let styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);


    button.appendChild(a);

    div.appendChild(button);

    navbar.appendChild(div);

}else if(logIn==="Not Authenticated"){
    let navbar = document.querySelector(".main-nav")
    let div = document.createElement("div")
    div.className="navItem"
    let button=document.createElement("button")
    button.className = "logoutButton";

    let a=document.createElement("a")
    a.innerText="LogIn"
    a.href="signUp_LogIn/LogIn.html"
    // a.target = "_blank";

    let styles = `
    .logoutButton {
        background-color: #333;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .logoutButton > a{
        color: #fff;
        font-size: 16px;
    }
    .logoutButton:hover {
        background-color: #fff;
    }`;

    let styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);


    button.appendChild(a);

    div.appendChild(button);

    navbar.appendChild(div);

}else{
    let isAuth = localStorage.getItem("isAutho")|| "Not Authenticated"

if(isAuth === "Authenticated"){
    let navbar = document.querySelector(".main-nav")
    let div = document.createElement("div")
    let button=document.createElement("button")
    button.innerText="LogOut"
    button.className = "logoutButton";

    let styles = `
    .logoutButton {
        background-color: #333;
        padding: 10px 20px;
        color: #fff;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .logoutButton:hover {
        background-color: #fff;
        color: #000;
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
}


