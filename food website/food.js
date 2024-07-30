let loading=document.querySelector(".loading");
let container=document.querySelector(".container");
let card=document.querySelectorAll(".card");
card.forEach(function(cards){
    cards.addEventListener("click",function(){
        document.querySelector("body").innerHTML="";
        let div=document.createElement("div");
        div.classList.add("fooddetail");
        div.innerHTML=`
         <img src=${cards.firstElementChild.src} alt="">
        <div class="detailtext">
            <h1>Eat Best With Laziz.</h1>
            <h3>Execting Offers Up To 50% OFF</h3>k
            <p>Pay On Delivery Might Be Available</p>
            <p>Pay On Delivery Might Be Available</p>
            <p>Pay On Delivery Might Be Available</p>
              <p>Pay On Delivery Might Be Available</p>
              <button>Buy Now</button>
              <button>Add To Cart</button>
              <a href="">Back</a>
        </div>
        `
        document.querySelector("body").appendChild(div);
    })
})










/*loading*/

container.style.display="none";
setTimeout(() => {
    container.style.display="block";
    loading.style.display="none";  
},1000);