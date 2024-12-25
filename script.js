script.js
const prenom=document.getElementById("firstname");
const nom=document.getElementById("lastname");
const email=document.getElementById("email");
const pw=document.getElementById("password");
const confirmpw=document.getElementById("confirmerpassword");
const genre=document.getElementById("gender");
const pays=document.getElementById("country");
let btn=document.getElementById("btn");

btn.addEventListener("click",verif);
function verif(){
    clearErrors();
    let hasError=false;
    if(prenom.value.trim()=== ""){
        showError(prenom,"erreur: prenom requis .");
        hasError=true;


    }
    const emailpattern=/^[^\s@]+@[^\^s@]+\.[^\s@]+/;
    if (!emailpattern.test(email.value.trim())){
        showError(email,"erreur:email invalide.");
        hasError=true;
    }
    if()
}