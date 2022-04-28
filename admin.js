

/
function addProduct(productname,category,image,price,gender){
this.productname=productname
this.category=category
this.image=image
this.price=price
this.gender=gender
}


document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault()

     let  productname=document.getElementById("name").value
     let category=document.getElementById("category").value
     let image=document.getElementById("image").value
     let price=document.getElementById("price").value
     let gender=document.getElementById("Gender").value

     let data= new addProduct(productname,category,image,price,gender)
     console.log(data)

     let get=JSON.parse(localStorage.getItem("Products"))
     
let arr
     if(get===null){
arr=[]
     }
     else{
         arr=get
     }
 arr.push(data)
 localStorage.setItem("Products",JSON.stringify(arr))
 alert("Your Product has been added")
})


