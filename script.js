var info=document.getElementById("getinfo")
var addbutton=document.getElementById("button")
var listcont=document.getElementById("listcontainer")
var lightimage=document.getElementsByClassName("imagediv")
var maindivis=document.getElementById("maindiv")



var imagetag=document.getElementById("imagetag")


imagetag.addEventListener("click",()=>{
    console.log("hello");
    
maindivis.classList.toggle("bodydivdark")
maindivis.classList.toggle("bodydivlight")
})


var infofrominput=""
info.addEventListener("keyup",(e)=>{
    infofrominput=(e.target.value);
})

addbutton.addEventListener("click", (e) => {
    const infofrominput = info.value;

    const listitemdiv = document.createElement("div");
    const listitemptag = document.createElement("p");
    const listdelbut= document.createElement("button");
    listdelbut.className="listbutton"
    listitemdiv.className = "listitem";
    listitemptag.textContent = infofrominput;

    listitemdiv.appendChild(listitemptag);
    listitemdiv.appendChild(listdelbut);
    listcont.appendChild(listitemdiv);
    listdelbut.addEventListener("click",()=>{
        listitemdiv.remove()
    })


    info.value = "";  
});



