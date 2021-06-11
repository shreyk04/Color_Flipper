const colors=["green","red","pink","yellow","silver","gold","violet","crimson","blue","orange"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color_name");
btn.addEventListener("click",function () {
    const randomNumber=ranNo();
    console.log(randomNumber);
   
  document.body.style.backgroundColor = colors[randomNumber];
  color.innerHTML=colors[randomNumber];
 document.querySelector(".color_name").style.color=colors[randomNumber];


});
function ranNo(){
    return Math.floor(Math.random()*10);
}
