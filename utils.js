export const setoptions = (regions) =>{
    const enteredAnswer =  document.getElementById("EnterAnswer")
    regions.forEach((reg,index) => {
        const option = document.createElement("option")
        option.setAttribute("value",index)
        option.setAttribute("name",reg)
        option.textContent = reg
        enteredAnswer.appendChild(option)
    });
}