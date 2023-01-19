let userid=document.getElementById("admin-userid");
let button=document.getElementById("admin-btn");
let password=document.getElementById("admin-password");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    fetch("./UserAPIs/admin.json")
    .then((data)=>{
        return data.json();
    })
    .then((res)=>{
        fetchdata=res;
        adminsignin(res);
    })  
    .catch((error)=>{
        console.log(error);
    })
});
function adminsignin(data){
    data.forEach((element)=>{
        if(userid.value==element.UserID){
            if(password.value==element.password){
               alert("Welcome Back Admin !");
            }else{
                alert("Wrong Password. Re-Enter your Password !");
            }
        }else{
            alert("You are not an Admin !");
        }
    })
}
