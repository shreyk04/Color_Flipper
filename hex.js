const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const color_name=document.querySelector(".color_name");
const btn=document.getElementById("btn");
btn.addEventListener("click",function(){
  
    
    let hexColor="#";
    for(let i=0;i<6;i++){
      hexColor+=hex[ranNo()];
    }
    document.body.style.backgroundColor=hexColor;
    color_name.innerHTML=hexColor;
    document.querySelector(".color_name").style.color=hexColor;

   
});
function ranNo(){
 return Math.floor(Math.random()*hex.length);

}