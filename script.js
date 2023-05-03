// console.log(18);
// console.log("concole");
// let nickname="unmarked_saturn_4"
// console.log(nickname);
// let age=24
// console.log(age);
// console.log("his nickname is "+ nickname + " his age is  "+ age +  " years old");
// console.log("chat with "+nickname)
let podskazky=document.getElementById("podskazky")
let secret=Math.floor(Math.random()*10)
let hp=3
let checkButton=document.getElementById("checkButton")
let input=document.getElementById("numberInput")
let hpTitle=document.getElementById("hpTitle")
hpTitle.innerHTML="✈️".repeat(hp)
console.log(checkButton);
checkButton.onclick=function(){
    console.log(input.value);
    if (input.value==secret){
     console.log("win");

     title.innerHTML="win"
    }
    else{
        console.log("no");
        hp=hp-1
        hpTitle.innerHTML="✈️".repeat(hp)
        if (secret<input.value ){
    
            console.log('secret number smaller than input.value ')
            podskazky.innerHTML="secret  number is smaller than your number" 
        }
        else{
        console.log('secret number bigger than input.value');
        podskazky.innerHTML="secret  number is bigger than your number" 

        }
        if (hp==0){
            hpTitle.innerHTML="💀💀💀"
        checkButton.disabled=true
        console.log("yo lose secret number is "+secret);
    title.innerHTML="you lose secret number is "+ secret
        }
    }
    input.select()
}
let newgame=document.getElementById("newgame")
console.log(newgame);
newgame.onclick=function(){
    console.log('new game');
        
        podskazky.innerHTML="Type a number from 1 to 10 and press Check"
 hp=3
 hpTitle.innerHTML="✈️".repeat(hp)
 checkButton.disabled=false
 title.innerHTML="Number quiz"
 secret=Math.floor(Math.random()*10)
}
let title=document.getElementById("title")
console.log(title);
title.onclick=function(){
    console.log('Title');
}



