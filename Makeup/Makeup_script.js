// log in Authenticated Start
let isAuth =localStorage.getItem("isAutho") ||"Not Authenticated"

if(isAuth !== "Authenticated"){
    
    window.location.href="../signUp_LogIn/SignUp.html"
    
}
// log in Authenticated end

let productDiv =document.getElementById("product")

let mainData =[]


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
        price.innerText=`$ ${obj.Price}`

        let button=document.createElement("button")
        button.innerText = "Add to Bucket";

        button.onclick= function(){
            addToCart(obj)
        }


        div.append(img,comName,prodName,rate,price,button)
        productDiv.append(div)
    });
}

fetch("Makeupdb.json")
.then((res)=>res.json())
.then((data)=>{
    mainData=data
    displayProduct(data)})
.catch((err)=>console.log(err))


// Here we resive value from select and according if we call function
// Function 1 Price Filter Start
function sortPrice(){

    let sortBy =document.getElementById("choosePrice").value
    let a=sortBy.toString()

    if(a==1){
        
        sortPriceLowToHigh()

    }else if(a==2){
        
        sortPriceHighToLow()
    }
}

    // sort low to high
function sortPriceLowToHigh(){
        
    // sorting data according to price
    mainData.sort(function(a,b){
        return a.Price- b.Price
   })
   // privius data will null
   productDiv.innerHTML=null
   displayProduct(mainData)
    
}

// sort high to low
function sortPriceHighToLow(){
        
    // sorting data according to price
    mainData.sort(function(a,b){
        return b.Price - a.Price
    })
    // privius data will null
    productDiv.innerHTML=null
    displayProduct(mainData)
    
}
// Function 1 Price Filter End




// Here we resive value from select and according if we call function
// Function 2 Rating  Filter Start
function sortRating(){

    let sortBy =document.getElementById("chooseRating").value
    let a=sortBy.toString()
    
    if(a==1){
            
        sortRatingLowToHigh()
    
    }else if(a==2){
            
        sortRatingHighToLow()
    }
}
    
    // sort low to high
function sortRatingLowToHigh(){
            
    // sorting data according to Rating
    mainData.sort(function(a,b){
        return a.Rating - b.Rating
    })
    // privius data will null
    productDiv.innerHTML=null
    displayProduct(mainData)
        
}
    
// sort high to low
function sortRatingHighToLow(){
            
    // sorting data according to Rating
    mainData.sort(function(a,b){
        return b.Rating - a.Rating
    })
    // privius data will null
    productDiv.innerHTML=null
    displayProduct(mainData)
        
}
// Function 2 Rating Filter End



// Here we resive value from select and according if we call function
// Function 3 Gender  Filter Start
function sortGender(){

    let sortBy =document.getElementById("chooseGender").value
    let a=sortBy.toString()
        
    if(a==1){
                
        sortMale(mainData)
        
    }else if(a==2){
                
        sortFemale(mainData)
    }
}
        
// sort low to high
function sortMale(data){
    productDiv.innerHTML=null
    data.filter((obj)=>{
                    
    if(obj.Gender=="Male"){
                        
        return displayProduct([obj])
                        
    }
    })
}
        
// sort high to low
function sortFemale(data){
            
    productDiv.innerHTML=null
    data.filter((obj)=>{
                
    if(obj.Gender=="Female"){
                    
        return displayProduct([obj])
                    
    }
    })
}
// Function 3 gender Filter End

// sort according to New Start

function newSort(){
    productDiv.innerHTML=null
    mainData.filter((obj)=>{

        if(obj.Category=="New"){
            return displayProduct([obj])
        }
    })

}
// sort according to New end

function women(){
    productDiv.innerHTML=null
    mainData.filter((obj)=>{

        if(obj.Gender=="Female"){
            return displayProduct([obj])
        }
    })
}


// function add to cart start
function addToCart(obj){
    
    let cartDetails = JSON.parse(localStorage.getItem("cartDetails"))|| []
    cartDetails.push(obj)
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails))

}
// function add to cart end

