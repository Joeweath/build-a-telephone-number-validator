const userInput = document.getElementById('user-input')
const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const resultDiv = document.getElementById('results-div')
checkBtn.addEventListener('click', () => {
    
    if(!userInput.value){
        resultDiv.textContent = "Please provide a phone number"
    }
})

clearBtn.addEventListener('click', () => {
    resultDiv.textContent = ""
})
