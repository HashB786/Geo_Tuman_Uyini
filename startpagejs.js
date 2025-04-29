let input = document.getElementById("input")
let con = document.getElementById("con")
let page = document.getElementById("Starter")
let Main = document.getElementById("Main")

let CheckingH = document.createElement("h3")
let button = document.createElement("button")

button.style.width = "10px" 
button.style.height = "10px"
button.textContent = "Ok"



button.onclick = () => {

    page.style.display = "None"
    Main.style.filter = "None"
    Main.style.zIndex = "1"
}





con.onclick = ()=>{
    page.appendChild(CheckingH)
    if (input.value == "12345"){
        CheckingH.textContent = `✅Correct!`
        page.appendChild(button)
    }else{
        CheckingH.textContent = `❌Incorrect!`
    }

}

