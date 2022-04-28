

let display=document.getElementById("display")

let getdata=JSON.parse(localStorage.getItem("Products"))


getdata.forEach((ele,indx) => {
    
   let box=document.createElement("div")
   
   let img=document.createElement("img")
   img.src=ele.image

   let name=document.createElement("p")
   name.innerText="Product Name:"+" "+ele.prductname
   let category=document.createElement("p")
   category.innerText="Category:"+" "+ele.category
   let price=document.createElement("p")
   price.innerText="Price:"+" "+ele.price
   let gender=document.createElement("p")
   gender.innerText="Gender:"+" "+ele.gender

   let sold=document.createElement("button")
   sold.setAttribute("value","true")
sold.innerText="UnSold"
sold.style.backgroundColor="green"
sold.addEventListener("click",function(){
sold.innerText="Sold"
sold.style.backgroundColor="red"
    // event.preventDefault()
//     let getvalue=sold.value
// // let flag=document.getElementById("sold")

//     if(getvalue==="true")
//     {
//         sold.setAttribute("value","false")
//     }
//     else{
//         sold.setAttribute("value","true")
//     }
    
// //     let btn=document.getElementById("sold").value
// // console.log(btn)
//     if(sold.value=="true"){
//         sold.style.backgroundColor="green"
//     }
//     else{
//         sold.style.backgroundColor="red"
//     }

})

let remove=document.createElement("button")
remove.innerText="Remove"

remove.addEventListener("click",function(){
   getdata.splice(indx,1)
  
   localStorage.setItem("Products",JSON.stringify(getdata))
   window.location.reload()
   alert("Want To Remove Item? Then Click Ok")
})

box.append(img,name,category,price,gender,sold,remove)
display.append(box)
});

