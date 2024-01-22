
let Card =document.querySelector(".trend")
let Card2  =document.querySelector(".trend2")
let Main=document.querySelector(".main")
let Blog=document.querySelector(".blog_section")
let About =document.querySelector(".aboutus")

function Home(){
    Blog.style.display="block"
    Card.style.display="block"
   Card2.style.display="block"
    Main.style.display="flex"
    
    document.getElementById("Home").style.color="#55d5ff"
    document.getElementById("shop").style.color="black"
    document.getElementById("blog").style.color="black"
    
    document.getElementById("about").style.color="black"
    document.getElementById("contact").style.color="black"
}



function shop(){
    Blog.style.display="none"
    Card.style.display="block"
    Card2.style.display="block"
    Main.style.display="none"  
    
    
    document.getElementById("Home").style.color="black"
    document.getElementById("blog").style.color="black"
    
    document.getElementById("about").style.color="black"
    document.getElementById("contact").style.color="black"
    document.getElementById("shop").style.color="#55d5ff"
}
function blog(){
    Blog.style.display="block"
    Main.style.display="none"  
    Card.style.display="none"
    Card2.style.display="none"
    
    document.getElementById("blog").style.color="#55d5ff"
    document.getElementById("shop").style.color="black"
    document.getElementById("Home").style.color="black"
    
    document.getElementById("about").style.color="black"
    document.getElementById("contact").style.color="black"
    
}

function about(){
Blog.style.display="none"
    Main.style.display="none"  
    Card.style.display="none"
    Card2.style.display="none"
    About.style.display="block"
    
    document.getElementById("about").style.color="#55d5ff"
    document.getElementById("shop").style.color="black"
    document.getElementById("Home").style.color="black"
    

    document.getElementById("blog").style.color="black"
    document.getElementById("contact").style.color="black"
    
}

function show(img){
    document.querySelector(".cart img").src=img.src
    document.querySelector(".cart").style.display="flex"
    
    Blog.style.display="none"
    Card.style.display="none"
   Card2.style.display="none"
    Main.style.display="none"  
}
function  addCart(){
    alert("The product is added into cart")
    setTimeout(()=>{
        location.reload()
    },3000)
}


function back(){
    location.reload()
}
function ulLinks(){
    document.querySelector("nav ul").classList.toggle("ul_Links")
}
