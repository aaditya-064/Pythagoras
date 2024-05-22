const currentForm = document.getElementById("main_form")
const baseValue = document.querySelector(".base_")
const perpendicularValue = document.querySelector(".perpendicular_")
const resultValue = document.querySelector(".result")




currentForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const b = Number(baseValue.value)
    const p = Number(perpendicularValue.value)
    if(b == p){
        alert("Please enter different Numbers");
        return;
    }
    const hSqaure = p ** 2 + b ** 2;
    const hypotenuse= Math.sqrt(hSqaure);
    // console.log(sum);
    resultValue.innerHTML= "The hypotenuse is:   " + hypotenuse;
    // console.log(baseValue.value); 

    

})