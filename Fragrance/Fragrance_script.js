let productDiv1 =document.getElementById("product1")


// function for display the product form data json and give divin html file
function displayProduct1(data){
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
        productDiv1.append(div)
    });
}

fetch("./Fragrancedb.json")
    .then((res)=>res.json())
    .then((data)=>displayProduct1(data))
    .catch((err)=>console.log(err))
