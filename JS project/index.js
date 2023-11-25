let input=document.querySelector(`input`);
let innerBox=document.querySelector(".inner-box");
let outerBox=document.querySelector(".outer-box");
let mode=document.querySelector(`.mode`);
input.style.fontSize="1.25rem";
const clean=()=>{input.value = ' ';}
const display=(value)=>{input.value+=value;}
const equal=()=>{
    let expression=input.value;
    let result=eval(expression);
    clean();
    display(result);
}
let Body=document.querySelector("body");
Body.style.outline="5px dashed white";
let Button=document.querySelector("button");
const invert=()=>{
    if(Body.style.backgroundColor==="black")
    {
        Body.style.backgroundColor="White";
        Body.style.outlineColor="black";
        Button.style.backgroundColor="black";
        Button.style.color="white";
        mode.innerHTML=`<span class="material-symbols-outlined">dark_mode</span>`;
        Button.prepend(mode);
        innerBox.style.backgroundColor="green";
        outerBox.style.backgroundColor="blue";
    }
    else{
        Body.style.backgroundColor="black";
        Body.style.outlineColor="white";
        Button.style.backgroundColor="white";
        mode.innerHTML=`<span class="material-symbols-outlined">light_mode</span>`;
        Button.prepend(mode);
        Button.style.color="red";
        innerBox.style.backgroundColor="blue";
        outerBox.style.backgroundColor="rgb(218,197,197)";
    }

}