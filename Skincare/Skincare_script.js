


let productDiv =document.getElementById("product")


// function for display the product form data json and give divin html file
function displayProduct(data){
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
        price.innerText=`$ ${obj.Price.p1}`


        div.append(img,comName,prodName,rate,price)
        productDiv.append(div)
    });
}

fetch("./Skincaredb.json")
    .then((res)=>res.json())
    .then((data)=>displayProduct(data))
    .catch((err)=>console.log(err))


    // Here we resive value from select and according if we call function
function sortPrice(){

    let sortBy =document.getElementById("chooseRate").value

    
    let a=sortBy.toString()

    if(a==1){
        
        sortPriceLowToHigh()

    }else if(a==2){
        
        sortPriceHighToLow()
    }

    
}

    
    function sortPriceLowToHigh(){
        
        // sorting data according to price
        fetch("Skincaredb.json")
        .then((res)=>res.json())
        .then((data)=>{
            data.sort(function(a,b){
                return a.Price.p1 - b.Price.p1
            })
            // privius data will null
            productDiv.innerHTML=null
            displayProduct(data)
        })
        .catch((err)=>console.log(err))
    
    }


    function sortPriceHighToLow(){
        
        // sorting data according to price
        fetch("./Skincaredb.json")
        .then((res)=>res.json())
        .then((data)=>{
            data.sort(function(a,b){
                return b.Price.p1 - a.Price.p1
            })
            // privius data will null
            productDiv.innerHTML=null
            displayProduct(data)
        })
        .catch((err)=>console.log(err))
    
    }


