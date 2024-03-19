const userInput = document.getElementById('user-input')
const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const resultDiv = document.getElementById('results-div')

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;




checkBtn.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();
    console.log("Input phone number:", phoneNumber); 
    if (!phoneNumber) {
        alert("Please provide a phone number");
        return;
    }
    if (regex.test(phoneNumber)) {
        resultDiv.textContent = `Valid US number: ${phoneNumber}`;
    } else {
        resultDiv.textContent = `Invalid US number: ${phoneNumber}`;
    }
});


clearBtn.addEventListener('click', () => {
    resultDiv.textContent = ""
})
