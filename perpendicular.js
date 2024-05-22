const currentForm = document.getElementById("main_form")
const baseValue = document.querySelector(".base_")
const hypotenuseValue = document.querySelector(".hypotenuse_")
const resultValue = document.querySelector(".result")




currentForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const b = Number(baseValue.value)
    const h = Number(hypotenuseValue.value)
    if(h < b || h == b){
        alert("Please enter the correct or different number")
        return;
    }
    const pSqaure = h ** 2 - b ** 2;
    const perpendicular= Math.sqrt(pSqaure);
    // console.log(sum);
    resultValue.innerHTML= "The perpendicular is:   " + perpendicular;
    // console.log(baseValue.value); 

    

})