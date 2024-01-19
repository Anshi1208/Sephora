let productDiv2 =document.getElementById("product2")


// function for display the product form data json and give divin html file
function displayProduct2(data){
    data.forEach((obj) => {
        let div=document.createElement("div");
        
        let img=document.createElement("img");
        img.src=obj.Image;
        img.style.height="200px"

        let comName=document.createElement("h5");
        comName.innerText=obj.company;

        let prodName=document.createElement("p");
        prodName.innerText=obj.Product;

        let rate=document.createElement("p");
        rate.innerText=`✬ ${obj.Rating}   ${obj.Rating_count}`;

        let price=document.createElement("p");
        price.innerText=`$ ${obj.Price}`


        div.append(img,comName,prodName,rate,price)
        productDiv2.append(div)
    });
}

fetch("./Hairdb.json")
    .then((res)=>res.json())
    .then((data)=>displayProduct2(data))
    .catch((err)=>console.log(err))
