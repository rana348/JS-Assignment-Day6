/*QuestionWrite a program that will iterate over an array of colors and change the background of the page
            after 5 seconds.*/

let arrColor=['Red','Blue','Yellow','Green','skyblue','grey'];

let bg=document.getElementById('bg');

function changeBg(){
    const arrColorLength=arrColor.length;
    let random=Math.trunc(Math.random()*arrColorLength);
    console.log(arrColor[random]);
    bg.style.backgroundColor=arrColor[random];
}
setInterval(changeBg,5000);
