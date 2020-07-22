//Question  2:
            //Write a program that will diplay the multiplication table of a number on the webpage in a proper
            //format.Take the input from the user  
              //  Input-5 
                //output-5        
                //5X1=5
               // 5X2=10
               // and so on...
                //solution

let userInput=Number(prompt("Enter a number"));
let tables=null;
let pTables=document.getElementById('ptable');
let h3Tables=document.getElementById('h3table');     
//styling of webpage

h3Tables.style.fontSize= "25px";
pTables.style.fontSize= "20px";
pTables.style.fontSize= "20px";
h3Tables.style.marginLeft= "10px";
console.log(userInput !=="");

//logic to print tables

if(userInput !=null && userInput !=""){
    h3Tables.innerText=`Table of ${userInput} :-`;
    for(i=1;i<=12;i++){
        tables=`${userInput} X {i} = ${userInput*i}<br>`;
        //console.log(tables);
        pTables.innerHTML +=tables;
    }
}