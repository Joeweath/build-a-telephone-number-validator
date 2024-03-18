const userInput = document.getElementById('user-input')
const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const resultDiv = document.getElementById('results-div')

const regex = /^1?\s?\(?\d{3}\)?\s?-?\d{3}-?\d{4}$/

checkBtn.addEventListener('click', () => {
    
    if(!userInput.value){
        alert("Please provide a phone number")
    }
    if(regex.test(userInput.value)){
        resultDiv.textContent = `Valid US number: ${userInput.value}`
    } 
})

clearBtn.addEventListener('click', () => {
    resultDiv.textContent = ""
})
