let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstEl = document.getElementById("first")
let secondEl = document.getElementById("second")
function genPassword(){
for(i = 0 ; i < 10; i++){
let password1 = Math.floor(Math.random()*characters.length)
let password2 = Math.floor(Math.random()*characters.length)
let password3 = Math.floor(Math.random()*characters.length)
let password4 = Math.floor(Math.random()*characters.length)
let password5 = Math.floor(Math.random()*characters.length)
let password6 = Math.floor(Math.random()*characters.length)
let password7 = Math.floor(Math.random()*characters.length)
let password8 = Math.floor(Math.random()*characters.length)
let password9 = Math.floor(Math.random()*characters.length)
let password0 = Math.floor(Math.random()*characters.length)

let password11 = Math.floor(Math.random()*characters.length)
let password12 = Math.floor(Math.random()*characters.length)
let password13 = Math.floor(Math.random()*characters.length)
let password14 = Math.floor(Math.random()*characters.length)
let password15 = Math.floor(Math.random()*characters.length)
let password16 = Math.floor(Math.random()*characters.length)
let password17 = Math.floor(Math.random()*characters.length)
let password18 = Math.floor(Math.random()*characters.length)
let password19 = Math.floor(Math.random()*characters.length)
let password10 = Math.floor(Math.random()*characters.length)

firstEl.textContent =  characters[password1] + characters[password2] + characters[password3] + characters[password4]+ characters[password5] + characters[password6] + characters[password7] + characters[password8]+ characters[password9]+ characters[password0]

secondEl.textContent =  characters[password11] + characters[password12] + characters[password13] + characters[password14]+ characters[password15] + characters[password16] + characters[password17] + characters[password18]+ characters[password19]+ characters[password10]
}
}





