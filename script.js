

const passwordEl = document.querySelector(".password");
const copyEl = document.querySelector(".copy");
const button = document.querySelector(".button-box");
const span = document.querySelector(".copied");


function generatePassword(){
    span.classList.remove("visible");
    const characters = "QAZ*WS()XEDCRF![]?VTG*()BY!?HNUJMI!?*KOLPq!?a[]zwsxedc!?rfvt*!?gbyh*!{}?nujm?*!ik{)}o!?lp*12!?34567890!!?"
    const length = 15;
    let password = "";
    for(i = 0; i < length; i++){
        randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        password += randomChar;
    }
    passwordEl.innerText = password;
};

copyEl.addEventListener("click", ()=>{
    if(passwordEl.innerText !== ""){
        navigator.clipboard.writeText(passwordEl.innerText)
        .then(()=>{
            span.classList.add("visible");
        })
        .catch(error =>{
            console.log(error);
        })
    }else{
        alert("Nothing to Copy..")
    }
})

button.addEventListener("click", generatePassword);