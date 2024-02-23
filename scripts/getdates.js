document.getElementById("currentYear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = "Last Modified: " + document.lastModified;

const visitdisplay=document.querySelector(".visits")
let numberOfVisits=Number(localStorage.getItem("visits-lst"));

if(numberOfVisits!==0){
         visitdisplay.textContent=numberOfVisits;
}else{
    visitdisplay.textContent="This is your first visit";

}
numberOfVisits++;
localStorage.setItem("visits-lst",numberOfVisits);
