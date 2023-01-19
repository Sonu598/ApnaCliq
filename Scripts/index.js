
window.addEventListener("load",()=>{
    getProductsData()
})


//slideShow1
let slideShow1=[
    'https://assets.tatacliq.com/medias/sys_master/images/45584593518622.gif',
    'https://assets.tatacliq.com/medias/sys_master/images/45584595386398.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/45581158809630.jpg',
    'https://assets.tatacliq.com/medias/sys_master/images/45554503090206.jpg'
]

let slideImg=document.getElementById("slideImg")
let i=0;
setInterval(()=>{
   if(i==slideShow1.length){
    i=0;
   }
    slideImg.src=slideShow1[i++]
   
},2500)

async function getProductsData(){
    let res= await fetch("./userAPIs/products.json")
    let data= await res.json()

    //#logo
 document.getElementById("menWear").addEventListener("click",()=>{
           let menWearData=data.filter((el)=>{
               return el.category==='menwear'
           })
        localStorage.setItem("products",JSON.stringify(menWearData))
})

 document.getElementById("shoes").addEventListener("click",()=>{
        let shoesData=data.filter((el)=>{
            return el.category==='shoes'
        })
     localStorage.setItem("products",JSON.stringify(shoesData))
 })

 document.getElementById("jewelery").addEventListener("click",()=>{
    let jeweleryData=data.filter((el)=>{
        return el.category==='jewelery'
    })
 localStorage.setItem("products",JSON.stringify(jeweleryData))
})

document.getElementById("electronics").addEventListener("click",()=>{
    let electronicsData=data.filter((el)=>{
        return el.category==='electronics'
    })
 localStorage.setItem("products",JSON.stringify(electronicsData))
})

document.getElementById("womenWear").addEventListener("click",()=>{
    let womenWearData=data.filter((el)=>{
        return el.category==='womenwear'
    })
 localStorage.setItem("products",JSON.stringify(womenWearData))
})

document.getElementById("watch").addEventListener("click",()=>{
    let watchData=data.filter((el)=>{
        return el.category==='watch'
    })
 localStorage.setItem("products",JSON.stringify(watchData))
})

//#category
document.getElementById("menWear2").addEventListener("click",()=>{
    let menWearData=data.filter((el)=>{
        return el.category==='menwear'
    })
 localStorage.setItem("products",JSON.stringify(menWearData))
})

document.getElementById("shoes2").addEventListener("click",()=>{
 let shoesData=data.filter((el)=>{
     return el.category==='shoes'
 })
localStorage.setItem("products",JSON.stringify(shoesData))
})

document.getElementById("jewelery2").addEventListener("click",()=>{
let jeweleryData=data.filter((el)=>{
 return el.category==='jewelery'
})
localStorage.setItem("products",JSON.stringify(jeweleryData))
})

document.getElementById("electronics2").addEventListener("click",()=>{
let electronicsData=data.filter((el)=>{
 return el.category==='electronics'
})
localStorage.setItem("products",JSON.stringify(electronicsData))
})

document.getElementById("womenWear2").addEventListener("click",()=>{
let womenWearData=data.filter((el)=>{
 return el.category==='womenwear'
})
localStorage.setItem("products",JSON.stringify(womenWearData))
})

document.getElementById("watch2").addEventListener("click",()=>{
let watchData=data.filter((el)=>{
 return el.category==='watch'
})
localStorage.setItem("products",JSON.stringify(watchData))
})
 
//search
document.getElementById("search")








    
    
  
}





