let message="";
let alive=false;
let arr = [0] ;
let sume=0

let hasBlackJack =false
 let Coinel = document.getElementById("Coins")
let SUMel = document.getElementById("Sum")
let MessageEventl=document.getElementById("Cat")



function getRandomNumber(){
   let randomNumber= Math.floor(Math.random()*13)+1
   if (randomNumber > 10) {
    return 10
} else if (randomNumber === 1) {
    return 11
} else {
    return randomNumber
}
}
function NewCard(){
    if (hasBlackJack==false && alive==true){
   let v = getRandomNumber()
   sume+=v
   arr.push(v)
   cat()
    }
}


function cat(){
    Coinel.textContent="Cards: "
    for (let i = 0; i < arr.length; i++) {
        Coinel.textContent += arr[i] + " "
    }
    SUMel.textContent = "Sum: " + sume

  if (sume<=21){
message="Do you want to add one more card"
alive=true
}
else if(sume==21){
  message="You got Blackjack"
  hasBlackJack=true
}
else{
    message="You just lost the game "
    alive=false
}
MessageEventl.textContent=message
}
function startgame(){
    let firstcoin=getRandomNumber()
let secondcoin =getRandomNumber()
 arr =[firstcoin,secondcoin  ]
  sume= firstcoin+secondcoin
  Coinel.textContent +=arr[0] + " " +arr[1]
SUMel.textContent += sume
alive = true
cat()
}

