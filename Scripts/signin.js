
// scripts for design

var x=document.getElementById("signin");
var y=document.getElementById("signup");
var z=document.getElementById("btn");
function signup(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}
function signin(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0";
}

// scripts for sign up

let UserID=document.getElementById("signup-userid");
let emailid=document.getElementById("emailid")
let Password=document.getElementById("signup-password");
let LSData= [];
let btn=document.getElementById("signup-btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let obj={
    userid:UserID.value,
    email:emailid.value,
    password:Password.value,
    };
    let accountdata=JSON.parse(localStorage.getItem("account-data"));
    if(accountdata==null) accountdata=[];
    accountdata.push(obj);
    localStorage.setItem("account-data",JSON.stringify(accountdata));
});

// scripts for sign in

let LSdata=JSON.parse(localStorage.getItem("account-data"));
let userid=document.getElementById("signin-userid");
let button=document.getElementById("signin-btn");
let password=document.getElementById("signin-password");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    LSdata.forEach((element,index)=>{
        if(userid.value==element.userid){
            if(password.value==element.password){
               alert("Welcome to ApnaCliq!");
               window.open("/index.html");
            }else{
                alert("Wrong Password. Re-Enter your Password!");
            }
        }else{
            alert("User ID not found! Sign Up Now!");
        }
    })   
});