
let bodyColor = document.getElementsByTagName("body")[0]
let password = document.getElementsByClassName("input-pass")[0]
let slider = document.getElementsByClassName("character-liner")[0]
let lengthValue = document.getElementsByClassName("length-value")[0]
let checkUpperCase = document.getElementsByClassName("check-uppercase")[0]
let checkLowerCase = document.getElementsByClassName("check-lowercase")[0]
let checkNumbercase = document.getElementsByClassName("check-number")[0]
let checkSymbolcase = document.getElementsByClassName("check-symbol")[0]
let strenghtResult = document.getElementsByClassName("strenght-result")[0]
let generate = document.getElementsByClassName("generate")[0]


max = slider.max

slider.addEventListener("input", ()=>{
    lengthValue.innerText = slider.value
    slider.style.background = `linear-gradient(to right, #a4ffaf ${slider.value/max*100}%, #18171f ${slider.value/max*100}% 100%)`;
    generated()
})

let uppercase = 0
let lowercase = 0
let numbers = 0
let symbols = 0

checkUpperCase.addEventListener ("click", ()=>{
    if (uppercase == 0) {
    uppercase = 1
    } else {
        uppercase = 0 
    }
    generated()
})

checkLowerCase.addEventListener ("click", ()=>{
    if (lowercase == 0) {
        lowercase = 1
    } else {
        lowercase = 0 
    }
    generated()
})

checkNumbercase.addEventListener ("click", ()=>{
    if (numbers == 0) {
        numbers = 1
    } else {
        numbers = 0 
    }
    generated()
})

checkSymbolcase.addEventListener ("click", ()=>{
    if (symbols == 0) {
        symbols = 1
    } else {
        symbols = 0 
    }
    generated()
})



function generated () {

    if (uppercase == 1 && slider.value > 0 && slider.value <= 5) {
        strenghtResult.style.display = "block"
        strenghtResult.innerText = "TOO WEAK!"
        bodyColor.classList.add("tooWeak")
        bodyColor.classList.remove("weak", "medium", "strong")
        character = upperCaseSymbols
        random(slider.value)
    } else {

    if (uppercase == 1 && lowercase == 1 && /*slider.value > 5 &&*/ slider.value <= 10) {
        strenghtResult.style.display = "block"
        strenghtResult.innerText = "WEAK!"
        bodyColor.classList.add("weak")
        bodyColor.classList.remove("tooWeak", "medium", "strong")
        character = upperCaseSymbols + lowerCaseSymbols
        random(slider.value)
    } else {

    if (uppercase == 1 && lowercase == 1 && numbers == 1 && slider.value > 10 && slider.value <= 15) {
        strenghtResult.style.display = "block"
        strenghtResult.innerText = "MEDIUM"
        bodyColor.classList.add("medium")
        bodyColor.classList.remove("weak", "tooWeak", "strong")
        character = upperCaseSymbols + lowerCaseSymbols + numberSymbols
        random(slider.value)
    }  else {

    if (uppercase == 1 && lowercase == 1 && numbers == 1 && symbols == 1 && slider.value > 15 && slider.value <= 20) {
        strenghtResult.style.display = "block"
        strenghtResult.innerText = "STRONG"
        bodyColor.classList.add("strong")
        bodyColor.classList.remove("weak", "tooWeak", "medium")
        character = upperCaseSymbols + lowerCaseSymbols + numberSymbols + symbolSymbols
        random(slider.value)
    } else {
        bodyColor.classList.remove("weak", "tooWeak", "medium", "strong")
      
    }
    }
    }
    }
}


    
    
let result = ""
    function random (length){        
        
        let characterlength = character.length
        if (result == ""){
            for (i=1; i<=length; i++) {
            result += character.charAt(Math.floor(Math.random() * characterlength))
}    
        } else result = ""
            
    }
    generate.addEventListener("click", () =>{
        
        
        if (password.innerText == ""){
            console.log("yes")
            password.innerText = result
        console.log(result)
        console.log(password.innerText)
        } else {
            password.innerText = ""
            console.log("no")
            result = ""
            console.log(password.innerText)
            console.log(result)
            
            
        }
        // console.log("result")
        random(slider.value)
        console.log(slider.value)
    })

      
upperCaseSymbols = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
lowerCaseSymbols = `abcdefghijklmnopqrstuvwxyz`
numberSymbols = `0123456789`
symbolSymbols = `~!@#$%^&*()_-+={[}]|\:;"'<,>.?/`
// character = upperCaseSymbols + lowerCaseSymbols + numberSymbols + symbolSymbols









