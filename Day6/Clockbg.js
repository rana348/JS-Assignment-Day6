//Question  3:
          //  Make a webpage that will ask the name of the user.then will display a welcome massage on 
        //the webpage also the webpage should also have a clock.
        //using the toggle method of classlist add mode feature to the website

let userName =prompt("Enter the name:-"); 
let bodyBg=document.getElementById('bodyBg');   
let h3Name=document.getElementById('h3Name');
let h3Clock=document.getElementById('Clock');
let btn=document.getElementById('btn');

h3Name.innerText='welcome ${userName} ';

btn.onClick =()=>{
    bodyBg.classList.toggle('bg');
}

function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    h3Clock.innerText=time;
}
setInterval(clock,1000)     //live clock
        