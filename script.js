let button = document.querySelector(".button")
let v1 = document.querySelector("#v1")
let v2 = document.querySelector("#v2")
let v3 = document.querySelector("#v3")
let v4 = document.querySelector("#v4")
let n1 = document.querySelector(".n1")
let result = document.querySelector(".result")
let symbols_1 = ["q","w","e","r","t","y","u","i","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
let symbols_2 = ["Q","W","E","R","T","Y","U","I","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
let symbols_3 = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","{","}",":",";","?"]
function random_number(min,max){
    let symbol = 0
    parseInt(symbol)
    symbol = Math.random()*(max-min)
    symbol = Math.round(symbol)
    return symbol
}
function generate(){
    let password = ''
    let i = n1
    parseInt(i)
    i = i+1
    while (i>0){
        password += random_number(0,9)
        i=+i-1
    }
    result = password
    result.innerHTML
}
button.addEventListener('click', generate())